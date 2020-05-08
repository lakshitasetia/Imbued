var stress = localStorage.getItem("stress");
var anxiety = localStorage.getItem("anxiety");
var depression = localStorage.getItem("depression");
var stressRate = localStorage.getItem("stressRate");
var anxietyRate = localStorage.getItem("anxietyRate");
var depressionRate = localStorage.getItem("depressionRate");

// document.write("stress = "+stress);
// document.write("anxiety = "+anxiety);
// document.write("depression = "+depression);
var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["Stress","IdSTress","Anxiety","IdAnxiety","Depression","IdDepression"],
		datasets: [{
			label: 'DAS score',
			backgroundColor: "#caf270",
			data: [stressRate, 0, anxietyRate, 0, depressionRate,0],
		}, {
			label: 'Normal',
			backgroundColor: "#45c490",
			data: [0, 9, 0, 9, 0,9, 0, 9],
		}, {
			label: 'mild',
			backgroundColor: "#008d93",
			data: [0, 13, 0, 13, 0,13, 0, 13],
		}, {
			label: 'moderate',
			backgroundColor: "#2e5468",
			data: [0, 20, 0, 20, 0,20, 0, 20],
    },
     {
			label: 'severe',
			backgroundColor: "#CD5C5C",
			data: [0, 27, 0, 27, 0,27, 0, 27],
		}
  ],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});


var stdata=[9,13,20,27];
//console.log(stressdata);

var ctx = document.getElementById("myChart1").getContext('2d');
stinp=[];
if(stressRate>=10 && stressRate<13){
  //console.log('normal');
   stinp=[stressRate,null,null,null];
}else if(stressRate>=13 && stressRate<20){
  //console.log('mild');
  stinp=[null,stressRate,null,null];
}
else if(stressRate>=20 && stressRate<27){
  //console.log('moderate');
  stinp=[null,null,stressRate,null];
}
else if(stressRate>=27){
  //console.log('severe');
  stinp=[null,null,null,stressRate];
}

console.log(stinp);

var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Normal",	"Mild",	"Moderate",	"Severe"],
        datasets: [{
            label: 'Stress', // Name the series
            data:stdata, // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },{
          fillColor: "rgb(255,0,0)",
          data: stinp,
          label: 'Your stress',
          backgroundColor: 'rgb(255,0,0)',
          borderColor: 'rgb(255,0,0)'
        }
      ]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

/* Anxiety   */
var axdata=[9,13,20,27];
//console.log(stressdata);

var ctx = document.getElementById("myChart2").getContext('2d');
axinp=[];
if(anxietyRate>=10 && anxietyRate<13){
  //console.log('normal');
   axinp=[anxietyRate,null,null,null];
}else if(anxietyRate>=13 && anxietyRate<20){
  //console.log('mild');
  axinp=[null,anxietyRate,null,null];
}
else if(anxietyRate>=20 && anxietyRate<27){
  //console.log('moderate');
  axinp=[null,null,anxietyRate,null];
}
else if(anxietyRate>=27){
  //console.log('severe');
  axinp=[null,null,null,anxietyRate];
}

console.log(stinp);

var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Normal",	"Mild",	"Moderate",	"Severe"],
        datasets: [{
            label: 'Anxiety', // Name the series
            data:axdata, // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },{
          fillColor: "rgb(255,0,0)",
          data: axinp,
          label: 'Your anxiety',
          backgroundColor: 'rgb(255,0,0)',
          borderColor: 'rgb(255,0,0)'
        }
      ]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

/* Anxiety   */
var dpdata=[9,13,20,27];
//console.log(stressdata);

var ctx = document.getElementById("myChart3").getContext('2d');
dpinp=[];
if(depressionRate>=10 && depressionRate<13){
  //console.log('normal');
   dpinp=[depressionRate,null,null,null];
}else if(depressionRate>=13 && depressionRate<20){
  //console.log('mild');
  dpinp=[null,depressionRate,null,null];
}
else if(depressionRate>=20 && depressionRate<27){
  //console.log('moderate');
  dpinp=[null,null,depressionRate,null];
}
else if(depressionRate>=27){
  //console.log('severe');
  dpinp=[null,null,null,depressionRate];
}

//console.log(stinp);

var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Normal",	"Mild",	"Moderate",	"Severe"],
        datasets: [{
            label: 'Depression', // Name the series
            data:dpdata, // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },{
          fillColor: "rgb(255,0,0)",
          data: dpinp,
          label: 'Your depression',
          backgroundColor: 'rgb(255,0,0)',
          borderColor: 'rgb(255,0,0)'
        }
      ]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});































// var stressdata=stress.split(',');
// console.log(stressdata);

// var ctx = document.getElementById("myChart1").getContext('2d');


// var myChart1 = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Monday",	"Tuesday",	"Wednesday",	"Thursday",	"Friday",	"Saturday",	"Sunday"],
//         datasets: [{
//             label: 'Stress', // Name the series
//             data:stressdata, // Specify the data values array
//             fill: false,
//             borderColor: '#2196f3', // Add custom color border (Line)
//             backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
//             borderWidth: 1 // Specify bar border width
//         }]},
//     options: {
//       responsive: true, // Instruct chart js to respond nicely.
//       maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
//     }
// });


// var anxietydata=anxiety.split(',');
// console.log(anxietydata);

// var ctx = document.getElementById("myChart2").getContext('2d');


// var myChart2 = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Monday",	"Tuesday",	"Wednesday",	"Thursday",	"Friday",	"Saturday",	"Sunday"],
//         datasets: [{
//             label: 'Anxiety', // Name the series
//             data:anxietydata, // Specify the data values array
//             fill: false,
//             borderColor: '#2196f3', // Add custom color border (Line)
//             backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
//             borderWidth: 1 // Specify bar border width
//         }]},
//     options: {
//       responsive: true, // Instruct chart js to respond nicely.
//       maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
//     }
// });



// var depressiondata=depression.split(',');
// console.log(depressiondata);

// var ctx = document.getElementById("myChart3").getContext('2d');


// var myChart3 = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Monday",	"Tuesday",	"Wednesday",	"Thursday",	"Friday",	"Saturday",	"Sunday"],
//         datasets: [{
//             label: 'Depression', // Name the series
//             data:depressiondata, // Specify the data values array
//             fill: false,
//             borderColor: '#2196f3', // Add custom color border (Line)
//             backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
//             borderWidth: 1 // Specify bar border width
//         }]},
//     options: {
//       responsive: true, // Instruct chart js to respond nicely.
//       maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
//     }
// });
$('#downloadPdf').click(function(event) {
  // get size of report page
  var reportPageHeight = $('#reportPage').innerHeight();
  var reportPageWidth = $('#reportPage').innerWidth();
  
  // create a new canvas object that we will populate with all other canvas objects
  var pdfCanvas = $('<canvas />').attr({
    id: "canvaspdf",
    width: reportPageWidth,
    height: reportPageHeight
  });
  
  // keep track canvas position
  var pdfctx = $(pdfCanvas)[0].getContext('2d');
  var pdfctxX = 0;
  var pdfctxY = 0;
  var buffer = 100;
  
  // for each chart.js chart
  $("canvas").each(function(index) {
    // get the chart height/width
    var canvasHeight = $(this).innerHeight();
    var canvasWidth = $(this).innerWidth();
    
    // draw the chart into the new canvas
    pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
    pdfctxX += canvasWidth + buffer;
    
    // our report page is in a grid pattern so replicate that in the new canvas
    if (index % 2 === 1) {
      pdfctxX = 0;
      pdfctxY += canvasHeight + buffer;
    }
  });
  
  // create new pdf and add our new canvas as an image
  var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
  pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);
  
  // download the pdf
  pdf.save('Report.pdf');
});