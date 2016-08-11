

var gulp = require('gulp');

gulp.task('one', function () {
    console.log('one day')
});

gulp.task('two', function () {
    console.log('two');
})

gulp.task('default', function () {
    //gulp.watch('./src/index.html',['one','two'])

    gulp.watch('./src/*', function (event) {
        //type 变化的类型 changed(修改变化)  deleted(删除)
        //path 修改文件的路径
        console.log(event)
    })
})