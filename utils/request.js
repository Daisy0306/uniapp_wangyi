export default function(url,data={},method="GET"){
	return new Promise((resolve,reject) => {
		uni.request({
			url,
			data,
			method,
			success(res){
				resolve(res.data);
			},
			fail(error){
				// 因为发请求的时候使用的是 async + await语法，
				// 如果有一个请求出错，后面的请求就不会执行，页面就无法正常加载，用户体验很差
				// 所以需要 改为成功状态，不能影响页面加载
				// reject(error);
				resolve(false);
			}
		})
	})
}