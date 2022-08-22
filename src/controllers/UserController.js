import { users } from "../mocks/users.js"

export function listUsers(request, response) {
  response.writeHead(200, {'Content-Type' : 'application/json'})
  response.end(JSON.stringify(users))
}