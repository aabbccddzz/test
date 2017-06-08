/*
* @Author: Administrator
* @Date:   2017-05-28 18:01:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-28 21:36:00
*/

'use strict';
var gulp=require("gulp"),
  babel = require("gulp-babel"),
  es2015 = require("babel-preset-es2015"),
  webpack = require("gulp-webpack");


gulp.task('dist', function() {
  gulp.watch('js/es6/*.es6', ['default']);
});


gulp.task("default",function(){
  gulp.src("./js/es6/*.es6")
    .pipe(babel({presets:[es2015]}))
    .pipe(gulp.dest("./js"))//es6转js必须在webpack之前，否则webpack找不到要包装的js会报错
    .pipe(webpack({//babel编译import会转成require，webpack再包装以下代码让代码里支持require
      output:{
        filename:"js.js",
      },
      stats:{
        colors:true
      }
    }))
    .pipe(gulp.dest("./js"));//包装好的js目录
});