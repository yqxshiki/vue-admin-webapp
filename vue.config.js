module.exports = {
	// publicUrl: '',                 //根路径
	outputDir: 'dist',          //打包输出的路径  默认dist
	assetsDir: '',              //静态资源输出的路径(把css  img  js  fonts  放在一个文件夹中)
	lintOnSave: false,          //是否开启eslint
	indexPath: 'scrook.html',    //设置输出首页的名字
	devServer: {
		open: true,              //自动开启首页
		host: 'localhost',
		port: '8080',            //端口号
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