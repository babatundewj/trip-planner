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
const issuesApi = require('../models/issues.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const issuesRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

issuesRouter.get('/', (req, res) => {
  issuesApi.getAllIssues().then((allIssues) =>{
    console.log(allIssues)
    res.render('issues/issues',{allIssues})
  })
})

issuesRouter.get('/newIssue', (req, res) => {
  res.render('issues/newIssueForm',{})
})

issuesRouter.get('/:issueId', (req, res) => {
  issuesApi.getIssue(req.params.issueId).then((issue) => {
    res.render('issues/issue',{issue})
  })
})

issuesRouter.get('/:issueId/edit', (req, res) => {
  issuesApi.getIssue(req.params.issueId).then((issue) => {
    res.render('issues/editIssueForm',{issue})
  })
})

issuesRouter.put('/:issueId', (req,res) => {
  // console.log(req.params.issueId)
  // console.log(req.body)
  // issuesApi.updateIssue(req.params.issueId, req.body).then(
  //   () => {res.redirect(`/issues`)}
  // )

  console.log(req.params.issueId)
  console.log(req.body)
  issuesApi.updateIssue(req.params.issueId, req.body)
  .then( () => res.redirect(`/issues`))
})

issuesRouter.post('/', (req,res) => {
  issuesApi.addNewIssue(req.body)
  .then(res.redirect('/issues'))
})

issuesRouter.delete('/:issueId', (req,res) => {
  issuesApi.deleteIssue(req.params.issueId).then(res.redirect('/issues'))
  
})





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
  issuesRouter
}
