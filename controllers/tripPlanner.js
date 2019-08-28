/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const landmarksAPI = require('../models/landmarks.js')
const eventsAPI = require('../models/events.js')
const foodAPI = require('../models/food.js')
const tripAPI = require('../models/trip.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const tripRouter = express.Router()
const eventRouter = express.Router()
const landmarksRouter = express.Router()
const foodRouter = express.Router()


/* Step 4
 * 
 * TODO: Put all request handlers here
 */



// Request handlers for events

eventRouter.get('/', (req,res) => {
  res.render('home',{})
})

eventRouter.get('/events', (req, res) => {
  eventsAPI.getAllEvents().then((events) => {
    res.render('events/events', {events})
  })
})

eventRouter.get('/events/new', (req,res) => {
  res.render('events/newEntry.hbs',{})
})

eventRouter.get('/events/:id', (req,res) => {
  eventsAPI.getEvent(req.params.id).then((event) => {
    res.render('events/event', {event})
  })
})

eventRouter.get('/events/:id/edit', (req,res) => {
  eventsAPI.getEvent(req.params.id).then((event) => {
    res.render('events/editEvent',{event})
  })
})

eventRouter.post('/events', (req, res) => {
  eventsAPI.addEvents(req.body).then(() => {
    res.redirect('/events')
  })
})

eventRouter.put('/events/:id', (req, res) => {
  eventsAPI.updateEvent(req.params.id, req.body).then(() =>{
    res.redirect('/events')
  })
})

eventRouter.delete('/events/:id', (req, res) => {
  eventsAPI.deleteEvent(req.params.id).then(() =>{
    res.redirect('/events')
  })
})


// Request handlers for landmarks
landmarksRouter.get('/landmarks', (req,res) => {
    landmarksAPI.getAllLandmarks().then((landmarks) => {
        res.render('landmarks/landmarks',{landmarks})
    })
})

landmarksRouter.get('/landmarks/new', (req,res) => {
  res.render('landmarks/newEntry', {})
})

landmarksRouter.get('/landmarks/:id', (req,res) => {
  landmarksAPI.getLandmark(req.params.id).then((landmark) => {
    res.render('landmarks/landmark',{landmark})
  })
})

landmarksRouter.get('/landmarks/:id/edit', (req,res) => {
  landmarksAPI.getLandmark(req.params.id).then((landmark) => {
    res.render('landmarks/editEntry',{landmark})
  })
})

landmarksRouter.post('/landmarks', (req,res) => {
  landmarksAPI.addLandmark(req.body).then(() => {
    res.redirect('/landmarks')
  })
})

landmarksRouter.put('/landmarks/:id', (req, res) => {
  landmarksAPI.updateLandmark(req.params.id, req.body).then(() =>{
    res.redirect('/landmarks')
  })
})

landmarksRouter.delete('/landmarks/:id', (req, res) => {
  landmarksAPI.deleteLandmark(req.params.id).then(() =>{
    res.redirect('/landmarks')
  })
})

// Request handlers for foods
foodRouter.get('/foods', (req,res) => {
  foodAPI.getAllDining().then((foods) => {
      res.render('foods/foods',{foods})
  })
})

foodRouter.get('/foods/new', (req,res) => {
  res.render('foods/newEntry', {})
})

foodRouter.get('/foods/:id', (req,res) => {
  foodAPI.getDining(req.params.id).then((food) => {
    res.render('foods/food',{food})
  })
})

foodRouter.get('/foods/:id/edit', (req,res) => {
  foodAPI.getDining(req.params.id).then((food) => {
    res.render('foods/editEntry',{food})
  })
})

foodRouter.post('/foods', (req,res) => {
  foodAPI.addDining(req.body).then(() => {
    res.redirect('/foods')
  })
})

foodRouter.put('/foods/:id', (req, res) => {
  foodAPI.updateDining(req.params.id, req.body).then(() =>{
    res.redirect('/foods')
  })
})

foodRouter.delete('/foods/:id', (req, res) => {
  foodAPI.deleteDining(req.params.id).then(() =>{
    res.redirect('/foods')
  })
})

module.exports = {
  tripRouter,
  eventRouter,
  landmarksRouter,
  foodRouter
}
