const path=require('path');//导入node.js中专门操作路径的模块
//配置预览插件
//导入生成预览页面的插件 得到一个构造函数
const HtmlWebpacklPlugin=require('html-webpack-plugin');
//创建插件的实例
const htmlPlugin=new HtmlWebpacklPlugin({
    template:'./src/index.html',//指定要用到的模块文件
    filename:'index.html'//指定要生成的文件名称，该文件存在于内存中，在目录中不显示
});
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
    //mode用来指定构建模式  编译模式 production生产
    mode: "development",
    entry: path.join(__dirname,'./src/js/index.js'),//打包入口文件的路径
    output: {
        path: path.join(__dirname,'./dist'),//输出文件的存放路径
        filename: "bundle.js"//输出文件的名称
    },
    //plugins数组是webpack打包期间会用到的一些插件列表
    plugins: [htmlPlugin,new VueLoaderPlugin()],
    //所有第三方问价规模的匹配规则
    module: {
        rules: [
            //其中，test表示匹配的文件类型，use表示对应要调用的loader
            {test: /\.css$/, use: ['style-loader','css-loader','postcss-loader']},
            {test:/\.less$/, use: ['style-loader','css-loader','less-loader']},
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {test:/.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: ['url-loader?limit=16940']},
            {test:/\.js$/, use: ['babel-loader'], exclude: /node_modules/},
            {test:/\.vue$/, use: "vue-loader"}
        ]
    }
}