'use strict';

$(document).ready(function() {

	// Pie chart
	
	var optionsPie = {
		chart: {
			type: 'pie',
			height: 350,
			width: '100%',
			toolbar: {
				show: false
			},
		},
		series: [8, 106, 79], // 示例数据，代表不同年龄段的人数
		labels: ["30-50岁", "50-70岁", "70-90岁"],
		colors: ['#FF4560', '#fdbb38', '#19affb'], // 颜色可以根据需要进行调整
		dataLabels: {
			enabled: true
		},
		legend: {
			position: 'bottom', // 图例位置
			horizontalAlign: 'center', // 图例水平对齐
		},
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 300 // 适应小屏幕
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chartpie = new ApexCharts(document.querySelector("#pie"), optionsPie);
	chartpie.render();

	// Bar chart
	
	var optionsBar = {
		chart: {
			type: 'bar',
			height: 350,
			width: '100%',
			stacked: true,
			toolbar: {
				show: false
			},
		},
		dataLabels: {
			enabled: false
		},
		plotOptions: {
			bar: {
				columnWidth: '45%',
			}
		},
		series: [{
			name: "男性",
			color: '#fdbb38',
			data: [9, 19, 15, 33, 13, 39, 15],
		}, {
			name: "女性",
			color: '#19affb',
			data: [2, 13, 12, 15, 4, 16, 4],
		}],
		labels: ["2017.12", "2018.1", "2018.2", "2018.3", "2018.4", "2018.5", "2018.6"],
		xaxis: {
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		yaxis: {
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
			labels: {
				style: {
					colors: '#777'
				}
			}
		},
		title: {
			text: '',
			align: 'left',
			style: {
				fontSize: '18px'
			}
		}

	}
  
	var chartBar = new ApexCharts(document.querySelector('#bar'), optionsBar);
	chartBar.render();
  
});
