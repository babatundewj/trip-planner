// const issuesAPI = require('./issues.js')
const eventsAPI = require('../models/events.js')

// shopAPI.createShop().then((newShopDocument) => {
//     console.log(newShopDocument)
// })

eventsAPI.getAllEvents().then((allIssuesInDocket) => {
    console.log('All documents')
    console.log(allIssuesInDocket)
})

// let sampleObject = 
//     { _id: 5d5c2db8dd5bf87b6926b335,
//     description: 'Finish Assignment',
//     createdAt: 2019-08-20,
//     status: 'In progress',
//     priority: 'High',
//     __v: 0 }
//     issuesAPI.updateIssue(5d5c2db8dd5bf87b6926b335).then((allIssuesInDocket) => {
//         console.log('All documents')
//         console.log(allIssuesInDocket)
//     })

// issuesAPI.deleteManyIssues({description: null}).then((allIssuesInDocket) => {
//     console.log('All documents')
//     console.log(allIssuesInDocket)
// })



// shopAPI.getShop('5d56f754e34b23472916bdbf').then((foundDoc) => {
//     console.log('single document by id')
//     console.log(foundDoc)
// })

// employeeAPI.createEmployee('5d56f754e34b23472916bdbf').then((newEmployeeDocument) => {
//     console.log('new employee')
//     console.log(newEmployeeDocument)

//     employeeAPI.getEmployees().then((allEmployeesinDB) => {
//         console.log('list of employees')
//         console.log(allEmployeesinDB)
//     })
// })

// employeeAPI.getEmployeeByShopId('5d56f754e34b23472916bdbf').then((employeesForShop) => {
//     console.log('employees for shop')
//     console.log(employeesForShop)
// })

// employeeAPI.deleteEmployeeById().then((removeDoc) => {
//     console.log('deleted doc')
//     console.log(removeDoc)
// })