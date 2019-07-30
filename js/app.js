const alert = document.getElementById("alert");


// Alert Banner

alert.innerHTML =
`<div class="alert-banner">
<p><strong>Alert: </strong> You have <strong> 6 </strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

// Alert click event

alert.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
})

// Chart Widgets

const trafficChart = document.getElementById("traffic-chart");

var lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-05', '06-12', '13-19', '20-26', '27-03', '04-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [500, 1000, 750, 1250, 1000, 1250, 1100, 1350, 1600, 2000, 2100],
            backgroundColor: 'rgba(116, 120, 186,0.3)',
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
})

// Daily Traffic Bar Chart

const trafficDaily = document.getElementById('daily-chart');

var myChart = new Chart(trafficDaily, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [50, 75, 150, 100, 200, 175, 75],
            backgroundColor: '#7478Ba',
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});

// Pie Chart

const mobileUsers = document.getElementById('mobile-users');

var pieChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [85, 93, 245],
            backgroundColor: [
                '#69A8B7',
                '#76c284',
                '#7478Ba',
            ]
        }]
    },
    options: {
        layout: {
            padding: {
                right: 90
            },
        },
        legend: {
            position: 'right',
            labels: {
                boxWidth: 14
            }
        }
    }
})
