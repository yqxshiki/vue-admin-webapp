module.exports = {
	publicPath: './',                 //根路径
	devServer: {
		open: true,              //自动开启首页
		host: 'localhost',
		// port: '8080',            //端口号
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'https://www.fastmock.site/mock/7ff7ba8b60619bef6fd647ceec01169a/admin', //对应自己的接口
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}


}