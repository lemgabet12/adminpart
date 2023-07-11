function sales() {
	'use strict'

 /* chartjs (#sales-status) */
 var ctx = $('#sales-status');
	ctx.height(285);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["canada", "spain", "japan", "usa", "germany", "paris"],
			type: 'line',
			datasets: [{
				label: "Rented areas",
				data: [678, 723, 543, 834, 295, 935, 382, 756, 486, 386, 678, 780],
				backgroundColor: 'rgba(244, 106, 106, 0.1)',
				borderColor: '#f46a6a',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#f46a6a',
			}, {
				label: "Lease areas",
				data: [250, 320, 260, 410, 690, 760, 380, 425, 630, 724, 586, 960],
				backgroundColor: hexToRgba(myVarVal, 0.1),
				borderColor: myVarVal,
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: myVarVal,
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
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
					fontColor: "#8492a6",
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#8492a6",
					 },
					display: true,
					gridLines: {
						display: true,
						zeroLineColor: 'rgba(142, 156, 173,0.1)',
						color:'rgba(142, 156, 173,0.1)',
						drawBorder: false,
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: '#8492a6'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#8492a6",
					 },
					display: true,
					gridLines: {
						display: false,
						zeroLineColor: 'rgba(142, 156, 173,0.1)',
						color:'rgba(142, 156, 173,0.1)',
						drawBorder: false,
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: '#8492a6'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* chartjs (#sales-status) closed */

}
