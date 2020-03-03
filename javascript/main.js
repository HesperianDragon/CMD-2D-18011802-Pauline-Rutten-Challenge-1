// Function(s) start when page is loaded
window.onload = function() {
    this.getDate()
    this.getSpeed()
    this.getStockValues()
}

function getDate() {
    // Shows current month name and year
    this.updateDate()
    // Updates clock
    setInterval(function() {
        this.updateDate()
    }, 3000)
}

// Get year, month, day,hour and minutes 
function updateDate() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    document.getElementById('month').innerHTML =  monthNames[d.getMonth()] + ' ' + d.getDay() + ' ' + d.getFullYear();
    // Shows current hour and minutes
    document.getElementById('time').innerHTML = d.getHours() + ':' + ('0'+ d.getMinutes()).slice(-2);;
}

// Speed item
function getSpeed() {
    var speedKmPerHour = 0;
    let options = {
        angle: 0.15, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
          length: 0.6, // // Relative to gauge radius
          strokeWidth: 0.035, // The thickness
          color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        
      };
    let target = document.getElementById('speedGauge'); // your canvas element
    let gauge = new Gauge(target).setOptions(options); // create sexy gauge!
    gauge.maxValue = 2000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    setInterval(function() {
        speedKmPerHour = Math.floor(Math.random() * 2000 + 1)
        gauge.set(speedKmPerHour); // set actual value
        this.document.querySelector("#speed").innerHTML = speedKmPerHour + " km/u"
    }, 500)
}

// Progress bars
function getStockValues() {
    let foodStock = 0
    let waterStock = 0
    let fuel = 0;

    let foodElement = document.querySelector('#foodbar').style
    let waterElement = document.querySelector('#waterbar').style
    let fuelElement = document.querySelector('#fuelbar').style

    setInterval(function() {
        foodStock = Math.floor(Math.random() * 100 + 1)
        waterStock = Math.floor(Math.random() * 100 + 1)
        fuel = Math.floor(Math.random() * 100 + 1)

        foodElement.setProperty('--width', foodStock)
        waterElement.setProperty('--width', waterStock)
        fuelElement.setProperty('--width', fuel)
    }, 1000)
}

