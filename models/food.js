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
const FoodSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    cuisine: String,
    venueType: String,
    price: Number,
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */

const FoodCollection = mongoose.model('Foods', FoodSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllDining() {
    return FoodCollection.find()
}

function getDining(diningId) {
    return FoodCollection.findById(diningId)
}

function addDining(newIssue) {
    return FoodCollection.insertMany([newIssue])
}

function updateDining(diningId, updatedIssue) {
    return FoodCollection.findByIdAndUpdate({_id: diningId}, updatedIssue)
}

function deleteDining(diningId) {
    return FoodCollection.findByIdAndDelete(diningId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addDining,
  deleteDining,
  getAllDining,
  getDining,
  updateDining
}
