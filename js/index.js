// //连接服务器
// connectionServer();
// //统计05-19年每年对应的200KV以及500KV工程数量
// yearAndTower();
// //投产主变容量统计
// TouchangZhuBian();
// //折单线路统计图
// unilatKeralKilometre();
// cqmap();
// setTop5();
// setEchartsPie('touchan', {
//      value: [115, 59]
// });
// setEchartsPie('sheji', {
//      value: [35, 139]
// });
// setEchartsPie('zaijian', {
//      value: [34, 140]
// });
// setInterval(function () {
//      setEchartsPie('touchan', {
//                value: [115, 59]
//           }
//      );
//      setEchartsPie('sheji', {
//           value: [35, 139]
//      });
//      setEchartsPie('zaijian', {
//           value: [34, 140]
//      });
//      TouchangZhuBian();
//      unilatKeralKilometre();
//      yearAndTower();
//      setTop5();

// }, 10000)
// //连接服务器  
// function connectionServer() {
//      var namespace = "/";
//      window.appname = "html";
//      window.serverURL = "ws://192.168.13.13:3001" + namespace;
//      try {
//           var scoket = io.connect(window.serverURL);
//           window.mysocket = scoket;
//           scoket.on("connect", function () {
//                window.mysocket.emit("login", {
//                     appname: window.appname
//                });
//           });
//      } catch (err) {
//           console.log("err");
//      }
// }
// //统计05年到19年每年修建的220KV与500Kv工程的数量
// function yearAndTower() {
//      var myChart = echarts.init(document.getElementById('yearAndTower'));
//      var option = {
//           legend: {
//                orient: 'vertical',
//                x: 780,
//                y: 0,
//                icon: 'pie',
//                color: ['#4472C5', '#ED7C30', '#80FF80'],
//                data: ['总工程', '220KV工程', '500KV工程'],
//                textStyle: { //图例文字的样式
//                     color: 'green',
//                     fontSize: 20
//                },

//                //backgroundColor:'rgba(100,0,100,0.5)',
//           },
//           grid: {
//                left: '3%',
//                right: '4%',
//                bottom: '3%',
//                containLabel: true
//           },
//           xAxis: {
//                //name:'年份',
//                nameTextStyle: {
//                     fontSize: 20,
//                },
//                type: 'category',
//                data: ['05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
//                axisLine: {
//                     show: false,
//                     lineStyle: {
//                          color: 'white'
//                     }
//                },
//                axisLabel: {
//                     interArrival: 0, //设置x坐标内容全部显示
//                     rotate: 0, //设置坐标倾斜角度
//                     textStyle: {
//                          fontSize: 20,
//                          color: 'white',
//                     },
//                },
//                //设置x轴字体大小及颜色

//           },
//           yAxis: {
//                // name:'工程数量',              //---轴名称
//                nameTextStyle: {
//                     fontSize: 20,
//                },
//                type: 'value',
//                //y轴颜色
//                axisLine: {
//                     show: false,
//                     lineStyle: {
//                          color: '#fff'
//                     }
//                },

//                //坐标轴内线的样式

//                splitLine: { //---grid 区域中的分隔线
//                     show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
//                     lineStyle: {
//                          color: '#666',
//                          width: 1,
//                          type: 'dashed', //---类型
//                     },
//                },
//                splitArea: {
//                     show: false
//                },
//                axisLabel: {
//                     formatter: '{value}',
//                     textStyle: {
//                          fontSize: 20,
//                          color: 'white',
//                     },

//                }

//           },
//           series: [{
//                     name: "总工程",
//                     //每年对应的（200KV+500KV）工程的数量
//                     data: [10, 14, 13, 8, 9, 9, 17, 8, 14, 13, 11, 12, 16, 10,10], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
//                     type: 'line',
//                     symbol: 'square',
//                     symbolSize: 5,
//                     smooth: true,
//                     lineStyle: {
//                          normal: {
//                               color: 'rgb(24,190,188)',
//                               width: 5,
//                               //type: 'dashed'
//                          }
//                     },
//                     itemStyle: {
//                          normal: {
//                               borderWidth: 2,
//                               borderColor: 'white',
//                               color: 'rgb(24,190,188)',
//                               label: {
//                                    show: true,
//                                    textStyle: {
//                                         fontSize: 20,
//                                    }
//                               },
//                               lineStyle: {
//                                    width: 10
//                               },
//                               // areaStyle:{
//                               //      type:'default'
//                               // }
//                          }
//                     },
//                },
//                {
//                     name: "220KV工程",
//                     //05-19年每年修建的220KV工程的数量
//                     data: [9, 14, 9, 5, 7, 8, 14, 6, 14, 10, 9, 9, 10, 10,
//                     6], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
//                     type: 'line',
//                     symbol: 'circle',
//                     symbolSize: 5,
//                     smooth: true,
//                     lineStyle: {
//                          normal: {
//                               color: 'green',
//                               width: 5,
//                               type: 'dashed'
//                          }
//                     },
//                     itemStyle: {
//                          normal: {
//                               borderWidth: 2,
//                               borderColor: 'white',
//                               color: 'green',
//                               label: {
//                                    show: true,
//                                    textStyle: {
//                                         fontSize: 20,
//                                    }
//                               },
//                               lineStyle: {
//                                    width: 10
//                               },
//                               // areaStyle:{
//                               //      type:'default'
//                               // }
//                          }
//                     },
//                },
//                {
//                     name: "500KV工程",
//                     //05-19年每年对应的500KV工程的数量
//                     data: [1, 0, 4, 3, 2, 1, 3, 2, 0, 3, 2, 3, 6, 0,
//                     4], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
//                     type: 'line',
//                     symbol: 'square',
//                     symbolSize: 5,
//                     smooth: true,
//                     lineStyle: {
//                          normal: {
//                               color: 'yellow',
//                               width: 5,
//                               type: 'dashed'
//                          }
//                     },
//                     itemStyle: {
//                          normal: {
//                               borderWidth: 2,
//                               borderColor: 'white',
//                               color: 'yellow',
//                               label: {
//                                    show: true,
//                                    textStyle: {
//                                         fontSize: 20,
//                                    }
//                               },
//                               lineStyle: {
//                                    width: 10
//                               },
//                               // areaStyle:{
//                               //      type:'default'
//                               // }
//                          }
//                     },
//                }
//           ]
//      }
//      // 指定图表的配置项和数据
//      myChart.setOption(option);
// }
// //折单电线公里年份对应表
// function unilatKeralKilometre() {
//      var myChart = echarts.init(document.getElementById('tongjitu'));
//      option = {
//           color: ['#0077FF', '#006699', '#4cabce', '#e5323e'],
//           title: {
//                show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
//                // text: '折单公里数',//主标题文本，'\n'指定换行
//                x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
//                y: 'top', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
//                //             textAlign: null,//水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
//                //             backgroundColor: 'rgba(0,0,0,0)',//标题背景颜色，默认'rgba(0,0,0,0)'透明
//                //             borderColor: 'white',//标题边框颜色,默认'#ccc'
//                //             borderWidth: '',//标题边框线宽，单位px，默认为0（无边框）
//                //             padding: 0,//标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
//                //             itemGap: 10,//主副标题纵向间隔，单位px，默认为10
//                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
//                     fontFamily: 'Arial, Verdana, sans...',
//                     fontSize: '40',
//                     fontStyle: 'normal',
//                     fontWeight: 'normal',
//                     color: 'white',
//                },


//           },
//           tooltip: {
//                trigger: 'axis',
//                axisPointer: { // 坐标轴指示器，坐标轴触发有效
//                     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
//                },
//                formatter: function (params) {
//                     var tar = params[1];
//                     return "单折线" + ' : ' + tar.value;
//                },

//           },
//           grid: {
//                left: '3%',
//                right: '4%',
//                bottom: '3%',
//                containLabel: true
//           },
//           xAxis: {

//                type: 'category',
//                data: ['05', '06', '07', '08', '09', '10', 11, 12, 13, 14, 15, 16, 17, 18, 19, 'total'],

//                axisLine: {
//                     show: false,
//                     lineStyle: {
//                          color: 'white'
//                     }
//                },
//                axisLabel: {
//                     interArrival: 0, //设置x坐标内容全部显示
//                     rotate: -30, //设置坐标倾斜角度
//                },
//                //设置x轴字体大小及颜色
//                axisLabel: {
//                     textStyle: {
//                          fontSize: 20,
//                          color: 'white',
//                     },

//                }
//           },
//           yAxis: {
//                type: 'value',
//                //y轴颜色
//                axisLine: {
//                     show: false,
//                     lineStyle: {
//                          color: '#fff'
//                     }
//                },
//                //y轴设置为百分比
//                axisLabel: {
//                     formatter: '{value}',
//                },

//                //坐标轴内线的样式
//                splitLine: {
//                     show: true, //去除网格线
//                     lineStyle: {
//                          color: '#666',
//                          width: 1,
//                          type: 'dashed',
//                     },
//                },
//                splitArea: {
//                     show: false
//                },
//                axisLabel: {
//                     textStyle: {
//                          fontSize: 20,
//                          color: 'white',
//                     },
//                }

//           },
//           series: [{
//                     name: '辅助',
//                     type: 'bar',
//                     stack: '总量',
//                     itemStyle: {
//                          normal: {
//                               barBorderColor: 'rgba(0,0,0,0)',
//                               color: 'rgba(0,0,0,0)'
//                          },
//                          emphasis: {
//                               barBorderColor: 'rgba(0,0,0,0)',
//                               color: 'rgba(0,0,0,0)'
//                          }
//                     },

//                     data: [0, 631, 1165, 2353, 2459, 3026, 3566, 4334, 4556, 5178, 5504, 5916, 6361, 7025, 7181, 0]
//                },

//                {
//                     name: '单折公里数',
//                     type: 'bar',
//                     stack: '总量',
//                     label: {
//                          //position:'top',
//                          normal: {
//                               show: true,
//                               position: 'top',

//                               textStyle: {
//                                    fontSize: 20,
//                                    fontWeight: 'bold',
//                                    color: 'white'
//                               }
//                          },

//                     },
//                     itemStyle: {
//                          normal: {
//                               color: new echarts.graphic.LinearGradient(
//                                    0, 0, 0, 1,
//                                    [{
//                                              offset: 0,
//                                              color: '#c5f6ad'
//                                         },
//                                         {
//                                              offset: 0.5,
//                                              color: '#5ff0a5'
//                                         },
//                                         {
//                                              offset: 1,
//                                              color: '#4794f0'
//                                         }
//                                    ]
//                               )
//                          },
//                          emphasis: {
//                               color: new echarts.graphic.LinearGradient(
//                                    0, 0, 0, 1,
//                                    [{
//                                              offset: 0,
//                                              color: '#2378f7'
//                                         },
//                                         {
//                                              offset: 0.7,
//                                              color: '#2378f7'
//                                         },
//                                         {
//                                              offset: 1,
//                                              color: '#83bff6'
//                                         }
//                                    ]
//                               )
//                          }
//                     },
//                     data: [631, 534, 1188, 106, 567, 540, 768, 222, 622, 326, 412, 445, 664, 156,
//                          143, 7324
//                     ]
//                }
//           ]
//      };
//      myChart.setOption(option);
//      // setInterval(function(){
//      //      var chart = echarts.init(document.getElementById('tongjitu'));
//      //      chart.setOption(option);
//      // },3000) 
// }
// //设置饼图
// function setEchartsPie(id, data) {
//      let $el = document.getElementById(id);
//      let myChart = this.echarts.init($el);
//      let total = 0;
//      data.value.forEach((res) => {
//           total += parseFloat(res);
//      });
//      total = total;
//      var jiancheng = parseInt(data.value[0] / total * 100)
//      var name = data.type;
//      let option = {
//           title: {
//                zlevel: 0,
//                text: [
//                     jiancheng + "%" + "\n" + data.value[0] + "个",
//                ],
//                rich: {
//                     value: {
//                          color: '#303133',
//                          fontSize: 20,
//                          fontWeight: 'bold',
//                          lineHeight: 40,
//                     },
//                     name: {
//                          color: '#909399',
//                          lineHeight: 20
//                     },
//                },
//                top: 'center',
//                left: '100',
//                textAlign: 'center',
//                textStyle: {
//                     color: '#e4393c', //京东红
//                     fontStyle: 'normal', //主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
//                     fontWeight: "bold", //可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
//                     fontFamily: "san-serif", //主题文字字体，默认微软雅黑
//                     fontSize: 20, //主题文字字体大小，默认为18px
//                     color: 'white',
//                },
//           },
//           tooltip: { // 悬停指示
//                trigger: 'item',
//                formatter: "{b}: {c} ({d}%)"
//           },
//           legend: {
//                orient: 'vertical',
//                x: 'right',

//                itemGap: 30,
//                top: 'middle',
//                align: 'left',
//                icon: 'circle',
//                formatter: function (name) {
//                     return name;
//                },
//                show: false
//           },
//           series: [{
//                name: '访问来源',
//                type: 'pie',
//                radius: ['62%', '75%'],
//                center: ['50%', '50%'],
//                stillShowZeroSum: false,
//                avoidLabelOverlap: false,
//                itemStyle: {
//                     borderWidth: 5, //设置border的宽度有多大
//                     borderColor: '#fff',
//                },
//                zlevel: 1,
//                label: {
//                     normal: {
//                          padding: [30, 30, 30, 30],
//                          backgroundColor: 'green',
//                          show: false,
//                          position: 'center',
//                          formatter: [
//                               '{value|￥{c}}',
//                               '{name|{b}}'
//                          ].join('\n'),
//                          rich: {
//                               value: {
//                                    color: '#303133',
//                                    fontSize: 40,
//                                    fontWeight: 'bold',
//                                    lineHeight: 40,
//                               },
//                               name: {
//                                    color: '#909399',
//                                    lineHeight: 20
//                               },
//                          },
//                     },
//                     emphasis: {
//                          show: false,
//                          textStyle: {
//                               fontSize: '16',
//                               fontWeight: 'bold'
//                          }
//                     }
//                },
//                data: data.value
//           }],
//           color: ['green', 'white']
//      };
//      myChart.setOption(option);
// }

// //设置主变容量数量统计
// function TouchangZhuBian() {
//      var myChart = echarts.init(document.getElementById('tongJi1'));
//      var option = {
//           //--------------    标题 title  ----------------
//           title: {
//                //text: '主变容量',
//                x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
//                y: 'top',
//                textStyle: { //---主标题内容样式
//                     color: '#fff',
//                     fontSize: 30,
//                },
//                // subtext:'副标题',          //---副标题内容样式
//                // subtextStyle:{
//                //      color:'#bbb'
//                // },

//                //padding:[0,0,0,0]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位

//           },

//           //----------------   图例 legend  -----------------
//           legend: {
//                type: 'plain', //----图例类型，默认为'plain'，当图例很多时可使用'scroll'
//                top: '1%', //----图例相对容器位置,top\bottom\left\right
//                selected: {
//                     '销量': true, //----图例选择,图形加载出来会显示选择的图例，默认为true
//                },
//                textStyle: { //----图例内容样式
//                     color: '#fff', //---所有图例的字体颜色
//                     //backgroundColor:'black',  //---所有图例的字体背景色
//                },
//                tooltip: { //图例提示框，默认不显示
//                     show: true,
//                     color: 'red',
//                },
//                data: [ //----图例内容
//                     {
//                          name: '数量',
//                          icon: 'circle', //----图例的外框样式
//                          textStyle: {
//                               color: '#fff', //----单独设置某一个图例的颜色
//                               //backgroundColor:'black',//---单独设置某一个图例的字体背景色
//                          }
//                     }
//                ],
//           },

//           //--------------   提示框 -----------------
//           tooltip: {
//                show: true, //---是否显示提示框,默认为true
//                trigger: 'item', //---数据项图形触发
//                axisPointer: { //---指示样式
//                     type: 'shadow',
//                     axis: 'auto',

//                },
//                padding: 5,
//                textStyle: { //---提示框内容样式
//                     color: "#fff",
//                },
//           },

//           //-------------  grid区域  ----------------
//           grid: {
//                show: false, //---是否显示直角坐标系网格
//                top: 80, //---相对位置，top\bottom\left\right
//                containLabel: false, //---grid 区域是否包含坐标轴的刻度标签
//                tooltip: { //---鼠标焦点放在图形上，产生的提示框
//                     show: true,
//                     trigger: 'item', //---触发类型
//                     textStyle: {
//                          color: '#666',
//                     },
//                }
//           },

//           //-------------   x轴   -------------------
//           xAxis: {
//                show: true, //---是否显示
//                position: 'bottom', //---x轴位置
//                offset: 0, //---x轴相对于默认位置的偏移
//                type: 'category', //---轴类型，默认'category'
//                //  name:'容量',              //---轴名称
//                nameLocation: 'end', //---轴名称相对位置
//                nameTextStyle: { //---坐标轴名称样式
//                     color: "#fff",
//                     padding: [5, 0, 0, -5], //---坐标轴名称相对位置
//                     fontSize: 30,

//                },
//                nameGap: 15, //---坐标轴名称与轴线之间的距离
//                //nameRotate:270,           //---坐标轴名字旋转

//                axisLine: { //---坐标轴 轴线
//                     show: false, //---是否显示

//                     //------------------- 箭头 -------------------------
//                     symbol: ['none', 'arrow'], //---是否显示轴线箭头
//                     symbolSize: [8, 8], //---箭头大小
//                     symbolOffset: [0, 7], //---箭头位置

//                     //------------------- 线 -------------------------
//                     lineStyle: {
//                          color: '#fff',
//                          width: 1,
//                          type: 'solid',
//                     },
//                },
//                axisTick: { //---坐标轴 刻度
//                     show: true, //---是否显示
//                     inside: true, //---是否朝内
//                     lengt: 3, //---长度
//                     lineStyle: {
//                          //color:'red',          //---默认取轴线的颜色
//                          width: 1,
//                          type: 'solid',
//                     },
//                },
//                axisLabel: { //---坐标轴 标签
//                     show: true, //---是否显示
//                     inside: false, //---是否朝内
//                     rotate: 0, //---旋转角度
//                     margin: 5, //---刻度标签与轴线之间的距离
//                     //color:'red',              //---默认取轴线的颜色
//                     textStyle: {
//                          fontSize: 20,
//                          color: 'white',
//                     },
//                },
//                splitLine: { //---grid 区域中的分隔线
//                     show: false, //---是否显示，'category'类目轴不显示，此时我的X轴为类目轴，splitLine属性是无意义的
//                     lineStyle: {
//                          //color:'red',
//                          //width:1,
//                          //type:'solid',
//                     },
//                },
//                splitArea: { //--网格区域
//                     show: false, //---是否显示，默认false
//                },
//                data: [9, 12, 15, 18, 24, 36, 48, 72, 75, 100, 150, 200, 300], //内容

//           },

//           //----------------------  y轴  ------------------------
//           yAxis: {
//                show: true, //---是否显示
//                position: 'left', //---y轴位置
//                offset: 0, //---y轴相对于默认位置的偏移
//                type: 'value', //---轴类型，默认'category'
//                //  name:'数量',              //---轴名称
//                nameTextStyle: { //---坐标轴名称样式
//                     color: "#fff",
//                     padding: [5, 0, 0, 5], //---坐标轴名称相对位置
//                     fontSize: 30,
//                },
//                nameLocation: 'end', //---轴名称相对位置value

//                nameGap: 15, //---坐标轴名称与轴线之间的距离
//                //nameRotate:270,           //---坐标轴名字旋转

//                axisLine: { //---坐标轴 轴线
//                     show: false, //---是否显示

//                     //------------------- 箭头 -------------------------
//                     symbol: ['none', 'arrow'], //---是否显示轴线箭头
//                     symbolSize: [8, 8], //---箭头大小
//                     symbolOffset: [0, 7], //---箭头位置

//                     //------------------- 线 -------------------------
//                     lineStyle: {
//                          color: '#fff',
//                          width: 1,
//                          type: 'solid',
//                     },
//                },
//                axisTick: { //---坐标轴 刻度
//                     show: true, //---是否显示
//                     inside: true, //---是否朝内
//                     length: 3, //---长度
//                     lineStyle: {
//                          //color:'red',          //---默认取轴线的颜色
//                          width: 1,
//                          type: 'solid',
//                     },
//                },
//                axisLabel: { //---坐标轴 标签
//                     show: true, //---是否显示
//                     inside: false, //---是否朝内
//                     rotate: 0, //---旋转角度
//                     margin: 8, //---刻度标签与轴线之间的距离
//                     //color:'red',              //---默认取轴线的颜色
//                     textStyle: {
//                          fontSize: 20,
//                          color: 'white',
//                     },
//                },
//                splitLine: { //---grid 区域中的分隔线
//                     show: true, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
//                     lineStyle: {
//                          color: '#666',
//                          width: 1,
//                          type: 'dashed', //---类型
//                     },
//                },
//                splitArea: { //--网格区域
//                     show: false, //---是否显示，默认false
//                }
//           },

//           //------------ 内容数据  -----------------
//           series: [{
//                name: '电站数量', //---系列名称
//                type: 'bar', //---类型
//                legendHoverLink: true, //---是否启用图例 hover 时的联动高亮
//                label: {
//                     normal: {
//                          show: true,
//                          position: 'top',
//                          textStyle: {
//                               color: 'white',
//                               fontSize: 20
//                          }
//                     }
//                },
//                itemStyle: {
//                     normal: {
//                          color: new echarts.graphic.LinearGradient(
//                               0, 0, 0, 1,
//                               [{
//                                         offset: 0,
//                                         color: '#bbf618'
//                                    },
//                                    {
//                                         offset: 0.5,
//                                         color: '#18f00e'
//                                    },
//                                    {
//                                         offset: 1,
//                                         color: '#1d56f0'
//                                    }
//                               ]
//                          )
//                     },
//                     emphasis: {
//                          color: new echarts.graphic.LinearGradient(
//                               0, 0, 0, 1,
//                               [{
//                                         offset: 0,
//                                         color: '#2378f7'
//                                    },
//                                    {
//                                         offset: 0.7,
//                                         color: '#2378f7'
//                                    },
//                                    {
//                                         offset: 1,
//                                         color: '#83bff6'
//                                    }
//                               ]
//                          )
//                     }
//                },
//                barWidth: '20', //---柱形宽度
//                barCategoryGap: '20%', //---柱形间距
//                data: [1, 12, 3, 15, 2, 37, 20, 1, 7, 5, 1, 4, 1]
//           }]
//      };

//      // 使用刚指定的配置项和数据显示图表。
//      myChart.setOption(option);
// }

// function cqmap() {
//      var myChart = echarts.init(document.getElementById('ditu'));
//      var uploadedDataURL = "../data/PC/chongqing.json";
//      myChart.showLoading();
//      $.getJSON(uploadedDataURL, function (geoJson) {
//           echarts.registerMap('chongqing', geoJson);
//           myChart.hideLoading();
//           // 各区县的经纬度坐标，不要乱动
//           var geoCoordMap = {
//                '巫溪县': [109.3359, 31.4813],
//                '奉节县': [109.3909, 30.9265],
//                '开州区': [108.4131, 31.2561],
//                '酉阳土家族苗族自治县': [108.8196, 28.8666],
//                '彭水苗族土家族自治县': [108.2043, 29.3994],
//                '云阳县': [108.8306, 31.0089],
//                '城口县': [108.7756, 31.9098],
//                '江津区': [106.2158, 28.9874],
//                '石柱土家族自治县': [108.2813, 30.1025],
//                '巫山县': [109.8853, 31.1188],
//                '涪陵区': [107.3364, 29.6796],
//                '丰都县': [107.8418, 29.9048],
//                '武隆县': [107.655, 29.35],
//                '南川区': [107.1716, 29.1302],
//                '秀山土家族苗族自治县': [109.0173, 28.5205],
//                '黔江区': [108.7207, 29.4708],
//                '合川区': [106.3257, 30.108],
//                '綦江县': [106.6553, 28.8171],
//                '忠县': [107.8967, 30.3223],
//                '梁平县': [107.7429, 30.6519],
//                '巴南区': [106.7322, 29.4214],
//                '潼南区': [105.7764, 30.1135],
//                '永川区': [105.8643, 29.2566],
//                '垫江县': [107.4573, 30.2454],
//                '渝北区': [106.7212, 29.8499],
//                '长寿区': [107.08, 29.87],
//                '大足县': [105.7544, 29.6136],
//                '铜梁县': [106.0291, 29.8059],
//                '荣昌县': [105.5127, 29.4708],
//                '璧山县': [106.2048, 29.5807],
//                '北碚区': [106.5674, 29.8883],
//                '万州区': [106.908, 28.9325],
//                '九龙坡区': [106.3586, 29.4049],
//                '沙坪坝区': [106.3696, 29.6191],
//                '南岸区': [106.6663, 29.5367],
//                '江北区': [106.8311, 29.6191],
//                '大渡口区': [106.4905, 29.4214],
//                '渝中区': [106.5344, 29.5477]
//           }
//           // 各区县的数据，在这里填
//           var data = [{
//                     name: '奉节县',
//                     value: 5
                    
//                },
//                {
//                     name: '巫溪县',
//                     value: 4
//                },
//                {
//                     name: '开州区',
//                     value: 1
//                },
//                {
//                     name: '酉阳土家族苗族自治县',
//                     value: 3
//                },
//                {
//                     name: '彭水苗族土家族自治县',
//                     value: 6
//                },
//                {
//                     name: '云阳县',
//                     value: 2
//                },
//                {
//                     name: '万州区',
//                     value: 7
//                },
//                {
//                     name: '城口县',
//                     value: 4
//                },
//                {
//                     name: '江津区',
//                     value: 10
//                },
//                {
//                     name: '石柱土家族自治县',
//                     value: 4
//                },
//                {
//                     name: '巫山县',
//                     value: 2
//                },
//                {
//                     name: '涪陵区',
//                     value: 5
//                },
//                {
//                     name: '丰都县',
//                     value: 1
//                },
//                {
//                     name: '武隆县',
//                     value: 2
//                },
//                {
//                     name: '南川区',
//                     value: 1
//                },
//                {
//                     name: '秀山土家族苗族自治县',
//                     value: 2
//                },
//                {
//                     name: '黔江区',
//                     value: 3
//                },
//                {
//                     name: '合川区',
//                     value: 7
//                },
//                {
//                     name: '綦江区',
//                     value: 10
//                },
//                {
//                     name: '忠县',
//                     value: 0
//                },
//                {
//                     name: '梁平县',
//                     value: 2
//                },
//                {
//                     name: '巴南区',
//                     value: 8
//                },
//                {
//                     name: '潼南区',
//                     value: 3
//                },
//                {
//                     name: '永川区',
//                     value: 4
//                },
//                {
//                     name: '垫江县',
//                     value: 3
//                },
//                {
//                     name: '渝北区',
//                     value: 17
//                },
//                {
//                     name: '长寿区',
//                     value: 8
//                },
//                {
//                     name: '大足县',
//                     value: 1
//                },
//                {
//                     name: '铜梁县',
//                     value: 5
//                },
//                {
//                     name: '荣昌县',
//                     value: 1
//                },
//                {
//                     name: '璧山县',
//                     value: 3
//                },
//                {
//                     name: '北碚区',
//                     value: 3
//                },
//                {
//                     name: '九龙坡区',
//                     value: 5
//                },
//                {
//                     name: '沙坪坝区',
//                     value: 7
//                },
//                {
//                     name: '南岸区',
//                     value: 4
//                },
//                {
//                     name: '江北区',
//                     value: 16
//                },
//                {
//                     name: '大渡口区',
//                     value: 2
//                },
//                {
//                     name: '渝中区',
//                     value: 2
//                }
//           ];
//           var max = 20,
//                min = 1; // todo
//           var maxSize4Pin = 80,
//                minSize4Pin = 20;

//           var convertData = function (data) {
//                var res = [];
//                for (var i = 0; i < data.length; i++) {
//                     var geoCoord = geoCoordMap[data[i].name];
//                     if (geoCoord) {
//                          res.push({
//                               name: data[i].name,
//                               value: geoCoord.concat(data[i].value)
//                          });
//                     }
//                }
//                return res;
//           };
//           option = {
//                title: {
//                     text: '重庆各地区变电站数量统计',
//                     // subtext: '提示：使用鼠标滚轮放大观看更清晰呦！',
//                     x: 'center',
//                     itemGap: 30,
//                     textStyle: {
//                          fontSize: 30,
//                          fontWeight: 'bolder',
//                          color: '#333'
//                     },
//                     subtextStyle: {
//                          fontSize: 20,
//                          color: '#aaa' // 副标题文字颜色
//                     }
//                },
//                tooltip: {
//                     trigger: 'item',

//                     formatter: function (params) {
//                          if (typeof (params.value)[2] == "undefined") {
//                               return params.name + ' : ' + params.value;
//                          } else {
//                               return params.name + ' : ' + params.value[2];
//                          }
//                     }
//                },
//                legend: {
//                     orient: 'vertical',
//                     y: 'bottom',
//                     x: 'right',
//                     data: ['重庆各区县信访数量TOP5'],
//                     textStyle: {
//                          color: '#333'
//                     }
//                },

//                //http://echarts.baidu.com/option.html#visualMap

//                visualMap: {
//                     show: false,
//                     min: 0,
//                     max: 20,
//                     left: 'left',
//                     top: 'bottom',
//                     text: ['高', '低'], // 文本，默认为数值文本
//                     calculable: true,
//                     seriesIndex: [1],
//                     inRange: {
//                          // color: ['#3B5077', '#031525'] // 蓝黑
//                          // color: ['#ffc0cb', '#800080'] // 红紫
//                          // color: ['#3C3B3F', '#605C3C'] // 黑绿
//                          //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
//                           //color: ['#23074d', '#cc5333'] // 紫红
//                          // color: ['#00467F', '#A5CC82'] // 蓝绿
//                          //color: ['#1488CC', '#2B32B2'] // 浅蓝
//                          //color: ['#00467F', '#A5CC82'] // 蓝绿
//                          color: ['#00467F', '#A5CC82'] // 蓝绿
//                          // color: ['#00467F', '#A5CC82'] // 蓝绿
//                          // color: ['#00467F', '#A5CC82'] // 蓝绿

//                     }
//                },
//                geo: {
//                     // roam: false,
//                     show: true,
//                     map: 'chongqing',
//                     label: {
//                          normal: {
//                               show: false
//                          },
//                          emphasis: {
//                               show: false,
//                          }
//                     },
//                     roam: false,
//                     itemStyle: {
//                          normal: {
//                               areaColor: 'yellow',
//                               borderColor: '#3B5077',
//                          },
//                          emphasis: {
//                               areaColor: 'red', //设置鼠标移动到此地的颜色
//                          }
//                     }
//                },
//                series: [{
//                          name: '重庆',
//                          type: 'scatter',
//                          coordinateSystem: 'geo',
//                          data: convertData(data),
//                          symbolSize: function (val) {
//                               return val[2] / 10;
//                          },
//                          label: {
//                               normal: {
//                                    formatter: '{b}',
//                                    position: 'right',
//                                    show: true, //开关：是否显示全部地区的名字，建议不显示，只显示活跃度top5地区的名字
//                                    textStyle: {
//                                         "fontSize": 20 //设置各个区县文本字体的大小
//                                    }

//                               },
//                               emphasis: {
//                                    show: true
//                               }
//                          },
//                          itemStyle: {
//                               normal: {
//                                    color: '#05C3F9', //设置各个区县文本颜色

//                               },

//                          },

//                     },
//                     {
//                          type: 'map',
//                          map: 'chongqing',
//                          geoIndex: 0,
//                          aspectScale: 0.75, //长宽比
//                          showLegendSymbol: false, // 存在legend时显示
//                          label: {
//                               normal: {
//                                    show: false
//                               },
//                               emphasis: {
//                                    show: false,
//                                    textStyle: {
//                                         color: '#fff'
//                                    }
//                               }
//                          },
//                          roam: true,
//                          itemStyle: {
//                               normal: {
//                                    areaColor: 'white',
//                                    borderColor: '#3B5077',
//                               },
//                               emphasis: {
//                                    areaColor: '#2B91B7'
//                               }
//                          },
//                          animation: true,
//                          data: data
//                     },
//                     {
//                          name: '点',
//                          type: 'scatter',
//                          coordinateSystem: 'geo',
//                          symbol: 'pin',
//                          symbolSize: function (val) {
//                               var a = (maxSize4Pin - minSize4Pin) / (max - min);
//                               var b = minSize4Pin - a * min;
//                               b = maxSize4Pin - a * max;
//                               return a * val[2] + b + 30; //设置气泡的大小
//                          },
//                          label: {
//                               normal: {
//                                    show: true,
//                                    textStyle: {
//                                         color: '#fff', //设置气泡里面文字的颜色
//                                         fontSize: 15, //设置气泡里面文字的大小
//                                    }
//                               }
//                          },
//                          itemStyle: {
//                               normal: {
//                                    color: '#F62157', //设置气泡的颜色
//                               }
//                          },
//                          zlevel: 1,
//                          data: convertData(data),
//                     },
//                     {
//                          name: 'Top 5',
//                          type: 'effectScatter',
//                          coordinateSystem: 'geo',
//                          data: convertData(data.sort(function (a, b) {
//                               return b.value - a.value;
//                          }).slice(0, 5)),
//                          symbolSize: function (val) {
//                               return val[2] / 10;
//                          },
//                          showEffectOn: 'render',
//                          rippleEffect: {
//                               brushType: 'stroke'
//                          },
//                          hoverAnimation: true,
//                          label: {
//                               normal: {
//                                    formatter: '{b}',
//                                    position: 'right',
//                                    show: true
//                               }
//                          },
//                          itemStyle: {
//                               normal: {
//                                    color: '#05C3F9',
//                                    shadowBlur: 10,
//                                    shadowColor: '#05C3F9'
//                               }
//                          },
//                          zlevel: 1
//                     },

//                ]
//           };
//           myChart.setOption(option);
//           window.mysocket.on("dianJian", function (message) {
//                var option1 = myChart.getOption();
//                option1.geo[0].itemStyle.normal.areaColor=message;
//                myChart.setOption(option1)      
//           })
//           myChart.on('click', function (params) {
//                // var option1 = myChart.getOption();
//                // option1.geo[0].itemStyle.normal.areaColor='green';
//                // myChart.setOption(option1)
               
//           });
//      });

// }
// //设置区域前五名
// function setTop5() {
//      var myChart = echarts.init(document.getElementById('top5'));
//      var option = {
//           label: {
//                normal: {
//                     show: true,
//                     textStyle: {
//                          color: '#000',
//                          fontSize: "18"
//                     },
//                     position: 'top'
//                },
//           },
//           tooltip: {
//                trigger: 'axis',
//                axisPointer: {
//                     type: 'shadow'
//                }
//           },
//           grid: {
//                //  x:0,
//                //  y:40,
//                //  x2:10,
//                //  y2: 30,
//                //  containLabel: true
//           },
//           xAxis: {
//                type: 'value',
//                axisLabel: {
//                     textStyle: {
//                          color: 'white',
//                          fontSize: '20',
//                     },
//                     // formatter:function(val){
//                     //      var newval =val/10000;
//                     //      return newval+ "万";
//                     // },
//                }
//           },
//           yAxis: {
//                type: 'category',
//                nameLocation: "left",
//                axisTick: false,
//                // boundaryGap : false,
//                data: ["渝北区", "江北区", "江津区", "巴南区", "长寿区", "沙坪坝区", "万州区"].reverse(),
//                splitLine: {
//                     show: false
//                },
//                axisLabel: {
//                     margin: 80,
//                     textStyle: {
//                          color: 'white',
//                          fontSize: '20',
//                          align: 'left',
//                          baseline: 'middle'
//                     }
//                }
//           },
//           series: [{
//                name: '数量',
//                type: 'bar',
//                data: [17,
//                     16,
//                     10,
//                     8,
//                     8,
//                     7,
//                     7
//                ].reverse(),
//                barWidth: 20,
//                // barGap: 10,
//                // smooth: true,
//                label: {
//                     normal: {
//                          show: true,
//                          position: 'right',
//                          offset: [5, -2],
//                          textStyle: {
//                               color: 'white',
//                               fontSize: 20
//                          }
//                     }
//                },
//                // itemStyle: {
//                //      normal: {
//                //           color: new echarts.graphic.LinearGradient(
//                //                   0, 0, 1, 0,
//                //                   [
//                //                        {offset: 0, color: '#fff'},
//                //                        {offset: 0.5, color: '#5E9DD6'},
//                //                        {offset: 1, color: '#5E9DD6'}
//                //
//                //                   ]
//                //           )
//                //      }
//                // }
//                itemStyle: {
//                     normal: {
//                          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
//                          color: function (params) {

//                               //我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
//                               var colorList = [

//                                    ['#8ab0e3', '#3566ed', '#1184fc'],

//                                    ['#acd9a7', '#6adb64', '#32fc26'],
//                                    ['#bee388', '#c7ed69', '#c0fc2a'],
//                                    ['#dee3be', '#e6ed3e', '#e251fc'],
//                                    ['#31e372', '#b9ed6f', '#7c78fc'],
//                                    ['#e3e0c6', '#edda87', '#fce228'],
//                                    ['#b9e3d4', '#5aede4', '#39fceb'],

//                               ];

//                               var index = params.dataIndex;
//                               if (params.dataIndex >= colorList.length) {
//                                    index = params.dataIndex - colorList.length;
//                               }

//                               return new echarts.graphic.LinearGradient(0, 0, 0, 1,
//                                    [{
//                                              offset: 0,
//                                              color: colorList[index][0]
//                                         },
//                                         {
//                                              offset: 0.5,
//                                              color: colorList[index][1]
//                                         },
//                                         {
//                                              offset: 1,
//                                              color: colorList[index][2]
//                                         }
//                                    ]);
//                          },
//                          barBorderRadius: 5 //柱状角成椭圆形
//                     },

//                }
//           }]
//      }
//      myChart.setOption(option);
// }

// function select_provice(option, provice_name, mycharts) {
//      var len = option.series[0].data.length;
//      for (var i = 0; i < len; i++) {
//           if (option.series[0].data[i].name = provice_name) {
//                option.series[0].data[i].value = 10;
//                mycharts.setOption(option);
//           }
//      }
// }
