import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


// ALL routes in here already start with /users


const users = [
    {
    firstName: "John",
    lastName: "Doe",
    age: "25"
    },
    {
    firstName: "Jane",
    lastName: "Doe",
    age: "26"
    }
]

//CRUD READ OPERATION

router.get('/', (req, res) => {
    res.send(users)
});


//CRUD CREATE OPERATION
router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the DB!`)

})

export default router;