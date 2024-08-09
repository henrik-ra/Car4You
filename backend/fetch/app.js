const express = require('express');
const app = express();
const path = require('path');
const { getMaxListeners } = require('process');

let cars = [
    { id: "1", verfügbar: true, standort: "Kaefertal", marke: "Mercedes", modell: "C-Klasse", autofarbe: "weiss", preis: 95, ps: 306, motor: "Verbrenner", stars: 4.5 },
    { id: "2", verfügbar: true, standort: "Kaefertal", marke: "Mercedes", modell: "E-Klasse", autofarbe: "schwarz", preis: 110, ps: 245, motor: "Verbrenner", stars: 4.5 },
    { id: "3", verfügbar: true, standort: "Kaefertal", marke: "Mercedes", modell: "S-Klasse", autofarbe: "grau", preis: 150, ps: 435, motor: "Verbrenner", stars: 5 },
    { id: "4", verfügbar: true, standort: "Kaefertal", marke: "Mercedes", modell: "E63 AMG", autofarbe: "schwarz", preis: 160, ps: 571, motor: "Verbrenner", stars: 5 },
    { id: "5", verfügbar: true, standort: "Kaefertal", marke: "BYD", modell: "Han", autofarbe: "schwarz", preis: 75, ps: 517, motor: "Elektro", stars: 4.5 },
    { id: "6", verfügbar: true, standort: "Kaefertal", marke: "BYD", modell: "Tang", autofarbe: "grau", preis: 65, ps: 220, motor: "Elektro", stars: 4 },
    { id: "7", verfügbar: true, standort: "HD Kirchheim", marke: "BYD", modell: "Atto 3", autofarbe: "weiss", preis: 40, ps: 170, motor: "Elektro", stars: 3.5 },
    { id: "8", verfügbar: false, standort: "HD Kirchheim", marke: "Porsche", modell: "GT3 RS", autofarbe: "schwarz", preis: 180, ps: 525, motor: "Verbrenner", stars: 5 },
    { id: "9", verfügbar: true, standort: "HD Kirchheim", marke: "Porsche", modell: "Panamera GTS", autofarbe: "grau", preis: 120, ps: 480, motor: "Verbrenner", stars: 5 },
    { id: "10", verfügbar: true, standort: "HD Kirchheim", marke: "Porsche", modell: "Taycan Turbo S", autofarbe: "weiss", preis: 110, ps: 761, motor: "Elektro", stars: 5 },
    { id: "11", verfügbar: false, standort: "HD Kirchheim", marke: "Mercedes", modell: "E63 AMG", autofarbe: "schwarz", preis: 160, ps: 571, motor: "Verbrenner", stars: 5 },
] // kein ü verwendens

// Funktion nicht mehr im Sprint
// let users = [
//     { email: "hr@gmail.com", passwort: "wasd", vorname: "Henrik", nachname: "Rathai", wohnort: "Hirschberg", strasse: "Bahnhofstraße", hausnummer: "8a" },
//     { email: "hr2@gmail.com", passwort: "wasd2", vorname: "Jan", nachname: "Rathai", wohnort: "Hirschberg", strasse: "Bahnhofstraße", hausnummer: "17" },
//     { email: "hr3@gmail.com", passwort: "wasd3", vorname: "Thomas", nachname: "Müller", wohnort: "Mannheim", strasse: "Bahnhofstraße", hausnummer: "34" },
//     { email: "hr4@gmail.com", passwort: "wasd4", vorname: "Günther", nachname: "Armani", wohnort: "Heidelberg", strasse: "Bahnhofstraße", hausnummer: "4" },
// ]

// Funktion nicht mehr im Sprint
// let mitarbeiter = [
//     { username: "m1", passwort: "wasd", vorname: "Meinhard", nachname: "Drabant", abteilung: "DHBW" },
//     { username: "m2", passwort: "1234", vorname: "Tobias", nachname: "Günni", abteilung: "DHBW" },
//     { username: "m3", passwort: "2345", vorname: "Wolfgang", nachname: "Corsten", abteilung: "DHBW" },
// ]

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next();
});

app.post("/api/cars", (req, res) => {
    cars.push({ id: req.query.id, verfügbar: req.query.verfügbar, standort: req.query.standort, marke: req.query.marke, modell: req.query.modell, autofarbe: req.query.autofarbe, preis: req.query.preis, ps: req.query.ps, motor: req.query.motor, stars: req.query.stars });
    res.send(200);
})
app.get('/api/cars', (req, res) => res.json(cars));
app.get('/api/cars/:carId', (req, res) => {
    const matchingcars = cars.filter(car => car.id === req.params.carId);
    if (matchingcars.length <= 0) {
        res.send(404);
    }
    res.json(matchingcars[0])
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


module.exports = app;