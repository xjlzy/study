# chapter01 章节重点 基础知识

  * 可以使用[Can I Use](http://caniuse.com)来查看CSS属性的兼容性。
  * 编写HTML和CSS时我们可以使用渐进增强策略，比如在书写HTML时，需要一个email输入框，我们可以像以下这么写
    ```html
      // 浏览器应用了渐进增强策略，当浏览器不识别Email这个类型时，会将该输入框的类型置为text
      <input type="email"/>
    ```
    当书写CSS时我们可以这样
    ```css
      /* 浏览器无法识别的属性和属性值都会导致浏览器丢弃相应的申明 */
      .overlay {
        background-color: #000;
        background-color: rgba(0, 0, 0, 0.8);
      }
    ```
  * 浏览器厂商为了使用最新的CSS属性，会使用浏览器前缀的方式来适用。
    ```css
      .myThing {
        /* -webkit-是给Safari、Chrome、Opera浏览器 -moz-给Mozilla浏览器（Firefox） -ms-则是微软的IE浏览器 */
        -webkit-transform: translate(0, 10px);
        -moz-transform: translate(0, 10px);
        -ms-transform: translate(0, 10px);
        transform: translate(0, 10px);
      }
    ```
  * 文档的基础语义应该永远而且必须永远不打折扣。