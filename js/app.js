
//------------------------------------//
//----------- Alert Banner -----------//
//------------------------------------//

const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-container"
  <div class="alert-banner">
     <p><strong>Alert:</strong> You have <strong>2</strong> unread messages</p>
     <button class="alert-banner-close" onclick="closeOut()">X</button>
  </div>
</div>
`

alertBanner.addEventListener('click', e => {
 const element = e.target;
 if(element.classlist.contains("alert-container")){
  alertBanner.style.display = "none"
 }
});

function closeOut() {
    document.getElementsByClassName("alert-container")[0].style.display = 'none';
}



//------------------------------------//
//----------- Line Graph -------------//
//------------------------------------//

const trafficCanvas = document.getElementById('trafficChart');

let trafficData = {
 labels: ['1-5', '6-10', '12-16', '18-22', '23-27', '28-31'],
 datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderColor: "#7477BF",
    fill: true,
    borderWidth: 1,
 }]
};

let trafficOptions = {
   aspectRatio: 2.5,
   animation: {
      duration: 1000
   },
   scales: {
    y: {
       beginAtZero: true
      }
   },
   plugins: {
      legend: {
       display: false
      }
   }
};

let trafficChart = new Chart(trafficCanvas, {
   type: 'line',
   data: trafficData,
   options: trafficOptions
});


//------------------------------------//
//----------- BAR CHART -------------//
//------------------------------------//

const dailyChartCanvas = document.getElementById('daily-chart');

let barData = {
 labels: ['1', '2', '3', '4', '5', '6', '7'],
 datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 900, 1100],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderColor: "#7477BF",
    fill: true,
    borderWidth: 1,
 }]
};

let dayOptions = {
   aspectRatio: 1.5,
   animation: {
      duration: 1000
   },
   scales: {
    y: {
       beginAtZero: true
      }
   },
   plugins: {
      legend: {
       display: false
      }
   }
};

let barChart = new Chart(dailyChartCanvas, {
   type: 'bar',
   data: barData,
   options: dayOptions
});

//--------------------------------------//
//----------- DOUGHNUT CHART ----------//
//------------------------------------//

const doughnutChartCanvas = document.getElementById('doughnut-chart');

let doughnutData = {
 labels: ['Desktop', 'Table', 'Phones'],
 datasets: [{
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      'rgb(115, 11, 201, .6)',
      'rgb(11, 125, 201)',
      'rgb(11, 201, 150, .8)'
    ]
 }]
};

let doughnutOptions = {
  responsive: true,
  aspectRatio: 1.5,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 25,
        fontStyle: 'bold'
      }
    }
  }
};

let doughnutChart = new Chart(doughnutChartCanvas, {
   type: 'doughnut',
   data: doughnutData,
   options: doughnutOptions
});


//--------------------------------------//
//----------- SEND BUTTON ----------//
//------------------------------------//


let alertFormBanner = document.getElementById('form');

alertFormBanner.addEventListener('submit', e => {

 let userFields = document.getElementById('userField');
 let messageFields = document.getElementById('messageField')
 let alertFormBanner = document.getElementById('alert-form');
 
 if (userFields.value.trim() == "" || messageFields.value.trim() == "" ) {
     
     alertFormBanner.innerHTML =
`
<div class="second-alert-container"
     <p><strong>Alert:</strong> Both text fields required</p>
</div>
`
e.preventDefault();
 
  } else {

  alertFormBanner.innerHTML = 
`
<div class="third-alert-container"
     <p>MESSAGE SENT!</p>
</div>
`
e.preventDefault();

  }
 });
   
  






