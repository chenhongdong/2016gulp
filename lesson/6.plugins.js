var gulp = require('gulp');
//自动加载所有的插件
var $ = require('gulp-load-plugins')();

//var less = require('gulp-less');

gulp.task('less', function () {
    //通过src获取所有的less文件
    gulp.src('./src/less/**/*.less')
        .pipe($.less())                   //交由less插件进行编译处理
        .pipe(gulp.dest('./build/css'))
});

