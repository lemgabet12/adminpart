 (function($) {
    "use strict";

	/*chart-employment*/
	var chart = c3.generate({
		bindto: '#chart-employment', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 9, 4, 9, 11, 15, 17],
				['data2', 7, 17, 13, 17, 25, 28],
				['data3', 18, 19, 22, 21, 32, 28]
			],
			type: 'line', // default type of chart
			colors: {
				data1: '#556ee6',
				data2:'#f46a6a',
				data3:'#ffa22b'
			},
			names: {
				// name of each serie
				'data1': 'May',
				'data2': 'June',
				'data3': 'July'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['2013', '2014', '2015', '2016', '2017', '2018']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-temperature*/
	var chart = c3.generate({
		bindto: '#chart-temperature', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 8.0, 7.9, 10.5, 15.5, 19.4, 22.5, 26.2, 27.5, 24.3, 19.3, 14.9, 10.6],
				['data2', 4.9, 5.2, 6.7, 9.5, 12.9, 16.2, 18.0, 17.6, 15.2, 11.3, 7.6, 5.8]
			],
			labels: true,
			type: 'line', // default type of chart
			colors: {
				data1:'#556ee6',
				data2: '#199e81'
			},
			names: {
				// name of each serie
				'data1': 'India',
				'data2': 'USA'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-area*/
	var chart = c3.generate({
		bindto: '#chart-area', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 12, 8, 16, 19, 20, 18],
				['data2', 12, 5, 6, 8,10, 13]
			],
			type: 'area', // default type of chart
			colors: {
				data1: '#556ee6',
				data2: '#f46a6a'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-area-spline*/
	var chart = c3.generate({
		bindto: '#chart-area-spline', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 10, 8, 10, 12, 20, 18],
				['data2', 8, 12, 8, 20, 10, 13]
			],
			type: 'area-spline', // default type of chart
			colors: {
				data1:'#f46a6a',
				data2: '#556ee6'
			},
			names: {
				// name of each serie
				'data1': 'data1',
				'data2': 'data2'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-area-spline-sracked*/
	var chart = c3.generate({
		bindto: '#chart-area-spline-sracked', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 12, 9, 16, 19, 20, 18],
				['data2', 8, 8, 6, 8, 10, 13]
			],
			type: 'area-spline', // default type of chart
			groups: [
				[ 'data1', 'data2']
			],
			colors: {
				data1: '#f46a6a',
				data2: '#556ee6'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});
	
	/*chart-area-spline-sracked*/
	var chart = c3.generate({
		bindto: '#chart-sracked', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 0, 9, 16, 19, 30, 25 , 19, 12, 0],
			],
			type: 'area-spline', // default type of chart
			groups: [
				[ 'data1', 'data2']
			],
			colors: {
				data1:'#556ee6'
			},
			names: {
				// name of each serie
				'data1': 'Maximum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,'Aug', 'Sep']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-spline*/
	var chart = c3.generate({
		bindto: '#chart-spline', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 0, 0, 0.2, 0.5, 0.6, 1.2, 2.5, 2.9, 4.5, 4.9, 5.2, 5.8, 6.5, 6.7, 7.4, 4.9, 6.4, 5.4, 10.8, 6.8, 5.2, 11.9],
				['data2', 0, 0, 0, 0, 0.3, 0.2, 0.5, 0.6, 1.5, 1.8, 1.9, 2.5, 1.6, 3.8, 3.9, 3.6, 1.8, 1.8, 1.9, 2.8, 5.4, 7.8, 10.9]
			],
			labels: true,
			type: 'spline', // default type of chart
			colors: {
				data1: '#556ee6',
				data2:'#f46a6a'
			},
			names: {
				// name of each serie
				'data1': 'USA',
				'data2': 'India'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-spline-rotated*/
	var chart = c3.generate({
		bindto: '#chart-spline-rotated', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 12, 7, 8, 6, 8, 9, 12],
				['data2', 8, 10, 10, 9, 7, 10, 8]
			],
			type: 'spline', // default type of chart
			colors: {
				data1: '#556ee6',
				data2: '#f46a6a'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
			},
			rotated: true,
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-step*/
	var chart = c3.generate({
		bindto: '#chart-step', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 10, 15, 10, 18, 19, 15],
				['data2', 7, 7, 5, 7, 9, 12]
			],
			type: 'step', // default type of chart
			colors: {
				data1:'#556ee6',
				data2: '#f46a6a'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-area-step*/
	var chart = c3.generate({
		bindto: '#chart-area-step', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 15, 14, 18, 19, 20,18],
				['data2', 10, 10, 12, 14, 15, 13]
			],
			type: 'area-step', // default type of chart
			colors: {
				'data1':'#f46a6a',
				'data2': '#556ee6'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-bar*/
	var chart = c3.generate({
		bindto: '#chart-bar', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 11, 8, 15, 18, 19, 17],
				['data2', 7, 7, 5, 7, 9, 12]
			],
			type: 'bar', // default type of chart
			colors: {
				data1: '#556ee6',
				data2: '#f46a6a'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
			},
		},
		bar: {
			width: 16
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-bar*/
	var chart = c3.generate({
		bindto: '#chart-monthly', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 11, 8, 35, 18, 19, 17 , 33, 39, 48, 57, 39, 63]
			],
			type: 'bar', // default type of chart
			colors: {
				data1: '#556ee6'
				},
			names: {
				// name of each serie
				'data1': 'Maximum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ,'Jul' , 'Aug', 'Sep' , 'Oct', 'Nov', 'Dec']
			},
		},
		bar: {
			width: 30
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-bar-rotated*/
	var chart = c3.generate({
		bindto: '#chart-bar-rotated', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 11, 8, 15, 18, 19, 17],
				['data2', 7, 7, 5, 7, 9, 12]
			],
			type: 'bar', // default type of chart
			colors: {
				data1: '#f46a6a',
				data2: '#556ee6'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
			},
			rotated: true,
		},
		bar: {
			width: 15
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-bar-stacked*/
	var chart = c3.generate({
		bindto: '#chart-bar-stacked', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 11, 8, 15, 18, 19, 17, 20, 25, 32, 20, 14,20],
				['data2', 7, 7, 5, 7, 9, 12, 4, 6, 2, 5, 2, 8 ]
			],
			type: 'bar', // default type of chart
			groups: [
				[ 'data1', 'data2']
			],
			colors: {
				data1: '#f46a6a',
				data2: '#556ee6'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ,'Jul' , 'Aug', 'Sep' , 'Oct', 'Nov', 'Dec']
			},
		},
		bar: {
			width: 16
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});
	
	/*chart-pie*/
	var chart = c3.generate({
		bindto: '#chart-pie', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 63],
				['data2', 44],
				['data3', 12],
				['data4', 14]
			],
			type: 'pie', // default type of chart
			colors: {
				data1: '#556ee6',
				data2: '#f46a6a',
				data3: '#00e682',
				data4: '#f46a6a'

			},
			names: {
				// name of each serie
				'data1': 'A',
				'data2': 'B',
				'data3': 'C',
				'data4': 'D'
			}
		},
		axis: {
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-pie*/
	var chart = c3.generate({
		bindto: '#chart-pie2', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 63],
				['data2', 40],
				['data3', 12],
				['data4', 14],
				['data5', 20],
				['data6', 29],
			],
			type: 'pie', // default type of chart
			colors: {
				'data1': '#556ee6',
				'data2': '#f46a6a',
				'data3': '#ffa22b',
				'data4': '#00e682',
				'data5': '#00eeff',
				'data6': '#ff382b',
			},
			names: {
				// name of each serie
				'data1': 'A',
				'data2': 'B',
				'data3': 'C',
				'data4': 'D',
				'data5': 'E',
				'data6': 'F'
			}
		},
		axis: {
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-pie*/
	var chart = c3.generate({
		bindto: '#chart-pie3', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 63],
				['data2', 44],
				['data3', 28]
			],
			type: 'pie', // default type of chart
			colors: {
				'data1': '#556ee6',
				'data2': '#f46a6a',
				'data3': '#ffa22b'
			},
			names: {
				// name of each serie
				'data1': 'A',
				'data2': 'B',
				'data3': 'C'
			}
		},
		axis: {
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-pie*/
	var chart = c3.generate({
		bindto: '#chart-pie4', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 58],
				['data2', 45],
				['data3', 20],
				['data4', 14]
			],
			type: 'pie', // default type of chart
			colors: {
				'data1': '#556ee6',
				'data2': '#f46a6a',
				'data3': '#ffa22b',
				'data4': '#00e682'
			},
			names: {
				// name of each serie
				'data1': 'A',
				'data2': 'B',
				'data3': 'C',
				'data4': 'D'
			}
		},
		axis: {
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-donut*/
	var chart = c3.generate({
		bindto: '#chart-donut', // id of chart wrapper
		data: {
			columns: [
					// each columns data
					['data1', 78],
					['data2', 95],
					['data3', 25],
				],
				type: 'donut', // default type of chart
				colors: {
					data1: '#556ee6',
					data2: '#f46a6a',
					data3: '#ffa22b',
				},
				names: {
					// name of each serie
					'data1': 'sales1',
					'data2': 'sales2',
					'data3': 'sales3'
				}
		},
		axis: {
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});
	
	/*chart-donut*/
	var chart = c3.generate({
		bindto: '#chart-donut2', // id of chart wrapper
		data: {
			columns: [
					// each columns data
					['data1', 78],
					['data2', 95],
					['data3', 25],
					['data4', 45],
					['data5', 75],
					['data6', 25],
				],
				type: 'donut', // default type of chart
				colors: {
					'data1': '#556ee6',
					'data2': '#f46a6a',
					'data3': '#ffa22b',
					'data4': '#00e682',
					'data5': '#00eeff',
					'data6': '#ff382b',
				},
				names: {
					// name of each serie
					'data1': 'sales1',
					'data2': 'sales2',
					'data3': 'sales3',
					'data4': 'sales4',
					'data5': 'sales5',
					'data6': 'sales6',
				}
		},
		axis: {
		},

		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-donut*/
	var chart = c3.generate({
		bindto: '#chart-donut3', // id of chart wrapper
		data: {
			columns: [
					// each columns data
					['data1', 78],
					['data2', 95]
				],
				type: 'donut', // default type of chart
				colors: {
					data1: '#556ee6',
					data2: '#f46a6a',
				},
				names: {
					// name of each serie
					'data1': 'sales1',
					'data2': 'sales2'
				}
		},
		axis: {
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});
	
	/*chart-donut*/
	var chart = c3.generate({
		bindto: '#chart-donut4', // id of chart wrapper
		data: {
			columns: [
					// each columns data
					['data1', 78],
					['data2', 95],
					['data3', 25],
					['data4', 45]
				],
				type: 'donut', // default type of chart
				colors: {
					'data1': '#556ee6',
					'data2': '#f46a6a',
					'data3': '#ffa22b',
					'data4': '#00e682',
				},
				names: {
					// name of each serie
					'data1': 'sales1',
					'data2': 'sales2',
					'data3': 'sales3',
					'data4': 'sales4',
				}
		},
		axis: {
		},

		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});
	
	/*chart-scatter*/
	var chart = c3.generate({
		bindto: '#chart-scatter', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 11, 8, 15, 18, 19, 17],
				['data2', 7, 7, 5, 7, 9, 12]
			],
			type: 'scatter', // default type of chart
			colors: {
				data1: 'green',
				data2: 'red'
			},
			names: {
				// name of each serie
				'data1': 'Maximum',
				'data2': 'Minimum'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['May', 'Jun', 'July', 'Aug', 'Sep', 'Oct']
			},
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-combination*/
	var chart = c3.generate({
		bindto: '#chart-combination', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 100, 130, 150, 240, 130, 220],
				['data2', 250, 200, 220, 400, 250, 350],
				['data3', 100, 130, 150, 240, 130, 220]
			],
			type: 'bar', // default type of chart
			types: {
				'data1': "line",
				'data2': "spline",
			},
			groups: [
				[  'data3']
			],
			colors: {
				data1: '#ecb403',
				data2: '#f46a6a',
				data3: '#556ee6'
			},
			names: {
				// name of each serie
				'data1': 'Marketing',
				'data2': 'Development',
				'data3': 'Sales'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['2007-2008', '2009-2010', '2011-2012', '2013-2014', '2015-2016', '2017-2018']
			},
		},
		bar: {
			width: 50
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-wrapper*/
	var chart = c3.generate({
		bindto: '#chart-wrapper', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
				['data2', 3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			],
			labels: true,
			type: 'line', // default type of chart
			colors: {
				data1:'purple',
				data2: 'pink'
			},
			names: {
				// name of each serie
				'data1': 'Tokyo',
				'data2': 'London'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
			},
		},
		legend: {
			show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});
	
	var chart = c3.generate({
		bindto: '#chart-area-spline2', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 0, 8, 10, 12, 20, 18, 15, 10, 18, 10, 20, 10],
				['data2', 0, 12, 8, 20, 10, 13, 10, 20, 10, 19, 8, 19]
			],

			type: 'area-spline', // default type of chart

			colors: {
				data1:'#5797fc',
				data2: '#26eda2'
			},

			names: {
				// name of each serie
				'data1': 'Profit',
				'data2': 'Sales'
			}
		},
		axis: {
			y: {
				padding: {
					bottom: 0,
				},
				show: false,
					tick: {
					outer: false
				}
			},
			x: {
				padding: {
					left: 0,
					right: 0
				},
				show: false
			}
		},
		legend: {
			position: 'inset',
			padding: 0,
			inset: {
				  anchor: 'top-left',
				x: 20,
				y: 8,
				step: 10
			}
		},
		tooltip: {
			format: {
				title: function (x) {
					return '';
				}
			}
		},
		padding: {
			bottom: 0,
			left: -1,
			right: -1
		},
		point: {
			show: false
		}
	});
	
	var chart = c3.generate({
		bindto: '#chart-area-spline1', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 0, 8, 10, 12, 20, 18, 15, 10, 18, 10, 20, 10],
				['data2', 0, 12, 8, 20, 10, 13, 10, 20, 10, 19, 8, 19]
			],
			type: 'area-spline', // default type of chart
			colors: {
				data1:'#4ecc48',
				data2: '#5797fc'
			},
			names: {
				// name of each serie
				'data1': 'data1',
				'data2': 'data2'
			}
		},
		axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb' ,'Mar' ,'Apr' ,'May', 'June', 'July', 'Aug', 'Sep', 'Oct','Nov','Dec']
			},
		},

		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});
	
	var chart = c3.generate({
	bindto: '#chart-visitors',
	padding: {
		bottom: 24
	  },
	  data: {
		  x: 'x',
		  names: {
			  data1: 'views',
			  data2: 'Sales',
			  data3: 'Users',
		  },
		  columns: [
			  ['x', '2018-08-02', '2018-05-09', '2018-05-12', '2018-05-18', '2018-05-21', '2018-05-25', '2018-06-08', '2018-06-11', '2018-06-19', '2018-06-22', '2018-07-12'],
			  ['data1', 22, 28, 21, 46, 48, 38, 48, 52, 28, 57, 32],
			  ['data2', 50, 61, 75, 104, 110, 76, 74, 98, 78, 96, 144],
			  ['data3', 155, 100, 96, 132, 154, 141, 158, 142, 132, 146, 186],
		  ],
		  types: {
			  data1: 'area',
		  }
	  },
	  point: {
		  show: false
	  },
	  legend: {
		  position: 'top',
		  padding: 16
	  },
	  transition: {
		  duration: 0
	  },
	  axis: {
		  y: {
			  tick: {
				  fit: true
			  }
		  },
		  x: {
			  type: 'timeseries',
			  tick: {
				  format: '%d %b'
			  },
			  padding: {
				  top: 10,
				  bottom: 0
			  }
		  }
	  },
	  grid: {
		  y: {
			  show: true
		  }
	  },
	  color: {
		  pattern: [
			  '#c21a1a',
			  '#4ecc48',
			  '#867efc',
		  ]
	  }
	});

	var chart = c3.generate({
		bindto: '#chart-tasks', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 0, 0, 1, 2, 21, 9, 12, 10, 31, 13, 65, 10, 12, 6, 4, 3, 0],
				['data2', 0, 0, 1, 2, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 2, 2, 0],
				['data3', 0, 0, 1, 0, 2, 0, 1, 0, 2, 3, 0, 2, 3, 2, 1, 0, 0]
			],
			classes: {
				data1: 'filled',
				data2: 'filled',
				data3: 'filled'
			},
			type: 'area-spline', // default type of chart
			groups: [
				[ 'data1', 'data2', 'data3']
			],
			colors: {
				data1: '#6963ff',
				data2: '#ff2b88',
				data3: '#ecb403'
			},
			names: {
				// name of each serie
				'data1': 'Profit',
				'data2': 'Sales',
				'data3': 'Gain'
			}
		},
		axis: {
			y: {
				padding: {
					bottom: 0,
				},
				show: false,
					tick: {
					outer: false
				}
			},
			x: {
				padding: {
					left: 0,
					right: 0
				},
				show: false
			}
		},
		legend: {
			position: 'inset',
			padding: 0,
			inset: {
				  anchor: 'top-left',
				x: 20,
				y: 8,
				step: 10
			}
		},
		tooltip: {
			format: {
				title: function (x) {
					return '';
				}
			}
		},
		padding: {
			bottom: 0,
			left: -1,
			right: -1
		},
		point: {
			show: false
		}
	});


	/*chart-donut*/
	var chart = c3.generate({
		bindto: '#chart-donut', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 78],
				['data2', 95],
				['data3', 25],
			],
			type: 'donut', // default type of chart
			colors: {
				data1:'#6574cd',
				data2: '#2bcbba',
				data3: '#f66d9b'
			},
			names: {
				// name of each serie
				'data1': 'sales1',
				'data2': 'sales2',
				'data3': 'sales3'
			}
		},
		axis: {
		},
		legend: {
			show: false,
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	 /*chart-pie*/
	var chart = c3.generate({
		bindto: '#chart-pie', // id of chart wrapper
		data: {
			columns: [
				// each columns data
				['data1', 98],
				['data2', 76],
				['data3', 45],
			],
			type: 'pie', // default type of chart
			colors: {
				data1:'#ffcc29',
				data2: '#17a2b8',
				data3: '#ff7088'
			},
			names: {
				// name of each serie
				'data1': 'profit1',
				'data2': 'profit2',
				'data3': 'profit3'
			}
		},
		axis: {
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
	});

	/*chart-bg-users-1*/
	var chart = c3.generate({
		bindto: '#chart-bg-users-1',
		padding: {
			bottom: -10,
			left: -1,
			right: -1
		},
		size: {
			height: 64
		},
		data: {
			names: {
				data1: 'Visitors online'
			},
			columns: [
				['data1', 10, 50, 100, 50, 40, 35, 70]
			],
			type: 'area-spline'
		},
		legend: {
			show: false
		},
		transition: {
			duration: 0
		},
		point: {
			show: false
		},
		tooltip: {
			format: {
				title: function (x) {
					return '';
				}
			}
		},
		axis: {
			y: {
				padding: {
					bottom: 0,
				},
				show: false,
				tick: {
					outer: false
				}
			},
			x: {
				padding: {
					left: 0,
					right: 0
				},
				show: false
			}
		},
		color: {
			pattern: ['#867efe']
		}
	});

	/*chart-bg-users-2*/
	var chart = c3.generate({
		bindto: '#chart-bg-users-2',
		padding: {
			bottom: -10,
			left: -1,
			right: -1
		},
		size: {
			height: 64
		},
		data: {
			names: {
				data1: 'Total Sales'
			},
			columns: [
				['data1',  10, 30, 20, 60, 70, 85, 75]
			],
			type: 'area-spline'
		},
		legend: {
			show: false
		},
		transition: {
			duration: 0
		},
		point: {
			show: false
		},
		tooltip: {
			format: {
				title: function (x) {
					return '';
				}
			}
		},
		axis: {
			y: {
				padding: {
					bottom: 0,
				},
				show: false,
				tick: {
					outer: false
				}
			},
			x: {
				padding: {
					left: 0,
					right: 0
				},
				show: false
			}
		},
		color: {
			pattern: ['#ff7088']
		}
	});

	/*chart-bg-users-3*/
	var chart = c3.generate({
		bindto: '#chart-bg-users-3',
		padding: {
			bottom: -10,
			left: -1,
			right: -1
		},
		size: {
			height: 64
		},
		data: {
			names: {
				data1: 'Total Projects'
			},
			columns: [
				['data1',  40, 40, 50, 70, 100, 85, 80]
			],
			type: 'area-spline'
		},
		legend: {
			show: false
		},
		transition: {
			duration: 0
		},
		point: {
			show: false
		},
		tooltip: {
			format: {
				title: function (x) {
					return '';
				}
			}
		},
		axis: {
			y: {
				padding: {
					bottom: 0,
				},
				show: false,
				tick: {
					outer: false
				}
			},
			x: {
				padding: {
					left: 0,
					right: 0
				},
				show: false
			}
		},
		color: {
			pattern: ['#fc7303']
		}
	});

	 /*chart-bg-users-4*/
	var chart = c3.generate({
		bindto: '#chart-bg-users-4',
		padding: {
			bottom: -10,
			left: -1,
			right: -1
		},
		size: {
			height: 64
		},
		data: {
			names: {
				data1: 'Today Income'
			},
			columns: [
				['data1',  300, 800, 300, 600, 300, 650, 1000]
			],
			type: 'area-spline'
		},
		legend: {
			show: false
		},
		transition: {
			duration: 0
		},
		point: {
			show: false
		},
		tooltip: {
			format: {
				title: function (x) {
					return '';
				}
			}
		},
		axis: {
			y: {
				padding: {
					bottom: 0,
				},
				show: false,
				tick: {
					outer: false
				}
			},
			x: {
				padding: {
					left: 0,
					right: 0
				},
				show: false
			}
		},
		color: {
			pattern: ['#4ecc48']
		}
	});

	/*chart-browsers*/
	var chart = c3.generate({
	  bindto: '#chart-browsers',
	  data: {
		  columns: [
			  ['Chrome', 36],
			  ['Firefox', 15],
			  ['Safari', 9],
			  ['Edge', 10],
			  ['Opera', 30],
		  ],
		  colors: {
			  Chrome: '#17a2b8',
			  Firefox: '#fc7303',
			  Safari: '#7ea5dd',
			  Edge: '#f999b9',
			  Opera: '#c21a1a',
		  },
		  type: 'donut'
	  },
	  legend: {
		  show: true
	  }
	});

	/*chart-emails*/
	var chart = c3.generate({
		bindto: '#chart-emails',
		padding: {
			bottom: 24,
			top: 0
		},
		data: {
			type: 'donut',
				names: {
				data1: 'Open',
				data2: 'Bounce',
				data3: 'Unsubscribe',
				},
			columns: [
				['data1', 30],
				['data2', 50],
				['data3', 25],
			],
			colors: {
				data1: 'blue',
				data2: 'red',
				data3: 'yellow',
			}
		},
		donut: {
			label: {
				show: false
			}
		},
		legend: {
			show: true
		},
	});
})(jQuery);
