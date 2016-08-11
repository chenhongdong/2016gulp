var gulp = {
    tasks:[],                   //存放所有任务的数组
    task: function (fn) {       //定义一个任务
        this.tasks.push(fn)
    },
    start: function () {        //开始执行所有的任务
       /* this.tasks.forEach(function (item) {
            item();
        })*/

        var index=0;

        function next(){    //每调用一次next就相当于取出当前函数并执行
            if(index>=gulp.tasks.length){
                return;
            }
            var task = gulp.tasks[index++];     //取出当前任务并把index++
            var len= task.length;               //取得当前任务函数的形参个数
            if(len>0){
                task(next);
            }else{
                task();
                next();
            }

        }
        next();
    }
}

gulp.task(function () {
  //  setTimeout(function () {
        console.log(1)
      //  callback();
    //},1000)

})

gulp.task(function (callback) {
    setTimeout(function () {
        console.log(2)
        callback();
    },2000)
})

gulp.start();