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


## Users
---


We are going to create users for this Demo, so we can use basic CRUD operations on a user. Read Operations are great for browser development but POSTING, is why we need to use a tool call PostMan, If you don't have it installed. Install it now.