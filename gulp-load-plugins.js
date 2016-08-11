module.exports = function () {
    /*
    * 1.初始化一个空对象
    * 2.读取package.json文件，得到一个json
    * 3.取得devDependencies属性对象
    * 4.寻找此属性对象以gulp-开头的属性
    * 5.加载这些gulp插件模块，把返回值赋给$对象，属性名就是插件名减去gulp-
    * */
    var $ = {};
    var json=require('./package.json');
    
    console.log(json.devDependencies);

    return Object.keys(json.devDependencies)
        .reduce(function ($,key) {
            if(key.indexOf('gulp-')==0 && key != 'gulp-load-plugins'){        //ES6里stratWith可以代替indexOf
                var attr = key.slice(5);
                attr = attr.replace(/-(\w)/, function ($0,$1) {
                    return $1.toUpperCase();
                });
                $[attr] = require(key);

            }
            return $;
        },{});


    //最后返回$，$是一个对象，它把所有插件的返回值都挂到它的属性上
    return $;
};