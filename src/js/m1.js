//定义私有成员a和c
let a = 10;
let c = 20;
//外界访问不到变量d 因为它没有暴露出来
let d = 30;

function show() {

}

//将本模块中的私有成员暴露出去，供其他模块使用
//注意：在每个模块中，值允许使用唯一的一次export default，否则会报错
export default {
    a,
    c,
    show,
}