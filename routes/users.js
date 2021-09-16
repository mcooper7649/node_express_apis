import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


// ALL routes in here already start with /users


const users = [
   
]

//CRUD READ OPERATION

router.get('/', (req, res) => {
    res.send(users)
});

// users/2 => req.param { id: 2}

router.get('/:id', (req, res) => {
    const { id } = req.params;

   const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})




//CRUD CREATE OPERATION
router.post('/', (req, res) => {
    console.log(req.body)
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the DB!`)

})


// DELETE

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id) 
    res.send(`User with the id ${id} deleted from the db.`);
})

export default router;