import { listUsers } from "./controllers/UserController.js";

export let routers = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: listUsers,
  }
]