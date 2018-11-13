var num = 3.125e7;
console.log(num);

console.log(0.1+0.2);//0.30000000000000004
console.log(0.1+0.2==0.3);  //false
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

// isFinite用来判断该数值是否为有穷的
console.log(isFinite(Number.MAX_VALUE * 2)); //false

//NaN与本身不相等
console.log(NaN===NaN); //false

var aa = {
  valueOf: function() {
    return {
      toString: function() {
        return "3";
      }
    };
  },
  toString: function() {
    return "1";
  }
}
// 如果检测的是对象，则先调用对象的valueOf()方法，确定该方法的返回值是否可以转换为数值，
// 如果不能则基于这个返回值在调用toString()方法，再测试
console.log(isNaN(aa));

console.log(Number("aa11"));  //NaN
console.log(Number(""));      //NaN
console.log(Number("11"))     //11
console.log(Number("011.11")) //11.11
console.log(Number("0xA"))    //10

console.log(Number(aa));

console.log(parseInt("070", 8));
