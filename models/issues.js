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
const IssueSchema = new mongoose.Schema({
    description: String,
    createdAt: Date,
    status: String,
    priority: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const IssueCollection = mongoose.model('Issues', IssueSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllIssues() {
    return IssueCollection.find()
}

function getIssue(issueId) {
    return IssueCollection.findById(issueId)
}

function addNewIssue(newIssue) {
    return IssueCollection.insertMany([newIssue])
}

function updateIssue(issueId, updatedIssue) {
    return IssueCollection.findByIdAndUpdate({_id: issueId}, updatedIssue)
}

function deleteIssue(issueId) {
    return IssueCollection.findByIdAndDelete(issueId)
}

function deleteManyIssues(condition) {
    return IssueCollection.deleteMany(condition)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewIssue,
  deleteIssue,
  deleteManyIssues,
  getAllIssues,
  getIssue,
  updateIssue
}
