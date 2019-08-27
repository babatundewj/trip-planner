const landmarksAPI = require('../models/landmarks.js')
const tripAPI = require('../models/trip.js')

// shopAPI.createShop().then((newShopDocument) => {
//     console.log(newShopDocument)
// })

// eventsAPI.getAllEvents().then((allIssuesInDocket) => {
//     console.log('All documents')
//     console.log(allIssuesInDocket)
// })

landmarksAPI.getAllLandmarks().then((allLandmarks) => {
    console.log('All landmarks')
    console.log(allLandmarks)
})

tripAPI.getAllTrips().then((allLandmarks) => {
    console.log('All trips')
    console.log(allLandmarks)
})


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