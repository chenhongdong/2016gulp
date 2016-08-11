/*
* 什么时候全局安装
*   当你需要在cmd中执行这个命令时全局安装
*   1.因为全局安装会把这个模块安装到全局目录下
*   2.因为这个全局被配置到环境变量中的path中
*   3.在命令行中执行命令的时候，会去path中指定的目录中找这个可执行文件
*   4.在命令行中执行此命令的时候，找到执行，找不到报错
*   5.全局安装后在整个电脑中所有的目录下都可以执行此命令
*
* 什么时候本地安装
*   1.如果需要在你的项目中使用(require)此模块
* */
//写gulp就是用nodeJs编写gulpfile文件
//var gulp=require('gulp');
//使用task方法可以定义一个任务
//第一个参数是任务名称，随意起
//第二个参数是任务的定义，是个函数
/*gulp.task('hello', function () {
    console.log('hello')
});

gulp.task('world', function () {
    console.log('world')
})*/

/*
* 1. 执行gulp任务时，默认会在当前目录下找gulpfile.js文件
* 2. --gulpfile 可以指定其他文件名
* 3. --cwd 可以指定当前工作目录，gulp会查找工作目录下的gulpfile.js文件
*    gulp hello --cwd ./history 
* */



var gulp=require('gulp');
var util=require('util');


/*
* gulp.src可以接收文件名，返回一个可读流
* 可读流利放的是一个个的file对象
* 这个对象里有此文件对象的路径，文件名 文件的内容
* */
/*
gulp.task('default', function () {
    //返回一个可读流
    var rs=gulp.src('./package.json');
    
    rs.on('data', function (data) {
        console.log(util.inspect(data))
        
        console.log(Object.keys(data))
        console.log(data.base)
        console.log(data.path)
        console.log(data.cwd)
        console.log(data.contents)
    })
})*/


//定义一个复制文件的任务
gulp.task('default', function () {
    //获取文件的可读流
    /*gulp.src(['./src/index.html','./src/base.html'])
        //dest的参数是一个目录名
        .pipe(gulp.dest('./build'))         //通过管道的方法注入到可写流*/

    //* 匹配任意字符，除了路径分隔符

    //**  如果不是单独出现的话不能匹配路径分隔符
    //**  如果是单独出现的话可以匹配路径分隔符
    gulp.src('./src/**/*.html').pipe(gulp.dest('./build'));
});