var weather = document.getElementById('submitweather');
var interest = document.getElementById('interest');
var element;
var speed = document.getElementById('requetterrrr');


function find() {
    var weather = document.querySelector('#requetter');
    weather.textContent = '';
    var weatherr = document.querySelector('#requetterr');
    weatherr.textContent = '';
    var weatherrr = document.getElementById('requetterrr');

    weatherrr.textContent = '';
    var city = document.querySelector('#city').value;
    var metric = document.getElementById('metric').value;

    document.getElementById('icons').src = '';
    document.getElementById('iconsn').src = '';
    speed.textContent = '';

    var test = false;
    for (var i = 0; i < country.length; i++) {

        if (country[i] == city) {

            test = true;
            console.log("change over here");
        }

    }

    if (city != "" && metric !== 'kelvin' && test == true) {

        console.log("we are inside our find ");
        var request = new XMLHttpRequest();

        console.log('check out the units :' + metric);

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + metric + '&APPID=47aeca44c67504c5e420a2e2dbd58939', true);

        request.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);


            if (request.status >= 200 && request.status < 400) {

                var test = false;
                console.log("loop over here");
                /**/
                console.log(data);
                var cityis = document.getElementById('cityis');
                cityis.textContent = 'Current Weather for ' + data.name;
                var weather = document.querySelector('#requetter');
                weather.className = 'myclass';
                weather.textContent = 'Weather :' + data.weather[0].description; //+ ' icons :' + data.weather[0].icon;

                document.getElementById('icons').src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                var night = data.weather[0].icon;

                document.getElementById('iconsn').src = 'http://openweathermap.org/img/w/' + night.replace('n', 'd') + '.png';

                var weatherr = document.querySelector('#requetterr');
                weatherr.className = 'myclass';
                weatherr.textContent = 'pressure:' + data.main.pressure;

                speed.className = 'myclass';
                speed.textContent = 'speed :' + data.wind.speed;
                if (metric === 'metric') {
                    weatherrr.className = 'myclass';
                    weatherrr.textContent = 'en celsus SVP tempuratuer :' + data.main.temp + 'C , min :' + data.main.temp_min + 'C max :' + data.main.temp_max + ' C';
                } else {
                    weatherrr.className = 'myclass';
                    weatherrr.textContent = 'tempuratuer :' + data.main.temp + 'F , min :' + data.main.temp_min + 'F, max :' + data.main.temp_max + ' F';
                }

            } else {
                console.log('error');
                document.querySelector('#requette').textContent = 'invalide city check out again'
                setTimeout(function() { document.querySelector('#requette').textContent = "" }, 3000);
                setTimeout(function() { document.querySelector('#requette').textContent = "" }, 3000);
            }

        }


        request.send();

    } else if (city !== '' && metric == 'kelvin') { // ) {
        //console.log('do it here in kelvin');
        var xhr = new XMLHttpRequest();

        console.log('check out the units :' + metric);

        // Open a new connection, using the GET request on the URL endpoint *** KELVIN ARE HERE
        xhr.open('GET', 'http://api.openweathermap.org/data/2.5/find?q=' + city + '&APPID=47aeca44c67504c5e420a2e2dbd58939', true);
        xhr.onload = function() {


            var data = JSON.parse(this.response);
            console.log(data);
            if (xhr.status >= 200 && xhr.status < 400) {

                //console.log(data);
                // console.log('hello im here');
                var cityis = document.getElementById('cityis');
                cityis.textContent = 'Current Weather for ' + data.list[0].name;
                var weather = document.querySelector('#requetter');
                weather.className = 'myclass';
                weather.textContent = 'Weather :' + data.list[0].weather[0].description; //+ ' icons :' + data.weather[0].icon;

                document.getElementById('icons').src = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png';
                var night = data.list[0].weather[0].icon;

                document.getElementById('iconsn').src = 'http://openweathermap.org/img/w/' + night.replace('n', 'd') + '.png';

                var weatherr = document.querySelector('#requetterr');
                weatherr.className = 'myclass';
                weatherr.textContent = 'pressure:' + data.list[0].main.pressure
                weatherrr.className = 'myclass';
                weatherrr.textContent = 'en kelvin SVP tempuratuer :' + data.list[0].main.temp + 'K , min :' + data.list[0].main.temp_min + 'K max :' + data.list[0].main.temp_max + ' K';


                speed.className = 'myclass';
                speed.textContent = 'speed :' + data.list[0].wind.speed;
            }

        }
        xhr.send();
    } else {
        document.querySelector('#requette').textContent = 'fill out the input'
        setTimeout(function() { document.querySelector('#requette').textContent = "" }, 3000);

    }
    console.log('looking for data here');
}
var country = [];

function createpays() {
    event.preventDefault();
    // var xhr = XMLHttpRequest();
    //var url = 'http://localhost:3000/country';
    //xhr.open('POST', url, true);

    //xhr.send();

    var city = document.getElementById('myInput').value;
    country.push(city);
    console.log(country);
}

// var array = { pay1: 'tunis' };

// creatPay(var array) {

//     }
// interest.addEventListener('click', function() {

//     console.log('click fot interet');

// var pie = prompt('insert you intrest country');

//var crap = new Array(200);

// ajout();
// var countries = new Array();
// var country = document.getElementById('interestted').value;

// countries.push(country);

// for (element in countries) {
//     console.log("el :" + countries[element]);
// }
//console.log('first of all is ' + countries[0]);

// for (var i = 0; i < countries.length; i++) {
//     console.log("elemete are " + countries[i]);
// }
//console.log(countries);
//     function pushdata() {
//         var intrest = document.getElementById('interestted').value;
//         array.push(intrest);

//     }

// });

// function ajout() {
//     //var elements = new Array();
//     var el = [];
//     var eleme = document.getElementById('interestted').value;
//     el.push(eleme);
//     console.log(el);
// var data = JSON.parse(el);
//console.log(data);


//}

// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }



// function createpays(data, create) {

//     var pays = document.getElementById('interestted').value;
//     console.log(pays)

// }