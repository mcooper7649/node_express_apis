import express from 'express';

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

})

export default router;