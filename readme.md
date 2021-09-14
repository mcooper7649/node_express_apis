## Postman
---

[https://youtu.be/l8WPWK9mS5M](Link)


REST API's with Node.js and Express

Application Programming Interface

This interface allows interaction between with data.

Postman is a tool that lets us develelop and test APIs much faster and effieciently vs standard dev tools.

npm init -y to initialize our npm and we can now see our package.json has more info

Before we begin make sure your package.json has nodemon configured for scripts and type is set to module

BoilerPlate Code
```
import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express();

const PORT = 5000;   

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req, res)=> {
    console.log('[TEST]!');

    res.send("Hello There")
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
```


## User Post with POSTMAN
---


We are going to create users for this Demo, so we can use basic CRUD operations on a user. Read Operations are great for browser development but POSTING, is why we need to use a tool call PostMan, If you don't have it installed. Install it now.


1. Once we have POSTman installed
   - add localhost:5000 and confirm it is hitting our development message "Hello from homepage"


2. Next we need to make sure  || MOST IMPORTANT ISSUES MAKE SURE THIS IS ACCURATE
   1. Move from params to Body tab
   2. Change none to 'raw'
   3. Change Text to 'JavaScript'


3. Lets add a post route to our users.js
   1.  Console.log ('POST Route Reached') first.
   2.  Lets add a res.send too

4. Inside postman, lets go to localhost:5000/users
   1. we should get 'Post Route Reached' in postman body (for the res.send)
   2. we should also get post route reached inside the terminal


5. Because we are using a MOCK DB are users wont save, because everytime the server is rs its removed.

6. lets continue like we would with a DB anyway to make sure we understand express.
   1. PUSH is how
   2. If we console.log(req.body) in our post, we will get the 


7. Next we need to add ID's to our users to differenciate our users.
   1. install the the package uuid
      1. npm i uuid
      2. import 
      3. then we need to add the ID WHEN we are creating the USER
      4. We ned to create a new user by using the spread operator {...} and adding the property id: userId
   ``const userWithId = { ...user, id: userId}``
      5. We can refactor our code and actually grab the spread command and id with uuidv4 and put that in the push
```
router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the DB!`)

})
```


