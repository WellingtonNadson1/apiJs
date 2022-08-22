import http from 'http'
import { listUsers } from './controllers/UserController.js'
import { routers } from './routes.js'
const PORT = 3333
const hostname = 'localhost'

const server = http.createServer((request, response) => {
  const route = routers.find((routeObj) => (
    routeObj.endpoint === request.url && routeObj.method === request.method
  ))

  if(route) {
    listUsers(request, response)
  } else {
    response.writeHead(404, {'Content-Type' : 'text/html'})
    response.end(`Cannot ${request.method} ${request.url}`)
  }
})

server.listen(PORT, hostname, () => console.log(`Server running at http://${hostname}:${PORT}`))