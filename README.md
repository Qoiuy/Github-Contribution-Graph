### forked [Github-Contribution-Graph](https://github.com/bachvtuan/Github-Contribution-Graph)

## 心心念这个块块 很久很久了 一直没有好的机会 

## 最近需要一个这样的功能

### 我发现原来的代码 只支持一年的 而我的需求是 2000 个块块 和原项目需求完全不一样 所以要进行修改





### 我修改了哪里?

之前的实现逻辑看起来比较乱 如图1。

我改成了80行左右的代码  如 图2



<img src="https://iszhanggc-private-blog.oss-cn-beijing.aliyuncs.com/typora_pic/image-20220831184111247.png" alt="image-20220831184111247" style="zoom:25%;" />

图1

<img src="https://iszhanggc-private-blog.oss-cn-beijing.aliyuncs.com/typora_pic/image-20220831184853711.png" alt="image-20220831184853711" style="zoom:50%;" />

图2

### 备注：

后续自己修改应该要注意的

- 这个图像是一列列生成的。 

- 有一些js的代码优化 我就不管了
- 核心逻辑 使用svg标签展示内容
- 鼠标滑动 展示的内容 核心代码 var text = "{0} {1} on {2}".formatString( count, count_text , date );
- mouseLeave mouseEnter 鼠标悬停和鼠标离开 实现
- String.prototype.formatString 方法 被  “鼠标悬停”方法调用





# Github-Contribution-Graph
Jquery plugin to render like contribution graph on Github when you view user's profile, You can use it to apply on other JS framework like Angularjs as well. 

## DEMO LINK

[DEMO LINK](http://bachvtuan.github.io/Github-Contribution-Graph/)

## Requirements

Jquery library

## Usage:
Add below code into your html content

```html
<script type="text/javascript" src="js/github_contribution.js"></script>
<link href="css/github_contribution_graph.css" media="all" rel="stylesheet" />
```

Create div to render graph

```html
<div id="your_graph"></div>

```

Call lib to render graph

```js
$('#your_graph').github_graph( {
  // Default is null will display date before 365 days from now
  start_date: Date Time object
  //Default is empty list
  data: list_of_timestamp ,
  // single text and plural text
  texts: ['completed task','completed tasks']
});

```
Full options

```js
$('#your_graph').github_graph( {
  // start from 2022, null is default
  start_date: new Date(2022,00,00,0,0,0),
  data: list_of_timestamp ,
  // single text and plural text
  texts: ['category','categories'],
  //Override month names
  month_names: ['T1','T2','T3','T4','T5','T6','T7','T8','T9','T10','T11','T12'],
  //Override horizontal day name
  h_days:['2','4','6'],
  //override colours
  colors:['gray','purple','yellow','green','red'],
  /** List object of color and count also supported
  colors:[
    { count:0, color:'gray' },
    { count:5, color:'purple' },
    { count:10, color:'yellow' },
    { count:15, color:'green' },
    { count:20, color:'red' }
  ],
  **/
  border:{
    radius: 5,
    hover_color: "red"
  },
  click: function(date, count) {
    console.log(date, count);
  },
});
```

Data format: Supported list of timestamp array or object({timestamp,count}).

```js
var list_of_timestamp = [1624865396654,1624865396655, ...];

// or 
var list_of_timestamp = [
  {
    timestamp: 1624865396654,
    count: 2
  },
  {
    timestamp: 1624865396655,
    count: 5
  }
];


```
