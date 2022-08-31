/**
 * Jquery plugin to render like contribution graph on Github.
 *
 * @see       {@link https://github.com/bachvtuan/Github-Contribution-Graph}
 * @author    bachvtuan@gmail.com
 * @license   MIT License
 * @since     0.1.0
 */
var d ={
  
  gridWidth:11, // 每一个方格的边长
  gapWidth:2, // 每个间隙的宽度
  height:40, // 每一列几个方块
  firstStandNullNum:5, // 第一列的几个空白
  rx:2,
  ry:2,  //表示 角的圆度（radius） github 的是2 , 值越大越圆
  getColor: function(count) {
    colors= ['#eeeeee','#d6e685','#8cc665','#44a340','#44a340'];

      if (typeof(colors[0]) == "string"){
        return count > colors.length - 1 ? colors[colors.length-1]: colors[count];
      }

      const isLargeNumber = (element) => element.count > count;
      i = colors.findIndex(isLargeNumber);
      return i == -1 ? colors[colors.length -1].color: colors[ i - 1 ].color;
    },

  data: [{y:65,dc:0, show:"2021-12-31" },{y:78,dc:0, show:"2022-01-01" },{y:0,dc:0, show:"2022-01-02" },{y:13,dc:0, show:"2022-01-03" },{y:26,dc:0, show:"2022-01-04" },{y:39,dc:0, show:"2022-01-05" },{y:52,dc:0, show:"2022-01-06" },{y:65,dc:0, show:"2022-01-07" },{y:78,dc:0, show:"2022-01-08" },{y:0,dc:0, show:"2022-01-09" },{y:13,dc:10, show:"2022-01-10" },{y:26,dc:0, show:"2022-01-11" },{y:39,dc:0, show:"2022-01-12" },{y:52,dc:0, show:"2022-01-13" },{y:65,dc:15, show:"2022-01-14" },{y:78,dc:0, show:"2022-01-15" },{y:0,dc:0, show:"2022-01-16" },{y:13,dc:0, show:"2022-01-17" },{y:26,dc:0, show:"2022-01-18" },{y:39,dc:0, show:"2022-01-19" },{y:52,dc:0, show:"2022-01-20" },{y:65,dc:0, show:"2022-01-21" },{y:78,dc:0, show:"2022-01-22" },{y:0,dc:0, show:"2022-01-23" },{y:13,dc:0, show:"2022-01-24" },{y:26,dc:5, show:"2022-01-25" },{y:39,dc:0, show:"2022-01-26" },{y:52,dc:0, show:"2022-01-27" },{y:65,dc:0, show:"2022-01-28" },{y:78,dc:0, show:"2022-01-29" },{y:0,dc:0, show:"2022-01-30" },{y:13,dc:0, show:"2022-01-31" },{y:26,dc:0, show:"2022-02-01" },{y:39,dc:0, show:"2022-02-02" },{y:52,dc:0, show:"2022-02-03" },{y:65,dc:0, show:"2022-02-04" },{y:78,dc:0, show:"2022-02-05" },{y:0,dc:0, show:"2022-02-06" },{y:13,dc:0, show:"2022-02-07" },{y:26,dc:0, show:"2022-02-08" },{y:39,dc:0, show:"2022-02-09" },{y:52,dc:0, show:"2022-02-10" },{y:65,dc:0, show:"2022-02-11" },{y:78,dc:12, show:"2022-02-12" },{y:0,dc:0, show:"2022-02-13" },{y:13,dc:0, show:"2022-02-14" },{y:26,dc:0, show:"2022-02-15" },{y:39,dc:0, show:"2022-02-16" },{y:52,dc:0, show:"2022-02-17" },{y:65,dc:0, show:"2022-02-18" },{y:78,dc:0, show:"2022-02-19" },{y:0,dc:16, show:"2022-02-20" },{y:13,dc:0, show:"2022-02-21" },{y:26,dc:0, show:"2022-02-22" },{y:39,dc:11, show:"2022-02-23" },{y:52,dc:0, show:"2022-02-24" },{y:65,dc:0, show:"2022-02-25" },{y:78,dc:0, show:"2022-02-26" },{y:0,dc:0, show:"2022-02-27" },{y:13,dc:6, show:"2022-02-28" },{y:26,dc:0, show:"2022-03-01" },{y:39,dc:0, show:"2022-03-02" },{y:52,dc:4, show:"2022-03-03" },{y:65,dc:0, show:"2022-03-04" },{y:78,dc:0, show:"2022-03-05" },{y:0,dc:0, show:"2022-03-06" },{y:13,dc:0, show:"2022-03-07" },{y:26,dc:0, show:"2022-03-08" },{y:39,dc:0, show:"2022-03-09" },{y:52,dc:0, show:"2022-03-10" },{y:65,dc:0, show:"2022-03-11" },{y:78,dc:0, show:"2022-03-12" },{y:0,dc:0, show:"2022-03-13" },{y:13,dc:0, show:"2022-03-14" },{y:26,dc:0, show:"2022-03-15" },{y:39,dc:0, show:"2022-03-16" },{y:52,dc:0, show:"2022-03-17" },{y:65,dc:0, show:"2022-03-18" },{y:78,dc:0, show:"2022-03-19" },{y:0,dc:0, show:"2022-03-20" },{y:13,dc:0, show:"2022-03-21" },{y:26,dc:0, show:"2022-03-22" },{y:39,dc:0, show:"2022-03-23" },{y:52,dc:0, show:"2022-03-24" },{y:65,dc:0, show:"2022-03-25" },{y:78,dc:0, show:"2022-03-26" },{y:0,dc:0, show:"2022-03-27" },{y:13,dc:0, show:"2022-03-28" },{y:26,dc:17, show:"2022-03-29" },{y:39,dc:0, show:"2022-03-30" },{y:52,dc:0, show:"2022-03-31" },{y:65,dc:0, show:"2022-04-01" },{y:78,dc:0, show:"2022-04-02" },{y:0,dc:0, show:"2022-04-03" },{y:13,dc:0, show:"2022-04-04" },{y:26,dc:0, show:"2022-04-05" },{y:39,dc:0, show:"2022-04-06" },{y:52,dc:0, show:"2022-04-07" },{y:65,dc:0, show:"2022-04-08" },{y:78,dc:0, show:"2022-04-09" },{y:0,dc:9, show:"2022-04-10" },{y:13,dc:0, show:"2022-04-11" },{y:26,dc:17, show:"2022-04-12" },{y:39,dc:0, show:"2022-04-13" },{y:52,dc:0, show:"2022-04-14" },{y:65,dc:0, show:"2022-04-15" },{y:78,dc:0, show:"2022-04-16" },{y:0,dc:4, show:"2022-04-17" },{y:13,dc:0, show:"2022-04-18" },{y:26,dc:0, show:"2022-04-19" },{y:39,dc:0, show:"2022-04-20" },{y:52,dc:0, show:"2022-04-21" },{y:65,dc:0, show:"2022-04-22" },{y:78,dc:0, show:"2022-04-23" },{y:0,dc:0, show:"2022-04-24" },{y:13,dc:0, show:"2022-04-25" },{y:26,dc:0, show:"2022-04-26" },{y:39,dc:0, show:"2022-04-27" },{y:52,dc:0, show:"2022-04-28" },{y:65,dc:0, show:"2022-04-29" },{y:78,dc:0, show:"2022-04-30" },{y:0,dc:0, show:"2022-05-01" },{y:13,dc:0, show:"2022-05-02" },{y:26,dc:0, show:"2022-05-03" },{y:39,dc:18, show:"2022-05-04" },{y:52,dc:0, show:"2022-05-05" },{y:65,dc:0, show:"2022-05-06" },{y:78,dc:0, show:"2022-05-07" },{y:0,dc:0, show:"2022-05-08" },{y:13,dc:0, show:"2022-05-09" },{y:26,dc:0, show:"2022-05-10" },{y:39,dc:0, show:"2022-05-11" },{y:52,dc:0, show:"2022-05-12" },{y:65,dc:0, show:"2022-05-13" },{y:78,dc:0, show:"2022-05-14" },{y:0,dc:0, show:"2022-05-15" },{y:13,dc:0, show:"2022-05-16" },{y:26,dc:0, show:"2022-05-17" },{y:39,dc:0, show:"2022-05-18" },{y:52,dc:0, show:"2022-05-19" },{y:65,dc:0, show:"2022-05-20" },{y:78,dc:0, show:"2022-05-21" },{y:0,dc:0, show:"2022-05-22" },{y:13,dc:0, show:"2022-05-23" },{y:26,dc:0, show:"2022-05-24" },{y:39,dc:0, show:"2022-05-25" },{y:52,dc:9, show:"2022-05-26" },{y:65,dc:0, show:"2022-05-27" },{y:78,dc:0, show:"2022-05-28" },{y:0,dc:0, show:"2022-05-29" },{y:13,dc:0, show:"2022-05-30" },{y:26,dc:0, show:"2022-05-31" },{y:39,dc:0, show:"2022-06-01" },{y:52,dc:0, show:"2022-06-02" },{y:65,dc:0, show:"2022-06-03" },{y:78,dc:0, show:"2022-06-04" },{y:0,dc:0, show:"2022-06-05" },{y:13,dc:0, show:"2022-06-06" },{y:26,dc:0, show:"2022-06-07" },{y:39,dc:0, show:"2022-06-08" },{y:52,dc:0, show:"2022-06-09" },{y:65,dc:0, show:"2022-06-10" },{y:78,dc:0, show:"2022-06-11" },{y:0,dc:0, show:"2022-06-12" },{y:13,dc:0, show:"2022-06-13" },{y:26,dc:0, show:"2022-06-14" },{y:39,dc:0, show:"2022-06-15" },{y:52,dc:0, show:"2022-06-16" },{y:65,dc:3, show:"2022-06-17" },{y:78,dc:0, show:"2022-06-18" },{y:0,dc:0, show:"2022-06-19" },{y:13,dc:0, show:"2022-06-20" },{y:26,dc:0, show:"2022-06-21" },{y:39,dc:0, show:"2022-06-22" },{y:52,dc:0, show:"2022-06-23" },{y:65,dc:0, show:"2022-06-24" },{y:78,dc:0, show:"2022-06-25" },{y:0,dc:0, show:"2022-06-26" },{y:13,dc:0, show:"2022-06-27" },{y:26,dc:0, show:"2022-06-28" },{y:39,dc:15, show:"2022-06-29" },{y:52,dc:0, show:"2022-06-30" },{y:65,dc:0, show:"2022-07-01" },{y:78,dc:0, show:"2022-07-02" },{y:0,dc:0, show:"2022-07-03" },{y:13,dc:0, show:"2022-07-04" },{y:26,dc:0, show:"2022-07-05" },{y:39,dc:0, show:"2022-07-06" },{y:52,dc:0, show:"2022-07-07" },{y:65,dc:0, show:"2022-07-08" },{y:78,dc:21, show:"2022-07-09" },{y:0,dc:0, show:"2022-07-10" },{y:13,dc:0, show:"2022-07-11" },{y:26,dc:0, show:"2022-07-12" },{y:39,dc:0, show:"2022-07-13" },{y:52,dc:18, show:"2022-07-14" },{y:65,dc:0, show:"2022-07-15" },{y:78,dc:0, show:"2022-07-16" },{y:0,dc:0, show:"2022-07-17" },{y:13,dc:0, show:"2022-07-18" },{y:26,dc:0, show:"2022-07-19" },{y:39,dc:0, show:"2022-07-20" },{y:52,dc:0, show:"2022-07-21" },{y:65,dc:0, show:"2022-07-22" },{y:78,dc:0, show:"2022-07-23" },{y:0,dc:0, show:"2022-07-24" },{y:13,dc:0, show:"2022-07-25" },{y:26,dc:0, show:"2022-07-26" },{y:39,dc:0, show:"2022-07-27" },{y:52,dc:0, show:"2022-07-28" },{y:65,dc:0, show:"2022-07-29" },{y:78,dc:0, show:"2022-07-30" },{y:0,dc:0, show:"2022-07-31" },{y:13,dc:0, show:"2022-08-01" },{y:26,dc:0, show:"2022-08-02" },{y:39,dc:0, show:"2022-08-03" },{y:52,dc:0, show:"2022-08-04" },{y:65,dc:0, show:"2022-08-05" },{y:78,dc:0, show:"2022-08-06" },{y:0,dc:0, show:"2022-08-07" },{y:13,dc:0, show:"2022-08-08" },{y:26,dc:0, show:"2022-08-09" },{y:39,dc:0, show:"2022-08-10" },{y:52,dc:0, show:"2022-08-11" },{y:65,dc:0, show:"2022-08-12" },{y:78,dc:0, show:"2022-08-13" },{y:0,dc:0, show:"2022-08-14" },{y:13,dc:0, show:"2022-08-15" },{y:26,dc:0, show:"2022-08-16" },{y:39,dc:0, show:"2022-08-17" },{y:52,dc:0, show:"2022-08-18" },{y:65,dc:0, show:"2022-08-19" },{y:78,dc:0, show:"2022-08-20" },{y:0,dc:0, show:"2022-08-21" },{y:13,dc:0, show:"2022-08-22" },{y:26,dc:9, show:"2022-08-23" },{y:39,dc:0, show:"2022-08-24" },{y:52,dc:0, show:"2022-08-25" },{y:65,dc:0, show:"2022-08-26" },{y:78,dc:0, show:"2022-08-27" },{y:0,dc:0, show:"2022-08-28" },{y:13,dc:0, show:"2022-08-29" },{y:26,dc:0, show:"2022-08-30" },{y:39,dc:0, show:"2022-08-31" },{y:52,dc:0, show:"2022-09-01" },{y:65,dc:0, show:"2022-09-02" },{y:78,dc:0, show:"2022-09-03" },{y:0,dc:0, show:"2022-09-04" },{y:13,dc:0, show:"2022-09-05" },{y:26,dc:16, show:"2022-09-06" },{y:39,dc:0, show:"2022-09-07" },{y:52,dc:0, show:"2022-09-08" },{y:65,dc:0, show:"2022-09-09" },{y:78,dc:0, show:"2022-09-10" },{y:0,dc:0, show:"2022-09-11" },{y:13,dc:0, show:"2022-09-12" },{y:26,dc:0, show:"2022-09-13" },{y:39,dc:0, show:"2022-09-14" },{y:52,dc:13, show:"2022-09-15" },{y:65,dc:0, show:"2022-09-16" },{y:78,dc:9, show:"2022-09-17" },{y:0,dc:0, show:"2022-09-18" },{y:13,dc:0, show:"2022-09-19" },{y:26,dc:0, show:"2022-09-20" },{y:39,dc:0, show:"2022-09-21" },{y:52,dc:0, show:"2022-09-22" },{y:65,dc:7, show:"2022-09-23" },{y:78,dc:0, show:"2022-09-24" },{y:0,dc:0, show:"2022-09-25" },{y:13,dc:0, show:"2022-09-26" },{y:26,dc:0, show:"2022-09-27" },{y:39,dc:7, show:"2022-09-28" },{y:52,dc:0, show:"2022-09-29" },{y:65,dc:0, show:"2022-09-30" },{y:78,dc:0, show:"2022-10-01" },{y:0,dc:0, show:"2022-10-02" },{y:13,dc:0, show:"2022-10-03" },{y:26,dc:0, show:"2022-10-04" },{y:39,dc:0, show:"2022-10-05" },{y:52,dc:0, show:"2022-10-06" },{y:65,dc:0, show:"2022-10-07" },{y:78,dc:0, show:"2022-10-08" },{y:0,dc:0, show:"2022-10-09" },{y:13,dc:0, show:"2022-10-10" },{y:26,dc:0, show:"2022-10-11" },{y:39,dc:0, show:"2022-10-12" },{y:52,dc:0, show:"2022-10-13" },{y:65,dc:0, show:"2022-10-14" },{y:78,dc:0, show:"2022-10-15" },{y:0,dc:0, show:"2022-10-16" },{y:13,dc:0, show:"2022-10-17" },{y:26,dc:0, show:"2022-10-18" },{y:39,dc:0, show:"2022-10-19" },{y:52,dc:0, show:"2022-10-20" },{y:65,dc:0, show:"2022-10-21" },{y:78,dc:8, show:"2022-10-22" },{y:0,dc:0, show:"2022-10-23" },{y:13,dc:0, show:"2022-10-24" },{y:26,dc:0, show:"2022-10-25" },{y:39,dc:0, show:"2022-10-26" },{y:52,dc:0, show:"2022-10-27" },{y:65,dc:0, show:"2022-10-28" },{y:78,dc:19, show:"2022-10-29" },{y:0,dc:0, show:"2022-10-30" },{y:13,dc:0, show:"2022-10-31" },{y:26,dc:0, show:"2022-11-01" },{y:39,dc:0, show:"2022-11-02" },{y:52,dc:0, show:"2022-11-03" },{y:65,dc:0, show:"2022-11-04" },{y:78,dc:0, show:"2022-11-05" },{y:0,dc:0, show:"2022-11-06" },{y:13,dc:27, show:"2022-11-07" },{y:26,dc:0, show:"2022-11-08" },{y:39,dc:0, show:"2022-11-09" },{y:52,dc:0, show:"2022-11-10" },{y:65,dc:0, show:"2022-11-11" },{y:78,dc:0, show:"2022-11-12" },{y:0,dc:0, show:"2022-11-13" },{y:13,dc:0, show:"2022-11-14" },{y:26,dc:0, show:"2022-11-15" },{y:39,dc:0, show:"2022-11-16" },{y:52,dc:0, show:"2022-11-17" },{y:65,dc:0, show:"2022-11-18" },{y:78,dc:0, show:"2022-11-19" },{y:0,dc:0, show:"2022-11-20" },{y:13,dc:0, show:"2022-11-21" },{y:26,dc:17, show:"2022-11-22" },{y:39,dc:0, show:"2022-11-23" },{y:52,dc:0, show:"2022-11-24" },{y:65,dc:0, show:"2022-11-25" },{y:78,dc:0, show:"2022-11-26" },{y:0,dc:0, show:"2022-11-27" },{y:13,dc:0, show:"2022-11-28" },{y:26,dc:0, show:"2022-11-29" },{y:39,dc:0, show:"2022-11-30" },{y:52,dc:0, show:"2022-12-01" },{y:65,dc:0, show:"2022-12-02" },{y:78,dc:0, show:"2022-12-03" },{y:0,dc:8, show:"2022-12-04" },{y:13,dc:0, show:"2022-12-05" },{y:26,dc:17, show:"2022-12-06" },{y:39,dc:0, show:"2022-12-07" },{y:52,dc:0, show:"2022-12-08" },{y:65,dc:0, show:"2022-12-09" },{y:78,dc:0, show:"2022-12-10" },{y:0,dc:0, show:"2022-12-11" },{y:13,dc:0, show:"2022-12-12" },{y:26,dc:0, show:"2022-12-13" },{y:39,dc:0, show:"2022-12-14" },{y:52,dc:0, show:"2022-12-15" },{y:65,dc:0, show:"2022-12-16" },{y:78,dc:0, show:"2022-12-17" },{y:0,dc:0, show:"2022-12-18" },{y:13,dc:0, show:"2022-12-19" },{y:26,dc:0, show:"2022-12-20" },{y:39,dc:0, show:"2022-12-21" },{y:52,dc:0, show:"2022-12-22" },{y:65,dc:0, show:"2022-12-23" },{y:78,dc:0, show:"2022-12-24" },{y:0,dc:12, show:"2022-12-25" },{y:13,dc:0, show:"2022-12-26" },{y:26,dc:0, show:"2022-12-27" },{y:39,dc:0, show:"2022-12-28" },{y:52,dc:0, show:"2022-12-29" },{y:65,dc:0, show:"2022-12-30" }],
  print: function(){
    height=this.height
    firstStandNullNum=this.firstStandNullNum
    gridWidth=this.gridWidth
    gapWidth=this.gapWidth
    rx = this.rx
    ry = this.ry
    getColor = this.getColor


    w = (this.data.length + firstStandNullNum) / height * (gridWidth+ gapWidth)
    h = height*(gridWidth+gapWidth)
    console.log("width:",w," height:", h)
    // res = '<svg width="'+w+'" height="'+h+'" viewbox="0 0 '+w+' '+h+'" class="js-calendar-graph-svg">'

    res = '<svg width="'+1000+'" height="'+1000+'" viewbox="0 0 '+1000+' '+1000+'" class="js-calendar-graph-svg">'
    // 

    // 先竖着再横着
    // 排除第一个 TODO
    res += '<g transform="translate(0, 0)">'
    this.data.forEach(function(item, index, array) {


      // 处理 g 标签
      if ((index+firstStandNullNum)%height ==0) {
        n = ((index+firstStandNullNum)/height) * 13
        res+='</g> <g transform="translate('+ n +', 0)"> '
      }

      // 计算高度
      y = (firstStandNullNum+index) % height * (gridWidth+ gapWidth)

      // 处理rect标签
        res+= '<rect '
        res+= 'class="day" '
        res+= 'width="'+gridWidth+'" '
        res+= 'height="'+gridWidth+'" '
        res+= 'y="'+y + '" '
        res+= 'fill="'+getColor(item.dc)+'" '
        res+= 'data-count="'+item.dc+'" '
        res+= 'data-date="'+item.show+'" '
        res+= 'rx="'+rx+'" '
        res+= 'ry="'+ry+'" />'


    })
    res += '</g>'
    res += '</svg>'

    return res
    
  },


};


// console.log(d.print())


//Format string
if (!String.prototype.formatString) {
  String.prototype.formatString = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

(function ( $ ) {


 
    $.fn.github_graph = function( options ) {

        var start = function(){
          var wrap_chart = _this;
          var clickCallback = null;

          // 打印svg
          wrap_chart.html(d.print()); 

          // 鼠标滑动操作
          $(_this).find(".day").on('click',function () {
            if (clickCallback){
              clickCallback($(this).attr("data-date"), parseInt($(this).attr("data-count")));
            }
          });

          $(_this).find(".day").hover(function () {
              $(this).attr("style", "stroke-width: 1; stroke: "+ "#999");
            }, function() {
              $( this ).attr( "style", "stroke-width:0" );
          });

          _this.find('rect').on("mouseenter", mouseEnter );
          _this.find('rect').on("mouseleave",mouseLeave );
          appendTooltip();
          
        }

        var mouseLeave =function(evt){
          $('.svg-tip').hide();
        }
        
        // 当进入矩形元素时处理mouseenter事件 handle event mouseenter when enter into rect element
        var mouseEnter = function(evt){

          var target_offset = $(evt.target).offset();
          var count = $(evt.target).attr('data-count');
          var date = $(evt.target).attr('data-date');
          
          var count_text = ' modify to right text';
          var text = "{0} {1} on {2}".formatString( count, count_text , date );

          var svg_tip = $('.svg-tip').show();
          svg_tip.html( text );
          var svg_width = Math.round( svg_tip.width()/2 + 5 )  ;
          var svg_height =  svg_tip.height() *2 + 10 ;

          svg_tip.css({top:target_offset.top - svg_height - 5});
          svg_tip.css({left:target_offset.left -svg_width});
        }
        //附加工具提示，当鼠标进入rect元素时显示默认是显示:无
        //Append tooltip to display when mouse enter the rect element
        //Default is display:none
        var appendTooltip = function(){
          if ( $('.svg-tip').length == 0 ){
            $('body').append('<div class="svg-tip svg-tip-one-line" style="display:none" ></div>');
          }          
        }

        var _this = $(this);
        
        start();
 
    };
 
}( jQuery ));
