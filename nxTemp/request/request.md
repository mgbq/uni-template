# request请求、配置简单、批量上传图片、视频、超强适应性（支持多域名请求）
1. 配置简单、源码清晰注释多、适用于一项目多域名请求、第三方请求、七牛云图片上传、本地服务器图片上传等等
2. 支持请求`get`、`post`、`put`、`delete`
3. 自动显示请求加载动画（可单个接口关闭）
4. 全局`api`数据处理函数，只回调请求正确的数据（可单个接口关闭）
5. 未登录或登录失效自动拦截并调用登录方法（可单个接口关闭）
6. 全局自动提示接口抛出的错误信息（可单个接口关闭）
7. 支持 Promise
8. 支持拦截器
9. 支持七牛云文件（图片、视频）批量上传
10. 支持本地服务器文件（图片、视频）批量上传
11. 支持上传文件拦截过滤
12. 支持上传文件进度监听
13. 支持上传文件单张成功回调

| `QQ交流群(736073015)`|


### 常见问题
1.接口请求成功了，没有返回数据或者数据是走的catch回调

答：`requestConfig.js` 请求配置文件里面，有一个`$http.dataFactory`方法，里面写的只是参考示例，`此方法需要开发者根据各自的接口返回类型修改`

2.官方的方法有数据，本插件方法请求报错跨域问题

答：`requestConfig.js` 请求配置文件里面，`header`请求头设置的`content-type`请求类型需求和后台保持一致

3.登录后用户`token`怎么设置？

答：`requestConfig.js` 请求配置文件里面，`$http.requestStart`请求开始拦截器里面设置

4.怎么判断上传的文件（图片）太大？怎么过滤掉太大的文件（图片）？

答：`requestConfig.js` 请求配置文件里面，`$http.requestStart`请求开始拦截器里面设置

### 本次更新注意事项
1. 所有的headers都改成了header（和官方统一）
2. 七牛云的获取token等信息提取到了`requestConfig.js`文件，参考如下

```
// 添加获取七牛云token的方法
$http.getQnToken = function(callback){
	//该地址需要开发者自行配置（每个后台的接口风格都不一样）
	$http.get("api/kemean/aid/qn_upload").then(data => {
		/*
		 *接口返回参数：
		 *visitPrefix:访问文件的域名
		 *token:七牛云上传token
		 *folderPath:上传的文件夹
		 *region: 地区 默认为：SCN
		 */
		callback({
			visitPrefix: data.visitPrefix,
			token: data.token,
			folderPath: data.folderPath,
			region: "SCN"
		});
	});
}
```

### 文件说明
1. `request => core` 请求方法的目录
2. `request => core => request.js` 请求方法的class文件
3. `request => core => utils.js` 请求方法的源码文件
4. `request => upload` 上传方法的目录
5. `request => upload => upload.js` 上传方法的class文件
6. `request => upload => utils.js` 上传方法源码文件
7. `request => upload => qiniuUploader.js` 七牛云官方上传文件
8. `request => index.js` 输出方法的文件
9. `requestConfig.js` 请求配置文件（具体看代码）

### 在main.js引入并挂在Vue上
```
import $http from '@/zhouWei-request/requestConfig';
Vue.prototype.$http = $http;
```

### 通用请求方法
```
this.$http.request({
	url: 'aid/region',
	method: "GET", // POST、GET、PUT、DELETE、JSONP，具体说明查看官方文档
	data: {pid:0},
	timeout: 30000,  // 默认 30000 说明：超时时间，单位 ms，具体说明查看官方文档
	dataType: "json",  // 默认 json 说明：如果设为 json，会尝试对返回的数据做一次 JSON.parse，具体说明查看官方文档
	responseType: "text",  // 默认 text 说明：设置响应的数据类型。合法值：text、arraybuffer，具体说明查看官方文档
	withCredentials: false,  // 默认 false 说明：跨域请求时是否携带凭证（cookies），具体说明查看官方文档
	isPrompt: true,//（默认 true 说明：本接口抛出的错误是否提示）
	load: true,//（默认 true 说明：本接口是否提示加载动画）
	header: { //默认 无 说明：请求头
		'Content-Type': 'application/json'
	},
	isFactory: true, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数将失去作用）
}).then(function (response) {
	//这里只会在接口是成功状态返回
}).catch(function (error) {
	//这里只会在接口是失败状态返回，不需要去处理错误提示
	console.log(error);
});
```

### get请求 正常写法 
```
this.$http.get('aid/region',{pid:0}).
then(function (response) {
	//这里只会在接口是成功状态返回
}).catch(function (error) {
	//这里只会在接口是失败状态返回，不需要去处理错误提示
	console.log(error);
});
```

### post请求 async写法 
```
async request(){
	let data = await this.$http.post('aid/region',{pid:0});
	console.log(data);
}
```

### 其他功能配置项
```
let data = await this.$http.post(
	'http://www.aaa.com/aid/region', //可以直接放链接(将不启用全局定义域名)
	{
		pid:0
	}, 
	{
		isPrompt: true,//（默认 true 说明：本接口抛出的错误是否提示）
		load: true,//（默认 true 说明：本接口是否提示加载动画）
		header: { //默认 无 说明：请求头
			'Content-Type': 'application/json'
		},
		isFactory: true //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数将失去作用）
	}
);
```

### `requestConfig.js`可以设置服务器上传图片默认url
```
//可以new多个request来支持多个域名请求
let $http = new request({
	//服务器本地上传文件地址
	fileUrl: base.baseUrl,
	// 服务器上传图片默认url
	defaultUploadUrl: "api/common/v1/upload_image",
});
```
```
// 上传可以不用传递url（使用全局的上传图片url）
this.$http.urlImgUpload({
	name:"后台接受文件key名称", //默认 file
	count:"最大选择数",//默认 9
	sizeType:"选择压缩图原图，默认两个都选",//默认 ['original', 'compressed']
	sourceType:"选择相机拍照或相册上传 默认两个都选",//默认 ['album','camera']
	data:"而外参数" //可不填,
});
// 上传可以不用传递url（使用全局的上传图片url）
this.$http.urlVideoUpload({
	sourceType:"选择相机拍照或相册上传 默认两个都选",//默认 ['album','camera']
	compressed:"是否压缩所选的视频源文件，默认值为 true，需要压缩",//默认 false
	maxDuration: "拍摄视频最长拍摄时间，单位秒。最长支持 60 秒", //默认 60
	camera: '前置还是后置摄像头', //'front'、'back'，默认'back'
	name:"后台接受文件key名称", //默认 file
	data:"而外参数" //可不填,
});
// 上传可以不用传递url（使用全局的上传图片url）
this.$http.urlFileUpload({
	files: [], // 必填 临时文件路径 格式: [{path: "图片地址"}]
	data:"向服务器传递的参数", //可不填
	name:"后台接受文件key名称", //默认 file
});
```

### 本地服务器图片上传（支持多张上传）
```
this.$http.urlImgUpload('flie/upload',{
	name:"后台接受文件key名称", //默认 file
	count:"最大选择数",//默认 9
	sizeType:"选择压缩图原图，默认两个都选",//默认 ['original', 'compressed']
	sourceType:"选择相机拍照或相册上传 默认两个都选",//默认 ['album','camera']
	data:"而外参数" //可不填,
	isPrompt: true,//（默认 true 说明：本接口抛出的错误是否提示）
	load: true,//（默认 true 说明：本接口是否提示加载动画）
	header: { //默认 无 说明：请求头
		'Content-Type': 'application/json'
	},
	isFactory: true, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
	maxSize: 300000, //（默认 无 说明：上传的文件最大字节数限制，默认不限制）
	onSelectComplete: res => {
		console.log("选择完成返回：",res);
	},
	onEachUpdate: res => {
		console.log("单张上传成功返回：",res);
	},
	onProgressUpdate: res => {
		console.log("上传进度返回：",res);
	}
}).then(res => {
	console.log("全部上传完返回结果：",res);
});
```
### 本地服务器视频上传
```
this.$http.urlVideoUpload('flie/upload',{
	sourceType:"选择相机拍照或相册上传 默认两个都选",//默认 ['album','camera']
	compressed:"是否压缩所选的视频源文件，默认值为 true，需要压缩",//默认 false
	maxDuration: "拍摄视频最长拍摄时间，单位秒。最长支持 60 秒", //默认 60
	camera: '前置还是后置摄像头', //'front'、'back'，默认'back'
	name:"后台接受文件key名称", //默认 file
	data:"而外参数" //可不填,
	isPrompt: true,//（默认 true 说明：本接口抛出的错误是否提示）
	load: true,//（默认 true 说明：本接口是否提示加载动画）
	header: { //默认 无 说明：请求头
		'Content-Type': 'application/json'
	},
	isFactory: true, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
	maxSize: 300000, //（默认 无 说明：上传的文件最大字节数限制，默认不限制）
	onProgressUpdate: res => {
		console.log("上传进度返回：",res);
	},
	onSelectComplete: res => {
		console.log("选择完成返回：",res);
	},
}).then(res => {
	console.log("全部上传完返回结果：",res);
});
```
### 本地服务器文件上传（支持多张上传）
```
this.$http.urlFileUpload("flie/upload",{
	files: [], // 必填 临时文件路径 格式: [{path: "图片地址"}]
	data:"向服务器传递的参数", //可不填
	name:"后台接受文件key名称", //默认 file
	isPrompt: true,//（默认 true 说明：本接口抛出的错误是否提示）
	load: true,//（默认 true 说明：本接口是否提示加载动画）
	header: { //默认 无 说明：请求头
		'Content-Type': 'application/json'
	},
	isFactory: true, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
	maxSize: 300000, //（默认 无 说明：上传的文件最大字节数限制，默认不限制）
	onEachUpdate: res => {
		console.log("单张上传成功返回：",res);
	},
	onProgressUpdate: res => {
		console.log("上传进度返回：",res);
	}
}).then(res => {
	console.log("全部上传完返回结果：",res);
});
```

### 七牛云图片上传（支持多张上传）
```
this.$http.qnImgUpload({
	count:"最大选择数", // 默认 9
	sizeType:"选择压缩图原图，默认两个都选", // 默认 ['original', 'compressed']
	sourceType:"选择相机拍照或相册上传 默认两个都选", // 默认 ['album','camera']
	load: true, //（默认 true 说明：本接口是否提示加载动画）
	maxSize: 300000, //（默认 无 说明：上传的文件最大字节数限制，默认不限制）
	onSelectComplete: res => {
		console.log("选择完成返回：",res);
	},
	onEachUpdate: res => {
		console.log("单张上传成功返回：",res);
	},
	onProgressUpdate: res => {
		console.log("上传进度返回：",res);
	}
}).then(res => {
	console.log("全部上传完返回结果：",res);
});
```
### 七牛云视频上传
```
this.$http.qnVideoUpload({
	sourceType:"选择相机拍照或相册上传 默认两个都选",//默认 ['album','camera']
	compressed:"是否压缩所选的视频源文件，默认值为 true，需要压缩",//默认 false
	maxDuration: "拍摄视频最长拍摄时间，单位秒。最长支持 60 秒", //默认 60
	camera: '前置还是后置摄像头', //'front'、'back'，默认'back'
	load: true,//（默认 true 说明：本接口是否提示加载动画）
	maxSize: 300000, //（默认 无 说明：上传的文件最大字节数限制，默认不限制）
	onSelectComplete: res => {
		console.log("选择完成返回：",res);
	},
	onProgressUpdate: res => {
		console.log("上传进度返回：",res);
	}
}).then(res => {
	console.log("全部上传完返回结果：",res);
});
```
### 七牛云文件上传（支持多张上传）
```
this.$http.qnFileUpload(
{
	files:[], // 必填 临时文件路径 格式: [{path: "图片地址"}]
	load: true, //（默认 true 说明：本接口是否提示加载动画）
	maxSize: 300000, //（默认 无 说明：上传的文件最大字节数限制，默认不限制）
	onEachUpdate: res => {
		console.log("单张上传成功返回：",res);
	},
	onProgressUpdate: res => {
		console.log("上传进度返回：",res);
	}
}).then(res => {
	console.log("全部上传完返回结果：",res);
});
```
### jsonp 跨域请求（只支持H5）
```
let data = await this.$http.jsonp('http://www.aaa.com/aid/region',{pid:0}, {
    isFactory: false, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
});
```
