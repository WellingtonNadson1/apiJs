import { listUsers } from "./controllers/UserController.js";
import { getUserById } from "./controllers/UserController.js";

export let routers = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: listUsers,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: getUserById,
  },
]