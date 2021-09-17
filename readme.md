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

8. Now that we have our ID in place we can delete our MOCK db users and only post new users.
   1. delete the hardcoded users db

9. Next we can setup another get route, to look for ID
10. If we res.send the req.params we have the data that was queried. 
11. http://localhost:5000/users/2 will return id: "2"

```router.get('/:id', (req, res) => {
    res.send(req.params)
})
```

10. Now that we know we have access to the id requested we can assign a variable to our req.params 
   `` const { id } = req.params;``
11. Next we can use some basic javascript by calling the method on our users db.


12. Next we can post 2 more users to add them to our DB via postman
    1.  go to localhost:5000/users and grab an id that was generated on your previous posts
    2.  then go to localhost:5000/users/pasteTheIdHere  and you will see your USER!!!
    3.  The idea is then we create more routes that lets us access that id, then we can edit values of that ID


13. Lets create the delete route next.
    1.  first create the router.delete with '/:id'
    2.  set { id } = req.params
    3.  set our users db = users.filter((user) => user.id !id)
        1.  this our users DB filters to only leave users w/o the id of the req.params
    4. Next post two more user to our DB to test it out
    5. Get one of our new users ID
    6. Change teh postman from get to DELETE
       1. after localhost:5000/users/pasteYourIdHere
       2. Send (if you get an error, change our const for our array to let)
       3. in postman you should get a message like "User with the id 34b8ba88-421c-4979-902a-2a65032a8b68 deleted from the db."
       4. SUCCESS. you can run a get on the users again to confirm from postman TOO

14. Now we just need to be able to update our user
    1.  Patch request is to update a user or object
    2.  Post is completely NEW
    3.  PUT is when you want to completely OVERWRITE
    4.  if you JUST want to modify one property, USE PATCH

15. First we need to setup our patch router to find our user by id. 
    ```
    router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === id) 
        user
    

    res.send(`User with the id ${id} updated from the db.`);
   })
   ```
16. Next we need to send our update payload in POSTMAN.
   1. First we need to again post 2 new test users to our DB
   2. Next we need to copy an ID, lets pick Joes
   3. Next we go into postman and change to PATCH
   4. users/pasteTheID
   5. inside our BODY, only patch an object with the firstName changed from Joe to johnny.
   6. create a const from our req.body with our properties we want to change. ``const { firstName, lastName, age } = req.body;``
   7. Create an if statement, to check if there is a first name


17. next we want to seperate our routes and our code so its cleaner.
   1. First we will create a controllers folder in root w/ users.js
   2. next inside our routers folder, inside the post route copy the code after '/'
```
const createUser = (req, res) => {
    console.log(req.body)
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the DB!`)

};


//CRUD CREATE OPERATION
router.post('/', createUser );
```
   3. Next lets take our createUser function and move to the controllers
   4. export const next to each function
   5. Complete all otehr routes next
   6. Next we need to move the import of uuid as its not being used in the routes users.js anymore and it is in the controller users.js
   7. MAKE SURE YOUR IMPORT WITH .JS or it wont work!