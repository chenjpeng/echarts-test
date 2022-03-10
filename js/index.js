// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option4 = {
    color: ['#6586cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["UnitedKingdom", "Germany", "France", "EIRE", "Spain", "Netherlands", "Belgium"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '客户数量',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [345801, 9155, 8152, 7165, 2462, 2285, 1971],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option4);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2.指定配置项和数据
  var option3 = {
    color: ['#c96dcf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["14646", "18102", "17450", "14911", "12415","14156"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '订单总额',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [267761, 244952, 185919, 125596, 123725,113384],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option3);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
// (function () {
//   // 年份对应数据
//   var yearData = [{
//       year: "2020", // 年份
//       data: [
//         // 两个数组是因为有两条线
//         [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
//         [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
//       ]
//     },
//     {
//       year: "2021", // 年份
//       data: [
//         // 两个数组是因为有两条线
//         [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
//         [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
//       ]
//     }
//   ];

//   var myChart = echarts.init(document.querySelector(".line .chart"));

//   var option = {
//     // 修改两条线的颜色
//     color: ['#00f2f1', '#ed3f35'],
//     tooltip: {
//       trigger: 'axis'
//     },
//     // 图例组件
//     legend: {
//       // 当serise 有name值时， legend 不需要写data
//       // 修改图例组件文字颜色
//       textStyle: {
//         color: '#4c9bfd'
//       },
//       right: '10%',
//     },
//     grid: {
//       top: "20%",
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true,
//       show: true, // 显示边框
//       borderColor: '#012f4a' // 边框颜色
//     },
//     xAxis: {
//       type: 'category',
//       boundaryGap: false, // 去除轴间距
//       data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
//       // 去除刻度线
//       axisTick: {
//         show: false
//       },
//       axisLabel: {
//         color: "#4c9bfb" // x轴文本颜色
//       },
//       axisLine: {
//         show: false // 去除轴线
//       }
//     },
//     yAxis: {
//       type: 'value',
//       // 去除刻度线
//       axisTick: {
//         show: false
//       },
//       axisLabel: {
//         color: "#4c9bfb" // x轴文本颜色
//       },
//       axisLine: {
//         show: false // 去除轴线
//       },
//       splitLine: {
//         lineStyle: {
//           color: "#012f4a"
//         }
//       }
//     },
//     series: [{
//         type: 'line',
//         smooth: true, // 圆滑的线
//         name: '新增粉丝',
//         data: yearData[0].data[0]
//       },
//       {
//         type: 'line',
//         smooth: true, // 圆滑的线
//         name: '新增游客',
//         data: yearData[0].data[1]
//       }
//     ]
//   };

//   myChart.setOption(option);

//   // 4.让图表随屏幕自适应
//   window.addEventListener('resize', function () {
//     myChart.resize();
//   })

//   // 5.点击切换2020 和 2021 的数据
//   $('.line h2 a').on('click', function () {
//     // console.log($(this).index());
//     // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
//     // console.log(yearData[$(this).index()]);
//     var obj = yearData[$(this).index()];
//     option.series[0].data = obj.data[0];
//     option.series[1].data = obj.data[1];
//     // 选中年份高亮
//     $('.line h2 a').removeClass('a-active');
//     $(this).addClass('a-active');

//     // 需要重新渲染
//     myChart.setOption(option);
//   })
// })();

//// 折线图模块2
//(function () {
//  var myChart = echarts.init(document.querySelector('.line2 .chart'));
//
//  var option = {
  //   tooltip: {
  //     trigger: 'axis',
  //   },
  //   legend: {
  //     top: "0%",
  //     textStyle: {
  //       color: "rgba(255,255,255,.5)",
  //       fontSize: "12"
  //     }
  //   },
  //   grid: {
  //     top: '30',
  //     left: '10',
  //     right: '30',
  //     bottom: '10',
  //     containLabel: true
  //   },
  //   xAxis: [{
  //     type: 'category',
  //     boundaryGap: false,
  //     // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
  //     axisLabel: {
  //       textStyle: {
  //         color: "rgba(255,255,255,.6)",
  //         fontSize: 12
  //       }
  //     },
  //     // x轴线的颜色为   rgba(255,255,255,.2)
  //     axisLine: {
  //       lineStyle: {
  //         color: "rgba(255,255,255,.2)"
  //       }
  //     },
  //     data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
  //   }],
  //   yAxis: [{
  //     type: 'value',
  //     axisTick: {
  //       // 不显示刻度线
  //       show: false
  //     },
  //     axisLine: {
  //       lineStyle: {
  //         color: "rgba(255,255,255,.1)"
  //       }
  //     },
  //     axisLabel: {
  //       textStyle: {
  //         color: "rgba(255,255,255,.6)",
  //         fontSize: 12
  //       }
  //     },
  //     // 修改分割线的颜色
  //     splitLine: {
  //       lineStyle: {
  //         color: "rgba(255,255,255,.1)"
  //       }
  //     }
  //   }],
  //   series: [{
  //       name: '邮件营销',
  //       type: 'line',
  //       smooth: true, // 圆滑的线
  //       // 单独修改当前线条的样式
  //       lineStyle: {
  //         color: "#0184d5",
  //         width: 2
  //       },
  //       // 填充区域渐变透明颜色
  //       areaStyle: {
  //         color: new echarts.graphic.LinearGradient(
  //           0,
  //           0,
  //           0,
  //           1,
  //           [{
  //               offset: 0,
  //               color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
  //             },
  //             {
  //               offset: 0.8,
  //               color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
  //             }
  //           ],
  //           false
  //         ),
  //         shadowColor: "rgba(0, 0, 0, 0.1)"
  //       },
  //       // 拐点设置为小圆点
  //       symbol: 'circle',
  //       // 设置拐点大小
  //       symbolSize: 5,
  //       // 开始不显示拐点， 鼠标经过显示
  //       showSymbol: false,
  //       // 设置拐点颜色以及边框
  //       itemStyle: {
  //         color: "#0184d5",
  //         borderColor: "rgba(221, 220, 107, .1)",
  //         borderWidth: 12
  //       },
  //       data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
  //     },
  //     {
  //       name: "转发量",
  //       type: "line",
  //       smooth: true,
  //       lineStyle: {
  //         normal: {
  //           color: "#00d887",
  //           width: 2
  //         }
  //       },
  //       areaStyle: {
  //         normal: {
  //           color: new echarts.graphic.LinearGradient(
  //             0,
  //             0,
  //             0,
  //             1,
  //             [{
  //                 offset: 0,
  //                 color: "rgba(0, 216, 135, 0.4)"
  //               },
  //               {
  //                 offset: 0.8,
  //                 color: "rgba(0, 216, 135, 0.1)"
  //               }
  //             ],
  //             false
  //           ),
  //           shadowColor: "rgba(0, 0, 0, 0.1)"
  //         }
  //       },
  //       // 设置拐点 小圆点
  //       symbol: "circle",
  //       // 拐点大小
  //       symbolSize: 5,
  //       // 设置拐点颜色以及边框
  //       itemStyle: {
  //         color: "#00d887",
  //         borderColor: "rgba(221, 220, 107, .1)",
  //         borderWidth: 12
  //       },
  //       // 开始不显示拐点， 鼠标经过显示
  //       showSymbol: false,
  //       data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
  //     }
  //   ]
  // };

//  myChart.setOption(option);
//
//  window.addEventListener('resize', function () {
//    myChart.resize();
//  })
//})();

// // 饼形图1
// (function () {
//   var myChart = echarts.init(document.querySelector(".pie .chart"));
//   var option = {
//     color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
  
    
  

// 产品销量榜单
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  // 2.指定配置项和数据
  var option2 = {
    color: ['#12cfc0'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["84077", "85099B", "22197", "84879", "85123A", "21212", "22492","22616"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '销量',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [51852,44026, 43369, 34040, 33403, 33125, 25589,24704],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 10
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option2);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 销量地图展示
(function () {
	var myChart = echarts.init(document.querySelector(".map .chart"));
	var 
		option = {
				title: {
					text: '订单销售额全球分布 (2010-2011年度)',
					subtext:
					'单位：英镑',
					sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
					left: 'center',
					top: 'top',
				textStyle:{
					color: '#ffffff'
				}
				
		    },
				tooltip: {
					trigger: 'item',
					formatter: function (params) {
						var value = (params.value + '').split('.');
					value =value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +'.' +value[1];
						return params.seriesName + '<br/>' + params.name + ' : ' + value;
		      }
		    },
				toolbox: {
		      show: true,
		      orient: 'vertical',
		      left: 'right',
		      top: 'center',
		      feature: {
		        dataView: { readOnly: false },
		        restore: {},
		        saveAsImage: {}
		      }
		    },
		  visualMap: {
		      min: 0,
		      max: 1000000,
		      text: ['High', 'Low'],
		      realtime: false,
		      calculable: true,
		      inRange: {
		        color: ['lightskyblue', 'yellow', 'orangered']
		      }
		    },
		    series: [
		      {
		        name: '订单总额 (2010-2011年度)',
		        type: 'map',
		        mapType: 'world',
		        roam: true,
		        emphasis: {
		          label: {
		            show: true
		          }
		        },
		        data: [
		          { name: 'United Arab Emirates', value: 1902.28 },
		          { name: 'French Southern and Antarctic Lands', value: 268.065 },
		          { name: 'Australia', value: 137077.27 },
		          { name: 'Austria', value: 9471.12 },
		          { name: 'Belgium', value: 40793.28 },
		          { name: 'Brazil', value: 1143.6 },
		          { name: 'Canada', value: 3666.38 },
		          { name: 'Cyprus', value: 13037.54 },
		          { name: 'Czech Republic', value: 707.72 },
		          { name: 'Germany', value: 213893.51 },
		          { name: 'Denmark', value: 18599.24 },
		          { name: 'Spain', value: 54503.15 },
		          { name: 'Finland', value: 21096.06 },
		          { name: 'France', value: 189664.01 },
		          { name: 'United Kingdom', value: 6469952.924 },
		          { name: 'Greece', value: 4029.53 },
		          { name: 'Ireland', value: 243308.85 },
		          { name: 'Iceland', value: 4085.18 },
		          { name: 'Israel', value: 6994.25 },
		          { name: 'Italy', value: 16690.06 },
		          { name: 'Japan', value: 35457.55 },
		          { name: 'Lebanon', value: 1693.88 },
		          { name: 'Singapore', value: 9120.39 },
		          { name: 'Lithuania', value: 1661.06 },
		          { name: 'Netherlands', value: 272933.52 },
		          { name: 'Norway', value: 32377.76 },
		          { name: 'Poland', value: 7213.14 },
		          { name: 'Portugal', value: 26257.86 },
		          { name: 'Russia', value: 1002.31 },
		          { name: 'Saudi Arabia', value: 131.17 },
		          { name: 'Sweden', value: 36595.91 },
		          { name: 'Swaziland', value: 55739.4 },
		          { name: 'Malta', value: 2536.28 },
		          { name: 'Bahrain', value: 548.4 },
		          { name: 'Jersey', value: 19892.14 },
		          { name: 'United States', value: 1115.64 },
		        ]
		      }
		    ]
		  };
	myChart.setOption(option);
	
})();

// # 销量折线图
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置项和数据
  var option4 = {
    color: ['#cf842f'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['2010/12', '2011/1', '2011/2','2011/3','2011/4','2011/5', '2011/6', '2011/7','2011/8','2011/9','2011/10','2011/11'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '月订单额（单位：(万)英镑）',
      type: 'line',
      barWidth: '35%',
      // ajax传动态数据
      data: [55.4,47.5,43.7,58,42.6,64.8,60.8,57.4,61.6,93.1,97.4,113],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option4);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置项和数据
  var option4 = {
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '10%',
      containLabel: true
    },
	legend: {
	    show:false
	  },
	 
	  series: [
	    {
	      type: 'pie',
	      radius: [20, 50],
	      center: ['50%', '50%'],
	      roseType: 'area',
	      itemStyle: {
	        borderRadius: 8
	      },
	      data: [
	        { value: 818, name: '英镑价格(0-1]' },
	        { value: 2255, name: '英镑价格(1-5]' },
	        { value: 449, name: '英镑价格（5,10]' },
	        { value: 148, name: '英镑价格(10,100]' },
	        { value: 6, name: '英镑价格100以上' },
	     ]
	         }
	       ]   


  };
  // 3.把配置项给实例对象
  myChart.setOption(option4);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();



// # 销量折线图
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  // 2.指定配置项和数据
  var option4 = {
    color: ['#9ecf9e'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['2010/12', '2011/1', '2011/2','2011/3','2011/4','2011/5', '2011/6', '2011/7','2011/8','2011/9','2011/10','2011/11'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '月订单数',
      type: 'line',
      barWidth: '35%',
      // ajax传动态数据
      data: [1708,1236,1202,1619,1384,1849,170,1593,1544,2078,2263,3086],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option4);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
	
	        
	
	
	


	 
	 