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

  data: [{dc:0, show:"2021-12-31" },{dc:0, show:"2022-01-01" },{dc:0, show:"2022-01-02" },{dc:0, show:"2022-01-03" },{dc:0, show:"2022-01-04" },{dc:0, show:"2022-01-05" },{dc:0, show:"2022-01-06" },{dc:0, show:"2022-01-07" },{dc:0, show:"2022-01-08" },{dc:0, show:"2022-01-09" },{dc:10, show:"2022-01-10" },{dc:0, show:"2022-01-11" },{dc:0, show:"2022-01-12" },{dc:0, show:"2022-01-13" },{dc:15, show:"2022-01-14" },{dc:0, show:"2022-01-15" },{dc:0, show:"2022-01-16" },{dc:0, show:"2022-01-17" },{dc:0, show:"2022-01-18" },{dc:0, show:"2022-01-19" },{dc:0, show:"2022-01-20" },{dc:0, show:"2022-01-21" },{dc:0, show:"2022-01-22" },{dc:0, show:"2022-01-23" },{dc:0, show:"2022-01-24" },{dc:5, show:"2022-01-25" },{dc:0, show:"2022-01-26" },{dc:0, show:"2022-01-27" },{dc:0, show:"2022-01-28" },{dc:0, show:"2022-01-29" },{dc:0, show:"2022-01-30" },{dc:0, show:"2022-01-31" },{dc:0, show:"2022-02-01" },{dc:0, show:"2022-02-02" },{dc:0, show:"2022-02-03" },{dc:0, show:"2022-02-04" },{dc:0, show:"2022-02-05" },{dc:0, show:"2022-02-06" },{dc:0, show:"2022-02-07" },{dc:0, show:"2022-02-08" },{dc:0, show:"2022-02-09" },{dc:0, show:"2022-02-10" },{dc:0, show:"2022-02-11" },{dc:12, show:"2022-02-12" },{dc:0, show:"2022-02-13" },{dc:0, show:"2022-02-14" },{dc:0, show:"2022-02-15" },{dc:0, show:"2022-02-16" },{dc:0, show:"2022-02-17" },{dc:0, show:"2022-02-18" },{dc:0, show:"2022-02-19" },{dc:16, show:"2022-02-20" },{dc:0, show:"2022-02-21" },{dc:0, show:"2022-02-22" },{dc:11, show:"2022-02-23" },{dc:0, show:"2022-02-24" },{dc:0, show:"2022-02-25" },{dc:0, show:"2022-02-26" },{dc:0, show:"2022-02-27" },{dc:6, show:"2022-02-28" },{dc:0, show:"2022-03-01" },{dc:0, show:"2022-03-02" },{dc:4, show:"2022-03-03" },{dc:0, show:"2022-03-04" },{dc:0, show:"2022-03-05" },{dc:0, show:"2022-03-06" },{dc:0, show:"2022-03-07" },{dc:0, show:"2022-03-08" },{dc:0, show:"2022-03-09" },{dc:0, show:"2022-03-10" },{dc:0, show:"2022-03-11" },{dc:0, show:"2022-03-12" },{dc:0, show:"2022-03-13" },{dc:0, show:"2022-03-14" },{dc:0, show:"2022-03-15" },{dc:0, show:"2022-03-16" },{dc:0, show:"2022-03-17" },{dc:0, show:"2022-03-18" },{dc:0, show:"2022-03-19" },{dc:0, show:"2022-03-20" },{dc:0, show:"2022-03-21" },{dc:0, show:"2022-03-22" },{dc:0, show:"2022-03-23" },{dc:0, show:"2022-03-24" },{dc:0, show:"2022-03-25" },{dc:0, show:"2022-03-26" },{dc:0, show:"2022-03-27" },{dc:0, show:"2022-03-28" },{dc:17, show:"2022-03-29" },{dc:0, show:"2022-03-30" },{dc:0, show:"2022-03-31" },{dc:0, show:"2022-04-01" },{dc:0, show:"2022-04-02" },{dc:0, show:"2022-04-03" },{dc:0, show:"2022-04-04" },{dc:0, show:"2022-04-05" },{dc:0, show:"2022-04-06" },{dc:0, show:"2022-04-07" },{dc:0, show:"2022-04-08" },{dc:0, show:"2022-04-09" },{dc:9, show:"2022-04-10" },{dc:0, show:"2022-04-11" },{dc:17, show:"2022-04-12" },{dc:0, show:"2022-04-13" },{dc:0, show:"2022-04-14" },{dc:0, show:"2022-04-15" },{dc:0, show:"2022-04-16" },{dc:4, show:"2022-04-17" },{dc:0, show:"2022-04-18" },{dc:0, show:"2022-04-19" },{dc:0, show:"2022-04-20" },{dc:0, show:"2022-04-21" },{dc:0, show:"2022-04-22" },{dc:0, show:"2022-04-23" },{dc:0, show:"2022-04-24" },{dc:0, show:"2022-04-25" },{dc:0, show:"2022-04-26" },{dc:0, show:"2022-04-27" },{dc:0, show:"2022-04-28" },{dc:0, show:"2022-04-29" },{dc:0, show:"2022-04-30" },{dc:0, show:"2022-05-01" },{dc:0, show:"2022-05-02" },{dc:0, show:"2022-05-03" },{dc:18, show:"2022-05-04" },{dc:0, show:"2022-05-05" },{dc:0, show:"2022-05-06" },{dc:0, show:"2022-05-07" },{dc:0, show:"2022-05-08" },{dc:0, show:"2022-05-09" },{dc:0, show:"2022-05-10" },{dc:0, show:"2022-05-11" },{dc:0, show:"2022-05-12" },{dc:0, show:"2022-05-13" },{dc:0, show:"2022-05-14" },{dc:0, show:"2022-05-15" },{dc:0, show:"2022-05-16" },{dc:0, show:"2022-05-17" },{dc:0, show:"2022-05-18" },{dc:0, show:"2022-05-19" },{dc:0, show:"2022-05-20" },{dc:0, show:"2022-05-21" },{dc:0, show:"2022-05-22" },{dc:0, show:"2022-05-23" },{dc:0, show:"2022-05-24" },{dc:0, show:"2022-05-25" },{dc:9, show:"2022-05-26" },{dc:0, show:"2022-05-27" },{dc:0, show:"2022-05-28" },{dc:0, show:"2022-05-29" },{dc:0, show:"2022-05-30" },{dc:0, show:"2022-05-31" },{dc:0, show:"2022-06-01" },{dc:0, show:"2022-06-02" },{dc:0, show:"2022-06-03" },{dc:0, show:"2022-06-04" },{dc:0, show:"2022-06-05" },{dc:0, show:"2022-06-06" },{dc:0, show:"2022-06-07" },{dc:0, show:"2022-06-08" },{dc:0, show:"2022-06-09" },{dc:0, show:"2022-06-10" },{dc:0, show:"2022-06-11" },{dc:0, show:"2022-06-12" },{dc:0, show:"2022-06-13" },{dc:0, show:"2022-06-14" },{dc:0, show:"2022-06-15" },{dc:0, show:"2022-06-16" },{dc:3, show:"2022-06-17" },{dc:0, show:"2022-06-18" },{dc:0, show:"2022-06-19" },{dc:0, show:"2022-06-20" },{dc:0, show:"2022-06-21" },{dc:0, show:"2022-06-22" },{dc:0, show:"2022-06-23" },{dc:0, show:"2022-06-24" },{dc:0, show:"2022-06-25" },{dc:0, show:"2022-06-26" },{dc:0, show:"2022-06-27" },{dc:0, show:"2022-06-28" },{dc:15, show:"2022-06-29" },{dc:0, show:"2022-06-30" },{dc:0, show:"2022-07-01" },{dc:0, show:"2022-07-02" },{dc:0, show:"2022-07-03" },{dc:0, show:"2022-07-04" },{dc:0, show:"2022-07-05" },{dc:0, show:"2022-07-06" },{dc:0, show:"2022-07-07" },{dc:0, show:"2022-07-08" },{dc:21, show:"2022-07-09" },{dc:0, show:"2022-07-10" },{dc:0, show:"2022-07-11" },{dc:0, show:"2022-07-12" },{dc:0, show:"2022-07-13" },{dc:18, show:"2022-07-14" },{dc:0, show:"2022-07-15" },{dc:0, show:"2022-07-16" },{dc:0, show:"2022-07-17" },{dc:0, show:"2022-07-18" },{dc:0, show:"2022-07-19" },{dc:0, show:"2022-07-20" },{dc:0, show:"2022-07-21" },{dc:0, show:"2022-07-22" },{dc:0, show:"2022-07-23" },{dc:0, show:"2022-07-24" },{dc:0, show:"2022-07-25" },{dc:0, show:"2022-07-26" },{dc:0, show:"2022-07-27" },{dc:0, show:"2022-07-28" },{dc:0, show:"2022-07-29" },{dc:0, show:"2022-07-30" },{dc:0, show:"2022-07-31" },{dc:0, show:"2022-08-01" },{dc:0, show:"2022-08-02" },{dc:0, show:"2022-08-03" },{dc:0, show:"2022-08-04" },{dc:0, show:"2022-08-05" },{dc:0, show:"2022-08-06" },{dc:0, show:"2022-08-07" },{dc:0, show:"2022-08-08" },{dc:0, show:"2022-08-09" },{dc:0, show:"2022-08-10" },{dc:0, show:"2022-08-11" },{dc:0, show:"2022-08-12" },{dc:0, show:"2022-08-13" },{dc:0, show:"2022-08-14" },{dc:0, show:"2022-08-15" },{dc:0, show:"2022-08-16" },{dc:0, show:"2022-08-17" },{dc:0, show:"2022-08-18" },{dc:0, show:"2022-08-19" },{dc:0, show:"2022-08-20" },{dc:0, show:"2022-08-21" },{dc:0, show:"2022-08-22" },{dc:9, show:"2022-08-23" },{dc:0, show:"2022-08-24" },{dc:0, show:"2022-08-25" },{dc:0, show:"2022-08-26" },{dc:0, show:"2022-08-27" },{dc:0, show:"2022-08-28" },{dc:0, show:"2022-08-29" },{dc:0, show:"2022-08-30" },{dc:0, show:"2022-08-31" },{dc:0, show:"2022-09-01" },{dc:0, show:"2022-09-02" },{dc:0, show:"2022-09-03" },{dc:0, show:"2022-09-04" },{dc:0, show:"2022-09-05" },{dc:16, show:"2022-09-06" },{dc:0, show:"2022-09-07" },{dc:0, show:"2022-09-08" },{dc:0, show:"2022-09-09" },{dc:0, show:"2022-09-10" },{dc:0, show:"2022-09-11" },{dc:0, show:"2022-09-12" },{dc:0, show:"2022-09-13" },{dc:0, show:"2022-09-14" },{dc:13, show:"2022-09-15" },{dc:0, show:"2022-09-16" },{dc:9, show:"2022-09-17" },{dc:0, show:"2022-09-18" },{dc:0, show:"2022-09-19" },{dc:0, show:"2022-09-20" },{dc:0, show:"2022-09-21" },{dc:0, show:"2022-09-22" },{dc:7, show:"2022-09-23" },{dc:0, show:"2022-09-24" },{dc:0, show:"2022-09-25" },{dc:0, show:"2022-09-26" },{dc:0, show:"2022-09-27" },{dc:7, show:"2022-09-28" },{dc:0, show:"2022-09-29" },{dc:0, show:"2022-09-30" },{dc:0, show:"2022-10-01" },{dc:0, show:"2022-10-02" },{dc:0, show:"2022-10-03" },{dc:0, show:"2022-10-04" },{dc:0, show:"2022-10-05" },{dc:0, show:"2022-10-06" },{dc:0, show:"2022-10-07" },{dc:0, show:"2022-10-08" },{dc:0, show:"2022-10-09" },{dc:0, show:"2022-10-10" },{dc:0, show:"2022-10-11" },{dc:0, show:"2022-10-12" },{dc:0, show:"2022-10-13" },{dc:0, show:"2022-10-14" },{dc:0, show:"2022-10-15" },{dc:0, show:"2022-10-16" },{dc:0, show:"2022-10-17" },{dc:0, show:"2022-10-18" },{dc:0, show:"2022-10-19" },{dc:0, show:"2022-10-20" },{dc:0, show:"2022-10-21" },{dc:8, show:"2022-10-22" },{dc:0, show:"2022-10-23" },{dc:0, show:"2022-10-24" },{dc:0, show:"2022-10-25" },{dc:0, show:"2022-10-26" },{dc:0, show:"2022-10-27" },{dc:0, show:"2022-10-28" },{dc:19, show:"2022-10-29" },{dc:0, show:"2022-10-30" },{dc:0, show:"2022-10-31" },{dc:0, show:"2022-11-01" },{dc:0, show:"2022-11-02" },{dc:0, show:"2022-11-03" },{dc:0, show:"2022-11-04" },{dc:0, show:"2022-11-05" },{dc:0, show:"2022-11-06" },{dc:27, show:"2022-11-07" },{dc:0, show:"2022-11-08" },{dc:0, show:"2022-11-09" },{dc:0, show:"2022-11-10" },{dc:0, show:"2022-11-11" },{dc:0, show:"2022-11-12" },{dc:0, show:"2022-11-13" },{dc:0, show:"2022-11-14" },{dc:0, show:"2022-11-15" },{dc:0, show:"2022-11-16" },{dc:0, show:"2022-11-17" },{dc:0, show:"2022-11-18" },{dc:0, show:"2022-11-19" },{dc:0, show:"2022-11-20" },{dc:0, show:"2022-11-21" },{dc:17, show:"2022-11-22" },{dc:0, show:"2022-11-23" },{dc:0, show:"2022-11-24" },{dc:0, show:"2022-11-25" },{dc:0, show:"2022-11-26" },{dc:0, show:"2022-11-27" },{dc:0, show:"2022-11-28" },{dc:0, show:"2022-11-29" },{dc:0, show:"2022-11-30" },{dc:0, show:"2022-12-01" },{dc:0, show:"2022-12-02" },{dc:0, show:"2022-12-03" },{dc:8, show:"2022-12-04" },{dc:0, show:"2022-12-05" },{dc:17, show:"2022-12-06" },{dc:0, show:"2022-12-07" },{dc:0, show:"2022-12-08" },{dc:0, show:"2022-12-09" },{dc:0, show:"2022-12-10" },{dc:0, show:"2022-12-11" },{dc:0, show:"2022-12-12" },{dc:0, show:"2022-12-13" },{dc:0, show:"2022-12-14" },{dc:0, show:"2022-12-15" },{dc:0, show:"2022-12-16" },{dc:0, show:"2022-12-17" },{dc:0, show:"2022-12-18" },{dc:0, show:"2022-12-19" },{dc:0, show:"2022-12-20" },{dc:0, show:"2022-12-21" },{dc:0, show:"2022-12-22" },{dc:0, show:"2022-12-23" },{dc:0, show:"2022-12-24" },{dc:12, show:"2022-12-25" },{dc:0, show:"2022-12-26" },{dc:0, show:"2022-12-27" },{dc:0, show:"2022-12-28" },{dc:0, show:"2022-12-29" },{dc:0, show:"2022-12-30" }],
  print: function(){
    height=this.height
    firstStandNullNum=this.firstStandNullNum
    gridWidth=this.gridWidth
    gapWidth=this.gapWidth
    rx = this.rx
    ry = this.ry
    getColor = this.getColor


    w = (this.data.length + firstStandNullNum) / height * (gridWidth+ gapWidth)+100 //100 是拍脑袋留的 边框 宽度
    h = height*(gridWidth+gapWidth)+100 //100 是拍脑袋留的 边框 宽度
    // console.log("width:",w," height:", h)
    
    res = '<svg width="'+w+'" height="'+h+'" viewbox="0 0 '+w+' '+h+'" class="js-calendar-graph-svg">'
    
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
