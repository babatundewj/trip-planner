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


/* Step 4
 * 
 * TODO: Put all request handlers here
 */



// Request handlers for events
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
    res.send(200)
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
        res.send(landmarks)
    })
})

// issuesRouter.get('/:issueId', (req, res) => {
//   issuesApi.getIssue(req.params.issueId).then((issue) => {
//     res.render('issues/issue',{issue})
//   })
// })

// issuesRouter.get('/:issueId/edit', (req, res) => {
//   issuesApi.getIssue(req.params.issueId).then((issue) => {
//     res.render('issues/editIssueForm',{issue})
//   })
// })

// issuesRouter.put('/:issueId', (req,res) => {
//   // console.log(req.params.issueId)
//   // console.log(req.body)
//   // issuesApi.updateIssue(req.params.issueId, req.body).then(
//   //   () => {res.redirect(`/issues`)}
//   // )

//   console.log(req.params.issueId)
//   console.log(req.body)
//   issuesApi.updateIssue(req.params.issueId, req.body)
//   .then( () => res.redirect(`/issues`))
// })

// issuesRouter.post('/', (req,res) => {
//   issuesApi.addNewIssue(req.body)
//   .then(res.redirect('/issues'))
// })

// issuesRouter.delete('/:issueId', (req,res) => {
//   issuesApi.deleteIssue(req.params.issueId).then(res.redirect('/issues'))
  
// })





/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  tripRouter,
  eventRouter
}
