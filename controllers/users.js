import { v4 as uuidv4 } from 'uuid';

let users = [
]

export const createUser = (req, res) => {
    console.log(req.body)
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the DB!`)

};

export const getAllUsers =  (req, res) => {
    res.send(users)
};

export const getUser =  (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser =  (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id) 
    res.send(`User with the id ${id} deleted from the db.`);
};

export const patchUser =  (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === id) 
    const { firstName, lastName, age } = req.body;

    if(firstName){
        user.firstName = firstName;
        user.age = age;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }

    res.send(`User with the id ${id} updated from the db.`);
};