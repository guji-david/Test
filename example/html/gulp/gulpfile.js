// include gulp
var gulp = require('gulp');


var minimist = require('minimist');
var gutil = require('gulp-util');
var sftp = require('gulp-sftp');
//var stream = require('stream');




//默认development环境
var knowOptions = {
    string: 'env',
    default: {
        env: 'dev'
    }
};

var options = minimist(process.argv.slice(2), knowOptions);

//生成filename文件，存入string内容
function string_src(filename, string) {
    var src = stream.Readable({ objectMode: true });
    src._read = function () {
        this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }));
        this.push(null)
    };
    return src;
}

gulp.task("hello",function(){
    console.log("hello- world-->"+
    options.env+
    "  process.platform: "+process.platform+
    "  options: "+JSON.stringify(options)+
    "  execPath: "+process.execPath
    );
});
gulp.task('sftp', function () {
    return gulp.src('src/*')
        .pipe(sftp({
            host: 'website.com',
            user: 'johndoe',
            pass: '1234'
        }));
});



gulp.task('constants', function() {
    //读入config.json文件
    var myConfig = require('./config.json');
    //取出对应的配置信息
    var envConfig = myConfig[options.env];
    var conConfig = 'appconfig = ' + JSON.stringify(envConfig);
    //生成config.js文件
    return string_src("config.js", conConfig)
        .pipe(gulp.dest('dev/scripts/'))
});

