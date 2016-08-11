var json = require('./package.json');
var arr=Object.keys(json.devDependencies);
//['gulp','gulp-concat','gulp-connect']

var arr=[1,2,3]
var result = arr.reduce(function (cur,next) {
    return cur+next;
},0);

console.log(result);

var str='miniify-css'
str = str.replace(/-(\w)/, function ($0,$1) {
    return $1.toUpperCase();
})

console.log(str)

//console.log(json.devDependencies)