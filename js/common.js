function zs_retArrObjIndex(arr,field,value,retfirst){
	var retArrIndex = [];
	if (arr.length > 0){
		for (var i=0;i<arr.length;i++){
			if (arr[i][field] == value){
				retArrIndex.push(i);			//如果该元素的值与匹配值相同则添加索引
				if (retfirst){
					break;
				}
			}
		}
	}
	return retArrIndex;
}
shuiyinFn();
function shuiyinFn() {
  	var obj = $('.watermark')
 	var userType = sessionStorage.getItem('userType');
  	if (userType == 0) {
   	 	obj.show();
    	console.log(obj)
  	} else {
    	obj.hide();
  	}
}

function getNowTime(){
	var nowHours=new Date().getHours();
	var nowMinutes=new Date().getMinutes();
	if(nowHours<10){
		nowHours='0'+nowHours;
	}
	if(nowMinutes<10){
		nowMinutes='0'+nowMinutes;
	}
	return (nowHours+':'+nowMinutes)
}
function getNowDate(){
	var Y=new Date().getFullYear();
	var M=new Date().getMonth()+1;
	var D=new Date().getDate();
	if(M<10){
		M='0'+M
	}
	if(D<10){
		D='0'+D
	}
	return Y+'-'+M+'-'+D;
}
function getProWeekDate(){
	var datas=new Date()-7*24*60*60*1000;
//	console.log(datas);
	var time = new Date(datas);
	var Y=time.getFullYear();
	var M=time.getMonth()+1;
	var D=time.getDate();
	if(M<10){
		M='0'+M
	}
	if(D<10){
		D='0'+D
	}
	return Y+'-'+M+'-'+D;	
}
//获取前一天
function getProDate(){
	var datas=new Date()-1*24*60*60*1000;
//	console.log(datas);
	var time = new Date(datas);
	var Y=time.getFullYear();
	var M=time.getMonth()+1;
	var D=time.getDate();
	if(M<10){
		M='0'+M
	}
	if(D<10){
		D='0'+D
	}
	return Y+'-'+M+'-'+D;	
}
function getNowDate2(){
	var Y=new Date().getFullYear();
	var M=new Date().getMonth()+1;
	var D=new Date().getDate();
	if(M<10){
		M='0'+M
	}
	if(D<10){
		D='0'+D
	}
	return Y+'-'+M+'-'+D;
}
function getNowDay(){
	var arr = new Array("日", "一", "二", "三", "四", "五", "六");  
	var week = new Date().getDay();  
	var str = "星期"+ arr[week];  
	return str;
}
function getDate(dates){
	var weekDay = ["周天", "周一", "周二", "周三", "周四", "周五", "周六"];  
    var myDate = new Date(Date.parse(dates.replace(/-/g, "/")));  
    return(weekDay[myDate.getDay()]);
}

function getDate2(dates){
    var myDate = dates.split('-')[1]+'月'+dates.split('-')[2]+'日';  
    return myDate;
}

function getDate3(dates){
    var Y=dates.year;
    var M=dates.month;
    var D=dates.date;
   if(M<10){
		M='0'+M
	}
	if(D<10){
		D='0'+D
	}
	return Y+'-'+M+'-'+D;
}

function addImgToWeather(dom,phenomena){
	if(phenomena=='晴'){
		dom.attr('src','../img/weather/qing.png')
	}else if(phenomena=='阴'){
		dom.attr('src','../img/weather/yin.png')
	}else if(phenomena=='霾'){
		dom.attr('src','../img/weather/mai.png')
	}else if(phenomena=='多云'){
		dom.attr('src','../img/weather/duoyun.png')
	}else if(phenomena=='阵雨'){
		dom.attr('src','../img/weather/zhenyu.png')
	}else if(phenomena=='雷阵雨'){
		dom.attr('src','../img/weather/leizhenyu.png')
	}else if(phenomena=='雷阵雨伴有冰雹'){
		dom.attr('src','../img/weather/leizhenyuAndbingbao.png')
	}else if(phenomena=='小雨'){
		dom.attr('src','../img/weather/xiaoyu.png')
	}else if(phenomena=='中雨'){
		dom.attr('src','../img/weather/zhongyu.png')
	}else if(phenomena=='冻雨'){
		dom.attr('src','../img/weather/dongyu.png')
	}else if(phenomena=='大雨'){
		dom.attr('src','../img/weather/dayu.png')
	}else if(phenomena=='暴雨'){
		dom.attr('src','../img/weather/baoyu.png')
	}else if(phenomena=='大暴雨'){
		dom.attr('src','../img/weather/dabaoyu.png')
	}else if(phenomena=='特大暴雨'){
		dom.attr('src','../img/weather/tedabaoyu.png')
	}else if(phenomena=='阵雪'||phenomena=='小雪'){
		dom.attr('src','../img/weather/xiaoxue.png')
	}else if(phenomena=='雨夹雪'){
		dom.attr('src','../img/weather/yujiaxue.png')
	}else if(phenomena=='中雪'){
		dom.attr('src','../img/weather/zhongxue.png')
	}else if(phenomena=='大雪'){
		dom.attr('src','../img/weather/daxue.png')
	}
}

function scroll ( listObj ) {
	/*滚动条显示隐藏*/
  	listObj.fadeIn("slow",function(){
    var customScrollbar=listObj.find(".mCSB_scrollTools");
    customScrollbar.css({"opacity":0});
    listObj.mCustomScrollbar("update");
    customScrollbar.animate({opacity:1},"slow");
  });
}

function initScroll( obj ) {
  var content= obj,autoScrollTimer=8000,autoScrollTimerAdjust,autoScroll;
  content.mCustomScrollbar({
    scrollButtons:{
      enable:true
    },
    callbacks:{
      whileScrolling:function(){ autoScrollTimerAdjust=autoScrollTimer*mcs.topPct/100; },
      onScroll:function(){ if(this.data("mCS_trigger")==="internal"){AutoScrollOff();} }
    }
  });
  content.addClass("auto-scrolling-on auto-scrolling-to-bottom");
  AutoScrollOn("bottom");
  function AutoScrollOn(to,timer){
    if(!timer){timer=autoScrollTimer;}
    content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"easeInOutQuad"});
    autoScroll=setTimeout(function(){
      if(content.hasClass("auto-scrolling-to-top")){
        AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
        content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
      }else{
        AutoScrollOn("top",autoScrollTimerAdjust);
        content.removeClass("auto-scrolling-to-bottom").addClass("auto-scrolling-to-top");
      }
    },timer);
  }
  function AutoScrollOff(){
    clearTimeout(autoScroll);
    content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
  }
}

/**
 * Created by 高霞 on 2017/12/11.
 */
$('.tab').on('click','li',function (e) {
  var divObj = $(this).parents('ul').siblings('div'),
    index = $(this).index();
  $(this).addClass('active').siblings('li').removeClass('active');
  divObj.eq(index).fadeIn(1000).siblings('div').fadeOut(1000);
})
function carSources() {
  var mapTop1 = echarts.init(document.getElementById('carSources'));
  var dataAxis = ['洛阳','西安','三门峡','郑州','周口','南宁'];
  var data = [20, 582, 191, 34, 90,40];
  var yMax = 300;
  var dataShadow = [];

  for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  var optionmap1 = {
    title: {
      text: '',
      subtext: ''
    },
    grid: {
      top: '7%',
      left: '3%',
      right: '1%',
      bottom: '3%',
      width:'100%',
      containLabel: true
    },
    xAxis: {
      data: dataAxis,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#A6A6A6',
          width: 1
        }
      },
      axisLabel: {
        inside: false,
        interval: 0,
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#A6A6A6',
          width: 1
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          interval: 0,
          color: '#fff'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#fff',
          type: 'solid',
          opacity: 0.08
        }
      },
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      { // For shadow
        type: 'bar',
        itemStyle: {
          normal: {color: 'rgba(0,0,0,0.05)'}
        },
        barGap:'-100%',
        barCategoryGap:'60%',
        data: dataShadow,
        animation: false
      },
      {
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#2378f7'},
                {offset: 0.7, color: '#2378f7'},
                {offset: 1, color: '#83bff6'}
              ]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [{
                offset: 0,
                color: '#14c8d4'
              },
                {
                  offset: 1,
                  color: '#43eec6'
                }
              ]
            )
          }
        },
        data: data
      }
    ]
  };
  mapTop1.setOption(optionmap1);
}
$('.tab').on('click','li',function () {
  var divObj = $(this).parents('ul').siblings('div'),
    index = $(this).index();
  $(this).addClass('active').siblings('li').removeClass('active');
  divObj.eq(index).fadeIn(1000).siblings('div').fadeOut(1000);
})
/* worldMap */
function worldMap(zoom) {
  /*zoom: layoutSize 地图缩放大小
   * */
  var worldMap = echarts.init(document.getElementById('worldMap'));
  var geoCoordMap = {
    '东钱湖': [121.641562,29.800154],
    '北京': [116.428332,39.921108],
    '上海': [121.488588,31.236423],
    '杭州': [120.175268,30.280532],
    '新疆': [87.618525,43.828797],
    '尼日利亚': [-4.388361, 11.186148],
    '美国洛杉矶': [-118.24311, 34.052713],
    '香港邦泰': [114.195466, 22.282751],
    '美国芝加哥': [-87.801833, 41.870975],
    '加纳库马西': [-4.62829, 7.72415],
    '德国汉堡': [10.01959, 54.38474],
    '哈萨克斯坦阿拉木图': [45.326912, 41.101891],
    '俄罗斯伊尔库茨克': [89.116876, 67.757906],
    '巴西': [-48.678945, -10.493623],
    '埃及达米埃塔': [31.815593, 31.418032],
    '西班牙巴塞罗纳': [2.175129, 41.385064],
    '柬埔寨金边': [104.88659, 11.545469],
    '莫桑比克马普托': [32.608571, -25.893473],
    '阿联酋迪拜': [55.269441, 25.204514],
    '匈牙利布达佩斯': [17.108519, 48.179162],
    '澳大利亚悉尼': [150.993137, -33.675509],
    '美国加州': [-121.910642, 41.38028],
    '澳大利亚墨尔本': [144.999416, -37.781726],
    '墨西哥': [-99.094092, 19.365711],
    '加拿大温哥华': [-123.023921, 49.311753]
  };
  var BJData = [

    [{
      name: '北京',
      value: 101026
    }, {
      name: '东钱湖'
    }],
    [{
      name: '上海',
      value: 402370
    }, {
      name: '东钱湖'
    }],
    [{
      name: '杭州',
      value: 103370
    }, {
      name: '东钱湖'
    }],
    [{
      name: '新疆',
      value: 370
    }, {
      name: '东钱湖'
    }],
    [{
      name: '尼日利亚',
      value: 9100
    }, {
      name: '东钱湖'
    }],
    [{
      name: '美国洛杉矶',
      value: 2370
    }, {
      name: '东钱湖'
    }],
    [{
      name: '香港邦泰',
      value: 3130
    }, {
      name: '东钱湖'
    }],
    [{
      name: '美国芝加哥',
      value: 2350
    }, {
      name: '东钱湖'
    }],
    [{
      name: '加纳库马西',
      value: 5120
    }, {
      name: '东钱湖'
    }],
    [{
      name: '德国汉堡',
      value: 6280
    }, {
      name: '东钱湖'
    }],
    [{
      name: '哈萨克斯坦阿拉木图',
      value: 7255
    }, {
      name: '东钱湖'
    }],
    [{
      name: '俄罗斯伊尔库茨克',
      value: 8125
    }, {
      name: '东钱湖'
    }],
    [{
      name: '巴西',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '埃及达米埃塔',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '西班牙巴塞罗纳',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '柬埔寨金边',
      value: 3590
    }, {
      name: '东钱湖'
    }],

    [{
      name: '莫桑比克马普托',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '阿联酋迪拜',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '匈牙利布达佩斯',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '澳大利亚悉尼',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '美国加州',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '澳大利亚墨尔本',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '墨西哥',
      value: 3590
    }, {
      name: '东钱湖'
    }],
    [{
      name: '加拿大温哥华',
      value: 3590
    }, {
      name: '东钱湖'
    }]
  ];
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([{
          coord: fromCoord,
          value: dataItem[0].value
        }, {
          coord: toCoord,
        }]);
      }
    }
    return res;
  };

  var color = ['#a6c84c', '#ffa022', '#46bee9'];
  var series = [];
  [
    ['东钱湖', BJData]
  ].forEach(function(item, i) {
    series.push(

      {
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 5, //图标大小
        },
        lineStyle: {
          normal: {
            width: 1, //尾迹线条宽度
            opacity: 0, //尾迹线条透明度
            curveness: .3 //尾迹线条曲直度
          }
        },

        data: convertData(item[1])
      }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: { //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 4 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: '{b}' //圆环显示文字
          },
          emphasis: {
            show: true
          }
        },
        symbol: 'circle',
        symbolSize: function(val) {
          return 2 + val[2] / 30000; //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: '#f00'
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[0].name,
            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
          };
        }),
      },
      //被攻击点
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          period: 4,
          brushType: 'stroke',
          scale: 4
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            //offset:[5, 0],
            color: '#00ffff',
            formatter: '{b}',
            textStyle: {
              color: "#00ffff"
            }
          },
          emphasis: {
            show: true
          }
        },
        symbol: 'pin',
        symbolSize: 30,
        itemStyle: {
          normal: {
            show: true,
            color: '#9966cc'
          }
        },
        data: [{
          name: item[0],
          value: geoCoordMap[item[0]].concat([100]),
        }],
      }
    );
  });

  option = {
    title: {
      text: '',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 24
      },
      padding: [20, 20, 20, 20]
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(12, 204, 104, 0.92)',
      borderColor: '#FFFFCC',
      showDelay: 0,
      hideDelay: 0,
      enterable: true,
      transitionDuration: 0,
      extraCssText: 'z-index:100',
      formatter: function(params, ticket, callback) {
        //根据业务自己拓展要显示的内容
        var res = "";
        var name = params.name;
        var value = params.value[params.seriesIndex + 1];
        res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
        return res;
      }
    },
    visualMap: { //图例值控制
      min: 0,
      max: 10000,
      calculable: true,
      color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'world',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true, //是否允许缩放
      layoutCenter: ['35%', '50%'], //地图位置
      layoutSize: zoom + "%",
      itemStyle: {
        normal: {
          color: 'rgba(51, 69, 89, .5)', //地图背景色
          borderColor: 'rgba(100,149,237,1)' //省市边界线
        },
        emphasis: {
          color: 'rgba(37, 43, 61, .5)' //悬浮背景
        }
      }
    },

    series: series
  };

  var counts = option.series[0].data.length; //获取所有闪动圆环数量
  var dataIndex = 0;
//让圆环的提示框自动触发轮播显示
  function autoHoverTip() {
    for (var i = 0; i < counts; i++) {
      (function(i) {
        ts = setTimeout(function() {
          worldMap.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: i
          });
        }, 5000 * i);
      })(i);
    }
  }

  setTimeout(function() {
    autoHoverTip();
    tv = setInterval(autoHoverTip, counts * 1000);
  }, 500);
  worldMap.setOption(option);
}
/* getEcharts */
function getEcharts() {
  // Step:3 conifg ECharts's path, link to echarts.js from current page.
  // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
  require.config({
    paths: {
      echarts: '../js'
    }
  });

  // Step:4 require echarts and use it in the callback.
  // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
  require(
    [
      'echarts',
      'echarts/chart/map'
    ],
    function(ec) {
      // --- 地图 ---
      var myChart2 = ec.init(document.getElementById('worldMap'));
      var option = {
        title: {
          top: 20,
          left: 20,
          text: '',
          textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 16
          }
        },
        series: [{
          name: '全国',
          type: 'map',
          roam: true,
          hoverable: false,
          mapType: 'china',
          itemStyle: {
            normal: {
              label: {show:true,textStyle:{color:'#fff'}},
              emphasis:{label:{show:true}},
              borderColor: 'rgba(100,149,237,1)',
              borderWidth: 0.5,
              areaStyle: {
                color: 'rgba(35, 112, 254, 0.35)'
              }
            }
          },
          data: [],
          markLine: {
            smooth: true,
            symbol: ['none', 'circle'],
            symbolSize: 1,
            itemStyle: {
              normal: {
                color: '#fff',
                borderWidth: 1,
                borderColor: 'rgba(30,144,255,0.5)'
              }
            },
            data: []
          },
          geoCoord: {
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '东钱湖':[121.707178,29.782332],
            '韶关': [113.7964, 24.7028],
            '武汉':[114.31667,30.51667],
            '长沙':[113.00000,28.21667]
          },
          markPoint: {
            symbol: 'emptyCircle',
            symbolSize: function(v) {
              return 0
            },
            effect: {
              show: false,
              shadowBlur: 0
            },
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  position: 'top',
                  textStyle: {
                    fontSize: 16,
                    color:'#fff'
                  }
                }
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            },
            data: [
              {
                name: '武汉',
                value: 165
              },
              {
                name: '长沙',
                value: 120
              },
              {
                name: '上海',
                value: 95
              },
              {
                name: '广州',
                value: 90
              },
              {
                name: '大连',
                value: 80
              },
              {
                name: '南宁',
                value: 70
              },
              {
                name: '南昌',
                value: 60
              },
              {
                name: '北京',
                value: 50
              },
              {
                name: '拉萨',
                value: 50
              },
              {
                name: '长春',
                value: 40
              },
              {
                name: '包头',
                value: 30
              },
              {
                name: '重庆',
                value: 20
              },
              {
                name: '常州',
                value: 10
              },
              {
                name: '郑州',
                value: 95
              }
            ]
          }
        },
          {
            name: '武汉 165',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: true
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '武汉'
                }, {
                  name: '东钱湖',
                  value: 165
                }]
              ]
            },
            markPoint: {
              symbol: 'emptyCircle',
              symbolSize: function(v) {
                if(v > 70) {
                  return 10 + v/10
                }else{
                  return 0.1
                }
                return 20
              },
              effect: {
                show: true,
                shadowBlur: 0
              },
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      fontSize: 16,
                      color:'#fff'
                    }
                  }
                },
                emphasis: {
                  label: {
                    show: true,
                    textStyle: {
                      fontSize: 16,
                      color:'#fff'
                    }
                  }
                }
              },
              data: [
                {
                  name: '武汉',
                  value: 165
                },
                {
                  name: '长沙',
                  value: 120
                },
                {
                  name: '上海',
                  value: 95
                },
                {
                  name: '广州',
                  value: 90
                },
                {
                  name: '大连',
                  value: 80
                },
                {
                  name: '南宁',
                  value: 70
                },
                {
                  name: '南昌',
                  value: 60
                },
                {
                  name: '北京',
                  value: 50
                },
                {
                  name: '拉萨',
                  value: 50
                },
                {
                  name: '长春',
                  value: 40
                },
                {
                  name: '包头',
                  value: 30
                },
                {
                  name: '重庆',
                  value: 20
                },
                {
                  name: '常州',
                  value: 10
                },
                {
                  name: '郑州',
                  value: 95
                }
              ]
            }
          },
          {
            name: '长沙 120',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '长沙'
                }, {
                  name: '东钱湖',
                  value: 120
                }]
              ]
            },

          },
          {
            name: '上海 95',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: true
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '上海'
                }, {
                  name: '东钱湖',
                  value: 95
                }]
              ]
            },

          },
          {
            name: '郑州 95',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '郑州'
                }, {
                  name: '东钱湖',
                  value: 95
                }]
              ]
            },

          },
          {
            name: '广州 90',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '广州'
                }, {
                  name: '东钱湖',
                  value: 90
                }]
              ]
            },

          },
          {
            name: '大连 80',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '大连'
                }, {
                  name: '东钱湖',
                  value: 80
                }]
              ]
            },

          },
          {
            name: '南宁 70',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '南宁'
                }, {
                  name: '东钱湖',
                  value: 70
                }]
              ]
            },

          },
          {
            name: '北京 50',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '北京'
                }, {
                  name: '东钱湖',
                  value: 50
                }]
              ]
            },
          },
          {
            name: '拉萨 50',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '拉萨'
                }, {
                  name: '东钱湖',
                  value: 50
                }]
              ]
            },
          },
          {
            name: '长春 40',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '长春'
                }, {
                  name: '东钱湖',
                  value: 40
                }]
              ]
            },
          },
          {
            name: '包头 30',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '包头'
                }, {
                  name: '东钱湖',
                  value: 30
                }]
              ]
            },
          },
          {
            name: '重庆 20',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: [
                [{
                  name: '重庆'
                }, {
                  name: '东钱湖',
                  value: 20
                }]
              ]
            },
          }
        ],
        legend: {
          orient: 'vertical', // 'vertical'
          x: 'left', // 'center' | 'left' | {number},
          y: 'bottom', // 'center' | 'bottom' | {number}
          textStyle: {
            color: '#fff'
          },
          selectedMode:true,
          data:['武汉 165', '长沙 120', '上海 95','郑州 95','广州 90','大连 80', '南宁 70', '北京 50','拉萨50','长春 40']
        }
      }
      myChart2.setOption(option);
    });
}
/*  获取url */
function getUrl(name)
{
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
};

//登录验证
function checkLogin(index){
	var token = sessionStorage.getItem('token');
	var token = 1;
	 if(!token) {
	        location.href = 'login.html?code='+index
	    } else {
	    	if(index=='0'){//应急指挥中心
	    		location.href="emergencyCommand/emergencyCommand.html";
	    	}else if(index=='1'){//运行监测中心
	    		location.href = 'index/index.html'
	    	}else if(index=='2'){//数据分析中心
	    		location.href="data-analysis/data-analysis.html";
	    	}else if(index=='3'){//视频中心
	    		location.href="video/video.html";
	    	}else if(index=='4'){//虚拟旅游中心
	    		location.href="virtualTourism/virtualTourism.html";
	    	}
	        
	  }
}
