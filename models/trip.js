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
const TripSchema = new mongoose.Schema({
    destination: String,
    startDate: Date,
    endDate: Date,
    budget: Number,
    purpose: String,
    events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Events'}]
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */

const TripCollection = mongoose.model('Trips', TripSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllTrips() {
    return TripCollection.find()
}

function getTrip(id) {
    return TripCollection.findById(id)
}

function addTrip(newTrip) {
    return TripCollection.insertMany([newTrip])
}

function updateTrip(id, updatedTrip) {
    return TripCollection.findByIdAndUpdate({_id: id}, updatedTrip)
}

function deleteTrip(id) {
    return TripCollection.findByIdAndDelete(id)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addTrip,
  deleteTrip,
  getAllTrips,
  getTrip,
  updateTrip
}
