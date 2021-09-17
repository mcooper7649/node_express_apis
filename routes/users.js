import express from 'express';
import { createUser } from '../controllers/users.js';
import { getAllUsers } from '../controllers/users.js';
import { getUser } from '../controllers/users.js';
import { deleteUser } from '../controllers/users.js';
import { patchUser } from '../controllers/users.js';

const router = express.Router();


// ALL routes in here already start with /users


let users = [
   
]

//CRUD READ OPERATION

router.get('/', getAllUsers);

// users/2 => req.param { id: 2}

router.get('/:id', getUser)




//CRUD CREATE OPERATION
router.post('/', createUser);


// DELETE

router.delete('/:id', deleteUser);

//Patch for updating a user without replacing

router.patch('/:id', patchUser)



export default router;