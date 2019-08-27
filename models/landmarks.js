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
const LandmarkSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    description: String,
    price: Number,
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const LandmarkCollection = mongoose.model('Landmarks', LandmarkSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllLandmarks() {
    return LandmarkCollection.find()
}

function getLandmark(placeId) {
    return LandmarkCollection.findById(placeId)
}

function addLandmark(newPlace) {
    return LandmarkCollection.insertMany([newPlace])
}

function updateLandmark(placeId, updatedPlace) {
    return LandmarkCollection.findByIdAndUpdate({_id: placeId}, updatedPlace)
}

function deleteLandmark(placeId) {
    return LandmarkCollection.findByIdAndDelete(placeId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addLandmark,
  deleteLandmark,
  getLandmark,
  getAllLandmarks,
  updateLandmark
}
