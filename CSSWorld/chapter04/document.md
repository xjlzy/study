# 盒尺寸四大家族
  > content box、padding box、border box、margin box

* 根据是否具有可替换内容，可以将元素分为替换元素和非替换元素。如img、object、video、iframe、textarea、input都是典型的替换元素
* 替换元素的特性：
  * 内容的外观不受页面上的CSS影响
  * 有自己的尺寸
  * 在很多CSS属性上有自己的一套表现规则，比如vertical-align在替换元素中的默认值是元素底部
* 在CSS世界中，图片资源的固有尺寸无法改变
* 利用content实现计数器
  * counter-reset 计数器重置，数字默认为0，重置的数字可以是复数，也可以是小数（<span color="red">仅chrome支持，且会将小树向下取整，其他浏览器不支持小数，会当作0来处理</span>）
    ```css
      // 当个计数器
      counter-reset: wangxiaoer 2;
      // 多个计数器
      counter-reset: wangxiaoer 2 wangxiaosan 3;
    ```
  * counter-increment 计数器递增，每使用一次，数据源就增加一次计数值
    ```css
      // 设置初始值为2
      counter-reset: wangxiaoer 2;
      // 给计数器wangxiaoer增加一次计数值
      counter-increment: wangxiaoer;
      // 显示3
      content: counter(wangxiaoer);
    ```
  * counter(name, style) 方法,第一个参数表示计数器名称，第二个参数表示显示的方式
    ```css
      counter-reset: wangxiaoer 2;
      // 显示为罗马数字 ⅱ
      content: counter(wangxiaoer, lower-roman);
    ```
  * counters(name, string)方法。实现嵌套计数，可实现诸如1-1,1-1-1版的子序号
    ```css
      // 显示为1-1、1-1-1这种格式
      content: counters(wangxiaoer, '-');
    ```
* 显示content计数值的那个DOM元素在文档流的位置一定要在counter-increment元素的后面