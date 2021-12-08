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
* 图片底部留有间隙的问题解决思路
  * 设置图片vertical-align的值为非baseline的值。因为就是因为baseline对齐导致的间隙产生
  * 设置图片块状化显示，使vertical-align和line-height等属性失效
  * 设置容器的line-height属性足够小，比如设置容器的line-height的值为0
  * 设置容器的font-size属性足够小，但是想要此方法生效需要设置容器的line-height属性值和当前font-size相关，比如1.5或者150%等，否者只会让间隙变得更大
* 在CSS世界中，非主动触发的位移的内联元素是不可能跑到计算容器之外的
  ```html
    <style>
      .box {
        border: 1px solid #ccc;
      }
      .box>img {
        height: 96px;
        margin-top: -200px;
      }
    </style>
    <!--  -->
    <div class="box">
      <img src="mm1.jpg"/>
    </div>
  ```
* 对于line-block元素，如果元素里面没有内联元素或者overflow不是visible，则该元素的基线就是margin底边缘，否则其基线就是元素里面最后一行内联元素的基线