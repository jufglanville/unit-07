// ********************************************* //
// ----------------- Variables ----------------- //
// ********************************************* //

const btnBell = document.getElementById("bell");
const notification = document.getElementById("notification");
const badge = document.getElementById("badge");
const alert = document.getElementById("alert");
const trafficSelect = document.getElementsByClassName("traffic-nav");
const trafficChart = document.getElementById("traffic-chart");
const chartDataValues = [
    [40, 50, 30, 50, 120, 140, 190, 200, 170, 100, 80, 60],
    [1000, 800, 1100, 900, 1100, 300, 350],
    [5000, 4500, 5000, 5500, 5800, 5300, 4900, 5700, 6000, 5500, 4900],
    [19000, 35000, 20000, 30000, 40000, 30000, 25000, 30000, 23000, 40000, 30000,38000]
];
const chartDataLabels = [
    ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '00'],
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    ['16-22', '23-29', '30-05', '06-12', '13-19', '20-26', '27-03', '04-10', '11-17', '18-24', '25-31'],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
];
const addData = (chart, data, labels) => {
    chart.data.datasets[0].data = data;
    chart.data.labels = labels;
    chart.update();
};
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

const input = document.getElementById("dashboard-search");

// ********************************************* //
// ---------- Bell Notification Modal ---------- //
// ********************************************* //

// Notification Modal Text
notification.innerHTML = `
<div id="notificationModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h3>Notifications</h3>
        <div class="activity-container">
            <img src="images/member-1.jpg" alt="User Avatar" class="profile-image">
            <div class="members-text">
                <p>Victoria Chambers commented on YourApp's SEO Tips</p>
                <p>4 hours ago</p>
            </div>
        </div>
        <div class="activity-container">
            <img src="images/member-2.jpg" alt="User Avatar" class="profile-image">
            <div class="members-text">
                <p>Dale Byrd liked the post Facebook's Changes for 2019</p>
                <p>5 hours ago</p>
            </div>
        </div>
    </div>
</div>
`
// Setting Notification Modal Variables
const notificationModal = document.getElementById("notificationModal");
const notificationClose = document.getElementsByClassName("close")[0];

// Open Notification Modal
btnBell.onclick = function() {
    notificationModal.style.display = "block";
    badge.style.opacity = '0';
}

// Close Notification Modal
notificationClose.onclick = function() {
    notificationModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == notificationModal) {
        notificationModal.style.display = "none";
    }
}


// ********************************************* //
// ---------------- Alert Banner --------------- //
// ********************************************* //

alert.innerHTML =
`<div class="alert-banner">
    <p><strong>Alert: </strong> You have <strong> 6 </strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`
// Close Alert Banner
alert.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
})

// ********************************************* //
// ----------- Graphs and Tables --------------- //
// ********************************************* //

//------ Line Graph Selection and Updating ------//

trafficSelect[0].addEventListener("click", function(e){
    let currentActive = document.getElementsByClassName("active")[0];
    currentActive.classList.remove("active");
    e.target.classList.add("active");
    currentActive = e.target.classList[1];
    if (currentActive === 'hourly'){
        addData(lineChart, chartDataValues[0], chartDataLabels[0]);
    } else if (currentActive === 'daily'){
        addData(lineChart, chartDataValues[1], chartDataLabels[1]);
    } else if (currentActive === 'weekly'){
        addData(lineChart, chartDataValues[2], chartDataLabels[2]);
    } else if (currentActive === 'monthly'){
        addData(lineChart, chartDataValues[3], chartDataLabels[3]);
    }
});

var lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-05', '06-12', '13-19', '20-26', '27-03', '04-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [900, 1300, 1100, 1250, 1150, 1350, 1000, 1100, 1400, 1300, 1500],
            backgroundColor: 'rgba(116, 120, 186,0.3)',
            lineTension: 0,
            pointBackgroundColor: '#fff',
            pointRadius: 5,
            pointHitRadius: 20,
            pointBorderColor: '#7478Ba',
            borderColor: '#7478Ba',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: {
                ticks: {
                    stepSize: 500
                }
            }
        }
    }
})


//----------- Daily Traffic Bar Chart -----------//

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

//------------- Mobile Users Donut --------------//

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
        legend: {
            position: 'right',
            labels: {
                boxWidth: 14,
                fontFamily: "'Roboto', sans-serif",
                padding: 20,
                fontStyle: 'bold',
                fontColor: '#9d9c9c'
            }
        }
    }
})


// ********************************************* //
// -------- Message User Validation ------------ //
// ********************************************* //

function validateEmail(email) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
}

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        window.alert('Please fill out user and message fields before sending');
    } else if (user.value === "") {
        window.alert('Please fill out user field before sending');
    } else if (validateEmail(user.value) === false){
        window.alert('Please enter a valid email address');
    } else if (message.value === "") {
        window.alert('Please fill out message field before sending');
    } else {
        window.alert('Message successfully send to ' + user.value);
    }
});


// ********************************************* //
// -------- Awesomplete Autofill Array --------- //
// ********************************************* //

new Awesomplete(input, {
	list: [
        "Jane Davis", 
        "Victoria Chambers", 
        "Dale Byrd", 
        "Dawn Wood", 
        "Dan Oliver"
    ]
});

new Awesomplete(user, {
	list: [
        "victoria.chambers80@example.com", 
        "dale.byrd52@example.com", 
        "dawn.wood16@example.com", 
        "dan.oliver82@example.com"
    ]
});


// ********************************************* //
// --------------- Local Storage --------------- //
// ********************************************* //

const settings = document.getElementsByClassName('settings');
const timezone = document.getElementById('timezone');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const emailNot = document.getElementById('email-notification');
const publicPro = document.getElementById('public-profile');



// On window load get local storage
window.addEventListener('load', () => {
    let emailSet = localStorage.getItem('emailNot');
    let publicSet = localStorage.getItem('publicPro');
    let getTime = localStorage.getItem('timezone');

    // Sets Retrieved Email Notification Settings
    if (emailSet === 'true') {
        document.getElementById('email-notification').checked = 'true';
    }

    // Sets Retrieved Public Profile Settings
    if (publicSet === 'true') {
        document.getElementById('public-profile').checked = 'true';
    } 

    if (getTime === null) {
        timezone.firstElementChild.innerHTML = "Select a Timezone";
    } else {
        timezone.firstElementChild.innerHTML = getTime;
    }
})




// Save button sets local storage
save.addEventListener('click', function() {

    // Saves Email Notification settings
    if (document.getElementById('email-notification').checked === false) {
        localStorage.setItem('emailNot', 'false');
    } else {
        localStorage.setItem('emailNot', 'true');
    }

    // Saves Public Profile settings
    if (document.getElementById('public-profile').checked === false) {
        localStorage.setItem('publicPro', 'false');
    } else {
        localStorage.setItem('publicPro', 'true');
    }

    //Saves the Timezone Settings
    localStorage.setItem('timezone', timezone.value);

    window.alert('Your settings have been sucessfully saved!');
});


// Cancel Button resets all Settings
cancel.addEventListener('click', function() {
        if(confirm('Are you sure? This will remove all settings!')) {
            localStorage.setItem('publicPro', 'false');
            localStorage.setItem('emailNot', 'false');
            localStorage.setItem('timezone', 'Select a Timezone');
            location.reload();
        }
})