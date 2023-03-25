const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')

const app = express()

const datenSchema = new mongoose.Schema({
  kontinent: String,
  land: String,
  hauptstadt: String,
})

const Welt = mongoose.model('country', datenSchema)

app.use(cors())

mongoose.set('strictQuery', false)

mongoose
  .connect(
    `mongodb+srv://LA1304-server:DKyec3UHULGCMFSG@freecluster.vquf0xo.mongodb.net/LA1304?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Connected to database')
  })

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/africa', (req, res) => {
  Welt.find(
    { Kontinent: 'Afrika' },
    { Land: 1, Hauptstadt: 1, _id: 0 },
    (err, data) => {
      res.json(data)
    }
  ).catch((err) =>
    console.log('Fehler beim Abrufen von Daten aus der Datenbank:', err)
  )
})

app.get('/america', (req, res) => {
  Welt.find(
    { Kontinent: 'Amerika' },
    { Land: 1, Hauptstadt: 1, _id: 0 },
    (err, data) => {
      res.json(data)
    }
  ).catch((err) =>
    console.log('Fehler beim Abrufen von Daten aus der Datenbank:', err)
  )
})

app.get('/asia', (req, res) => {
  Welt.find(
    { Kontinent: 'Asien' },
    { Land: 1, Hauptstadt: 1, _id: 0 },
    (err, data) => {
      res.json(data)
    }
  ).catch((err) =>
    console.log('Fehler beim Abrufen von Daten aus der Datenbank:', err)
  )
})

app.get('/europe', (req, res) => {
  Welt.find(
    { Kontinent: 'Europa' },
    { Land: 1, Hauptstadt: 1, _id: 0 },
    (err, data) => {
      res.json(data)
    }
  ).catch((err) =>
    console.log('Fehler beim Abrufen von Daten aus der Datenbank:', err)
  )
})

app.get('/world', (req, res) => {
  Welt.find({}, { Land: 1, Hauptstadt: 1, _id: 0 }, (err, data) => {
    res.json(data)
  }).catch((err) =>
    console.log('Fehler beim Abrufen von Daten aus der Datenbank:', err)
  )
})

app.listen(80, () => {
  console.log(`Example app listening on port 80`)
})
