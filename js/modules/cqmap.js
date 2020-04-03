function cqmap() {
    var myChart = echarts.init(document.getElementById('ditu'));
    var uploadedDataURL = "../data/PC/chongqing.json";
    myChart.showLoading();
    $.getJSON(uploadedDataURL, function (geoJson) {
         echarts.registerMap('chongqing', geoJson);
         myChart.hideLoading();
         // 各区县的经纬度坐标，不要乱动
         var geoCoordMap = {
              '巫溪县': [109.3359, 31.4813],
              '奉节县': [109.3909, 30.9265],
              '开州区': [108.4131, 31.2561],
              '酉阳土家族苗族自治县': [108.8196, 28.8666],
              '彭水苗族土家族自治县': [108.2043, 29.3994],
              '云阳县': [108.8306, 31.0089],
              '城口县': [108.7756, 31.9098],
              '江津区': [106.2158, 28.9874],
              '石柱土家族自治县': [108.2813, 30.1025],
              '巫山县': [109.8853, 31.1188],
              '涪陵区': [107.3364, 29.6796],
              '丰都县': [107.8418, 29.9048],
              '武隆县': [107.655, 29.35],
              '南川区': [107.1716, 29.1302],
              '秀山土家族苗族自治县': [109.0173, 28.5205],
              '黔江区': [108.7207, 29.4708],
              '合川区': [106.3257, 30.108],
              '綦江县': [106.6553, 28.8171],
              '忠县': [107.8967, 30.3223],
              '梁平县': [107.7429, 30.6519],
              '巴南区': [106.7322, 29.4214],
              '潼南区': [105.7764, 30.1135],
              '永川区': [105.8643, 29.2566],
              '垫江县': [107.4573, 30.2454],
              '渝北区': [106.7212, 29.8499],
              '长寿区': [107.08, 29.87],
              '大足县': [105.7544, 29.6136],
              '铜梁县': [106.0291, 29.8059],
              '荣昌县': [105.5127, 29.4708],
              '璧山县': [106.2048, 29.5807],
              '北碚区': [106.5674, 29.8883],
              '万州区': [106.908, 28.9325],
              '九龙坡区': [106.3586, 29.4049],
              '沙坪坝区': [106.3696, 29.6191],
              '南岸区': [106.6663, 29.5367],
              '江北区': [106.8311, 29.6191],
              '大渡口区': [106.4905, 29.4214],
              '渝中区': [106.5344, 29.5477]
         }

         // 各区县的数据，在这里填
         var data = [{
                   name: '奉节县',
                   value: 5
              },
              {
                   name: '巫溪县',
                   value: 4
              },
              {
                   name: '开州区',
                   value: 1
              },
              {
                   name: '酉阳土家族苗族自治县',
                   value: 3
              },
              {
                   name: '彭水苗族土家族自治县',
                   value: 6
              },
              {
                   name: '云阳县',
                   value: 2
              },
              {
                   name: '万州区',
                   value: 7
              },
              {
                   name: '城口县',
                   value: 4
              },
              {
                   name: '江津区',
                   value: 10
              },
              {
                   name: '石柱土家族自治县',
                   value: 4
              },
              {
                   name: '巫山县',
                   value: 2
              },
              {
                   name: '涪陵区',
                   value: 5
              },
              {
                   name: '丰都县',
                   value: 1
              },
              {
                   name: '武隆县',
                   value: 2
              },
              {
                   name: '南川区',
                   value: 1
              },
              {
                   name: '秀山土家族苗族自治县',
                   value: 2
              },
              {
                   name: '黔江区',
                   value: 3
              },
              {
                   name: '合川区',
                   value: 7
              },
              {
                   name: '綦江区',
                   value: 10
              },
              {
                   name: '忠县',
                   value: 0
              },
              {
                   name: '梁平县',
                   value: 2
              },
              {
                   name: '巴南区',
                   value: 8
              },
              {
                   name: '潼南区',
                   value: 3
              },
              {
                   name: '永川区',
                   value: 4
              },
              {
                   name: '垫江县',
                   value: 3
              },
              {
                   name: '渝北区',
                   value: 17
              },
              {
                   name: '长寿区',
                   value: 8
              },
              {
                   name: '大足县',
                   value: 1
              },
              {
                   name: '铜梁县',
                   value: 5
              },
              {
                   name: '荣昌县',
                   value: 1
              },
              {
                   name: '璧山县',
                   value: 3
              },
              {
                   name: '北碚区',
                   value: 3
              },
              {
                   name: '九龙坡区',
                   value: 5
              },
              {
                   name: '沙坪坝区',
                   value: 7
              },
              {
                   name: '南岸区',
                   value: 4
              },
              {
                   name: '江北区',
                   value: 16
              },
              {
                   name: '大渡口区',
                   value: 2
              },
              {
                   name: '渝中区',
                   value: 2
              }
         ];
         var max = 20,
              min = 1; // todo
         var maxSize4Pin = 80,
              minSize4Pin = 20;

         var convertData = function (data) {
              var res = [];
              for (var i = 0; i < data.length; i++) {
                   var geoCoord = geoCoordMap[data[i].name];
                   if (geoCoord) {
                        res.push({
                             name: data[i].name,
                             value: geoCoord.concat(data[i].value)
                        });
                   }
              }
              return res;
         };
         option = {
              title: {
                   text: '重庆各地区变电站数量统计',
                   // subtext: '提示：使用鼠标滚轮放大观看更清晰呦！',
                   x: 'center',
                   itemGap: 30,
                   textStyle: {
                        fontSize: 30,
                        fontWeight: 'bolder',
                        color: '#333'
                   },
                   subtextStyle: {
                        fontSize: 20,
                        color: '#aaa' // 副标题文字颜色
                   }
              },
              tooltip: {
                   trigger: 'item',

                   formatter: function (params) {
                        if (typeof (params.value)[2] == "undefined") {
                             return params.name + ' : ' + params.value;
                        } else {
                             return params.name + ' : ' + params.value[2];
                        }
                   }
              },
              legend: {
                   orient: 'vertical',
                   y: 'bottom',
                   x: 'right',
                   data: ['重庆各区县信访数量TOP5'],
                   textStyle: {
                        color: '#333'
                   }
              },

              //http://echarts.baidu.com/option.html#visualMap

              visualMap: {
                   show: false,
                   min: 0,
                   max: 20,
                   left: 'left',
                   top: 'bottom',
                   text: ['高', '低'], // 文本，默认为数值文本
                   calculable: true,
                   seriesIndex: [1],
                   inRange: {
                        // color: ['#3B5077', '#031525'] // 蓝黑
                        // color: ['#ffc0cb', '#800080'] // 红紫
                        // color: ['#3C3B3F', '#605C3C'] // 黑绿
                        //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                        // color: ['#23074d', '#cc5333'] // 紫红
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        //color: ['#1488CC', '#2B32B2'] // 浅蓝
                        //color: ['#00467F', '#A5CC82'] // 蓝绿
                        color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿

                   }
              },
              // toolbox: {
              //     show: true,
              //     orient: 'vertical',
              //     left: 'right',
              //     top: 'center',
              //     feature: {
              //             dataView: {readOnly: false},
              //             restore: {},
              //             saveAsImage: {}
              //             }
              // },
              geo: {
                   show: true,
                   map: 'chongqing',
                   label: {
                        normal: {
                             show: false
                        },
                        emphasis: {
                             show: false,
                        }
                   },
                   roam: true,
                   itemStyle: {
                        normal: {
                             areaColor: '#031525',
                             borderColor: '#3B5077',
                        },
                        emphasis: {
                             areaColor: 'red', //设置鼠标移动到此地的颜色
                        }
                   }
              },
              series: [{
                        name: '重庆',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function (val) {
                             return val[2] / 10;
                        },
                        label: {
                             normal: {
                                  formatter: '{b}',
                                  position: 'right',
                                  show: true, //开关：是否显示全部地区的名字，建议不显示，只显示活跃度top5地区的名字
                                  textStyle: {
                                       "fontSize": 20 //设置各个区县文本字体的大小
                                  }

                             },
                             emphasis: {
                                  show: true
                             }
                        },
                        itemStyle: {
                             normal: {
                                  color: '#05C3F9', //设置各个区县文本颜色

                             },

                        },

                   },
                   {
                        type: 'map',
                        map: 'chongqing',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                             normal: {
                                  show: false
                             },
                             emphasis: {
                                  show: false,
                                  textStyle: {
                                       color: '#fff'
                                  }
                             }
                        },
                        roam: true,
                        itemStyle: {
                             normal: {
                                  areaColor: 'white',
                                  borderColor: '#3B5077',
                             },
                             emphasis: {
                                  areaColor: '#2B91B7'
                             }
                        },
                        animation: true,
                        data: data
                   },
                   {
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: function (val) {
                             var a = (maxSize4Pin - minSize4Pin) / (max - min);
                             var b = minSize4Pin - a * min;
                             b = maxSize4Pin - a * max;
                             return a * val[2] + b + 30; //设置气泡的大小
                        },
                        label: {
                             normal: {
                                  show: true,
                                  textStyle: {
                                       color: '#fff', //设置气泡里面文字的颜色
                                       fontSize: 15, //设置气泡里面文字的大小
                                  }
                             }
                        },
                        itemStyle: {
                             normal: {
                                  color: '#F62157', //设置气泡的颜色
                             }
                        },
                        zlevel: 1,
                        data: convertData(data),
                   },
                   {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                             return b.value - a.value;
                        }).slice(0, 5)),
                        symbolSize: function (val) {
                             return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                             brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                             normal: {
                                  formatter: '{b}',
                                  position: 'right',
                                  show: true
                             }
                        },
                        itemStyle: {
                             normal: {
                                  color: '#05C3F9',
                                  shadowBlur: 10,
                                  shadowColor: '#05C3F9'
                             }
                        },
                        zlevel: 1
                   },

              ]
         };
         myChart.setOption(option);
         myChart.on('click', function (params) {
              // console.log(option.geo);
         });
    });

}
module.exports = cqmap;