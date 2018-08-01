var path = require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")
module.exports ={
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'js/[name]-[chunkhash].js',
        publicPath: "http://david.com"
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:'a.html',
            template:"index.html",
            inject:'body',
            title:'this is David webpack a.html',
           /* minify:{
                removeComments:true,
                collapseWhitespace:true
            }*/
           excludeChunks:['b','c']
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            template:"index.html",
            inject:'body',
            title:'this is David webpack b.html',
            excludeChunks:['a','c']
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            template:"index.html",
            inject:'body',
            title:'this is David webpack c.html',
            excludeChunks:['a','b']
        })

    ]
}