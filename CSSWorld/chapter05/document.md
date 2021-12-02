# 内联元素与流
* 字母x的下边缘线就是网页的基线
* 对于非替换的纯内联元素，其可视高度完全由line-height决定
* 内容区域受font-family和font-size双重影响，而em-box仅受font-size影响
* 半行距的计算的公式差不多可以定为：
  ```html
    半行高 = (line-height - font-size) / 2;
    <!-- 如果半行高的值是小数，那么上边距就是向下取整，下边距就是向上取整 -->
  ```
* 替换元素的高度不能通过line-height影响，但是由于在html5文档模式下，每一个行框盒子前面都有一个高度为0的幽灵空白节点，且line-height的值可以直接作用在这个幽灵节点上，导致替换元素的高度看起像是受line-height影响。
* line-height的默认值是normal，还支持数值、百分比值和长度值
* 在计算行高的时候，行高值一定不要向下舍入，而要向上舍入。因为在浏览器上如果行高计算出来的值是19.999px，浏览器也会渲染成19px。
* 无论内联元素的line-height如何设置，最终父级元素的高度都是由数值大的那个line-height决定
* vertical-align的值分为四类
  * 线类，如：baseline、top、middle、bottom
  * 文本类，如：text-top、text-bottom
  * 上下标类，如：sub、super
  * 数值百分比类，如：20px、2em、20%等
* vertical-align的值如果是百分比值得话，最终的计算结果是按照line-height的值计算的
* vertical-align只能作用在内联元素以及display的值为table-cell的元素上
* 对于table-cell元素而言，vertical-align起作用的是table-cell元素本身