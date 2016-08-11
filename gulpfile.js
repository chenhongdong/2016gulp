var gulp=require('gulp');
var $=require('gulp-load-plugins')();

gulp.task('server', function () {
    $.connect.server({
        root:'./build',     //静态文件根目录
        port:8080,   //端口号
        livereload:true     //实时刷新重启服务器
    })
});

gulp.task('default',['server','watch']);

gulp.task('watch', function () {
    gulp.watch('./src/index.html',['copy-html'])
})

gulp.task('copy-html', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe($.connect.reload())       //拷贝到目标后就自动重启
})