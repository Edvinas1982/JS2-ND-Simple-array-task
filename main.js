// Turime masyvą iš keturių elementų:
// a) data kaip tekstinė eilutė, pvz: ‘2017-07-06 19:59:45’
// b) automobilio numeris, pvz.: ‘LRS123’
// c) automobilio nuvažiuotas kelias metrais (!), pvz.: 5000
// d) automobilio sugaištas laikas sekundėmis (!), pvz.: 118
// Suskaičiuokite automobilio greitį kilometrais per valandą (!) ir kartu su pradiniais
// duomenimis išveskite į html.
// Pasinaudokite document.getElementById() funkcija gauti html elementą ir to
// elemento .innerHTML.
// ✶) Sugalvokite kaip galima būtų gražiau išvesti paskaičiuotą automobilio greitį rodant tik
// sveikus skaičius, t.y. ne 152.54237…, o 153.


var masyvas = ['2017-07-06 19:59:45', 'LRS123', '5000', 118];

console.log(masyvas);

var kelias = masyvas[2];
var laikas = masyvas[3];
var greitis = kelias / laikas;
var greitisKmh = (greitis *360) / 100;

console.log('kelias: ' + kelias + 'm');
console.log('laikas: '+ laikas + 's');

console.log('greitis: ' + greitis + ' m/s');
console.log('greitis km/h: ' + greitisKmh + ' km/h');

// apvalinimas
console.log('greitis suapvalinus: ' + Math.round(greitis) + ' m/s');
console.log('greitis suapvalinus km/h: ' + Math.round(greitisKmh) + ' km/h');

var atstumasDiv = document.getElementById('atstumas');
atstumasDiv.innerHTML = kelias + ' m'; 

var laikasDiv = document.getElementById('laikas');
laikasDiv.innerHTML = laikas + ' s'; 

var greitisDiv = document.getElementById('greitis');
greitisDiv.innerHTML = greitis + ' m/s'; 

var greitisApDiv = document.getElementById('greitisAp');
greitisApDiv.innerHTML = Math.round(greitis) + ' m/s'; 

var greitisApKmhDiv = document.getElementById('greitisApKmh');
greitisApKmhDiv.innerHTML = Math.round(greitisKmh) + ' km/h'; 