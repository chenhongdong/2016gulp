var gulp = require('gulp');

gulp.task('吃饭',['做饭'], function () {
    console.log('吃饭')
})

gulp.task('做饭',['买米','买菜'], function () {
    console.log('做饭')
})
//当一个任务依赖的任务是异步的时候，那么当前任务并不会等待异步任务完成
gulp.task('买米', function (cb) {
    setTimeout(function () {
        console.log('买米');
        //如果调用cb就表示此异步任务执行完毕
        cb();
    },2000)
})

gulp.task('买菜', function () {
    console.log('买菜')
})