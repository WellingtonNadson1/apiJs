import http from 'http'
import { routers } from './routes.js'
import { URL } from 'url'
const PORT = 3333
const hostname = 'localhost'

const server = http.createServer((request, response) => {
  const parseUrl = new URL(`http://localhost:3333${request.url}`)
  
  let { pathname } = parseUrl
  let id = null
  
  const splitEndPoint = pathname.split('/').filter(Boolean)
  
  if (splitEndPoint.length > 1){
    pathname = `/${splitEndPoint[0]}/:id`
    id = splitEndPoint[1]
  }
  
  const route = routers.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
    ))
    
    if(route) {
      request.query = Object.fromEntries(parseUrl.searchParams)
      request.params = { id }
      
      route.handler(request, response)
      
    } else {
      response.writeHead(404, {'Content-Type' : 'text/html'})
    response.end(`Cannot ${request.method} ${parseUrl.pathname}`)
  }
})

server.listen(PORT, hostname, () => console.log(`Server running at http://${hostname}:${PORT}`))