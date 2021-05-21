# Simple Auth using MERN Stack


- Front-end
    - React for view components
    - Redux for state management
- Back-end
    - Express
    - Node.js
- Database
     - Mongo DB (Cloud)

### Configuring Mongo DB URL

Create a File in `./config/keys.js`
Example can be found in `./config/keys.js.example`

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```


### Running 

This uses [Concurrently](https://www.npmjs.com/package/concurrently) to run the client and Server at the same time

```
npm run dev
```