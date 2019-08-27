/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const EventSchema = new mongoose.Schema({
    name: String,
    venue: String,
    description: String,
    date: Date,
    price: Number,
    parentId: mongoose.Schema.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const EventCollection = mongoose.model('Events', EventSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllEvents() {
    return EventCollection.find()
}

function getEvent(eventId) {
    return EventCollection.findById(eventId)
}

function addEvents(newEvent) {
    return EventCollection.insertMany([newEvent])
}

function updateEvent(eventId, updatedEvent) {
    return EventCollection.findByIdAndUpdate({_id: eventId}, updatedEvent)
}

function deleteEvent(eventId) {
    return EventCollection.findByIdAndDelete(eventId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addEvents,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent
}
