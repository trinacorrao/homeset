/api/task
CRUD that accesses the tasks collection
GET: 200
send: {usertoken}
receive: [{
    _id: 
    task_name: String,
    task_doer: String,
    ini_date: Date,
    frequency: Number,
    completed: [Date],
    reminder: String,
    notes: String,
}]

POST: 
send: {
  usertoken, 
  task: {
    task_name: String,
    task_doer: String,
    ini_date: Date,
    frequency: Number,
    completed: [Date],
    reminder: String,
    notes: String,
  }
}

DELETE: 200
send: {
  user,
  _id
}

PUT: 200
send: {
  usertoken, 
  task: {
    _id: String
    task_name: String,
    task_doer: String,
    ini_date: Date,
    frequency: Number,
    completed: [Date],
    reminder: String,
    notes: String,
  }
}

receive:
/api/user
GET/POST the user information/token

