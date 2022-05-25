var ctx = document.getElementById('myRadarChart');
var myRadarChart = new Chart(ctx, {
	type: 'radar',
	data: {
		labels: ['おすすめ度', ['業界の', '知識'], 'ヒアリング力', '提案力', ['求人情報の', '充実度']],
		datasets: [
			{
				label: '点数',
				backgroundColor: 'rgba(255,236,0,0.5)',
				borderColor: 'rgba(255,206,0,1)',
				pointBackgroundColor: 'rgba(255,206,0,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(255,206,0,1)',
				hitRadius: 5,
				data: [5, 4, 4, 5, 4],
			},
		],
	},
	options: {
		responsive: true,
		legend: {
			display: false,
		},
		scale: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 5,
				display: false,
			},
			pointLabels: {
				fontColor: '#19CECD',
				fontSize: 12,
			},
		},
	},
});

var ctx2 = document.getElementById('myRadarChart2');
var myRadarChart2 = new Chart(ctx2, {
	type: 'radar',
	data: {
		labels: ['おすすめ度', ['業界の', '知識'], 'ヒアリング力', '提案力', ['求人情報の', '充実度']],
		datasets: [
			{
				label: '点数',
				backgroundColor: 'rgba(255,236,0,0.5)',
				borderColor: 'rgba(255,206,0,1)',
				pointBackgroundColor: 'rgba(255,206,0,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(255,206,0,1)',
				hitRadius: 5,
				data: [5, 4, 5, 4, 5],
			},
		],
	},
	options: {
		responsive: true,
		legend: {
			display: false,
		},
		scale: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 5,
				display: false,
			},
			pointLabels: {
				fontColor: '#19CECD',
				fontSize: 12,
			},
		},
	},
});

var ctx3 = document.getElementById('myRadarChart3');
var myRadarChart3 = new Chart(ctx3, {
	type: 'radar',
	data: {
		labels: ['おすすめ度', ['業界の', '知識'], 'ヒアリング力', '提案力', ['求人情報の', '充実度']],
		datasets: [
			{
				label: '点数',
				backgroundColor: 'rgba(255,236,0,0.5)',
				borderColor: 'rgba(255,206,0,1)',
				pointBackgroundColor: 'rgba(255,206,0,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(255,206,0,1)',
				hitRadius: 5,
				data: [5, 5, 5, 5, 5],
			},
		],
	},
	options: {
		// レスポンシブ指定
		responsive: true,
		legend: {
			display: false,
		},
		scale: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 5,
				display: false,
			},
			pointLabels: {
				fontColor: '#19CECD',
				fontSize: 12,
			},
		},
	},
});
