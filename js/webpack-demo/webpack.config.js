var path = require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports ={
    context: __dirname,
    entry: './src/app.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'js/[name]-bundle.js',
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader',
                // loaders:['style-loader','css-loader','postcss-loader']
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader',
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.tpl$/,
                loader: "ejs-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loaders:[
                    "url-loader?limit:41000& name=assets/[name]-[hash:5].[ext]",
                    "image-webpack-loader"
                ]
                /*loader: "url-loader",
                query:{
                    limit:41000,
                    name:'assets/[name]-[hash:5].[ext]'
                }*/
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:'index.html',
            template:"index.html",
            inject:'body',
            title:'this is David webpack a.html',
           /* minify:{
                removeComments:true,
                collapseWhitespace:true
            }*/

        }),

    ]
}