var gulp=require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('js', function () {
    gulp.src(['./src/js/*.js','!./src/js/*.tmp.js'])
        .pipe($.concat('all.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe($.uglify())           //压缩代码
        .pipe($.rename('all.min.js'))       //重命名
        .pipe(gulp.dest('./build/js'))
})

gulp.task('css', function () {
    gulp.src('./src/less/*.less')
        .pipe($.less())                 //先编译Less
        .pipe($.concat('all.css'))      //再合并css
        .pipe(gulp.dest('./build/css')) //保存一次
        .pipe($.minifyCss())            //压缩css
        .pipe($.rename('all.min.css'))  //重命名
        .pipe(gulp.dest('./build/css')) //再保存
})