import { users } from "../mocks/users.js"

export function listUsers(request, response) {
  const { order } = request.query

  const sortedUsers = users.sort((a, b) => {
    if(order === 'desc' ){
      return a.id < b.id ? 1 : -1
    }
    return a.id > b.id ? 1 : -1
    
  })

  response.writeHead(200, {'Content-Type' : 'application/json'})
  response.end(JSON.stringify(sortedUsers))
}

export function getUserById(request, response) {

  const { id } = request.params

  const user = users.find((user) => user.id === Number(id))

  if (user) {
    response.writeHead(200, {'Content-Type' : 'application/json'})
    response.end(JSON.stringify(user))
  } else {
    response.writeHead(200, {'Content-Type' : 'application/json'})
    response.end(JSON.stringify(`Cannot found User`))
    
  }

}