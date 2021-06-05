console.log('ok');
//m1 是按照默认导入的  {}是按照需要导入的
// import m1,{} from './src/js/m1.js'
//导入模块成员
import m1 from './js/m1.js'
console.log(m1);
//按需导入
import {s1,s2 as ss2,say} from './js/m2.js'

console.log(s1);
console.log(ss2);
import './js/m3.js'