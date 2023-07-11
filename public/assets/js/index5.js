function salesreport() {
	'use strict'
	/* line chart */

	var myCanvas = document.getElementById("lineChart");
	myCanvas.height="106";

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 380);
	gradientStroke1.addColorStop(0, 'rgba(244, 106, 106, 0.3)');

	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 280);
	gradientStroke2.addColorStop(0, hexToRgba(myVarVal, 0.7));

    var myChart = new Chart( myCanvas, {
		type: 'line',
		data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
				label: 'Rents',
				data: [0, 94, 141, 60, 45, 75, 120,],
				backgroundColor: gradientStroke1,
				borderColor: '#f46a6a',
				pointBackgroundColor:'#f46a6a',
				pointHoverBackgroundColor:gradientStroke1,
				pointBorderColor :'#f46a6a',
				pointHoverBorderColor :gradientStroke1,
				pointBorderWidth :3,
				pointRadius :3,
				pointHoverRadius :2,
				borderWidth: 2
            }, {
				label: "Leases",
				data: [0, 60, 40, 109, 60, 50, 140 ],
				backgroundColor: gradientStroke2,
				borderColor: myVarVal,
				pointBackgroundColor: myVarVal,
				pointHoverBackgroundColor: gradientStroke2,
				pointBorderColor: myVarVal,
				pointHoverBorderColor: gradientStroke2,
				pointBorderWidth: 3,
				pointRadius: 3,
				pointHoverRadius: 2,
				borderWidth: 2
			}
			]
        },
		options: {
			responsive: true,
			maintainAspectRatio: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: true,
				labels: {
					usePointStyle: false,
					fontColor: "#a7b4c9"
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#a7b4c9",
					 },
					display: true,
					gridLines: {
						display: true,
						color:'rgba(142, 156, 173,0.1)',
						zeroLineColor: 'rgba(142, 156, 173,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#a7b4c9",
					 },
					display: true,
					gridLines: {
						display: true,
						color:'rgba(142, 156, 173,0.1)',
						zeroLineColor: 'rgba(142, 156, 173,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: 'transparent'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* line chart end */

}
