# Simple Auth using MERN Stack


- Front-end
    - React for view components
    - Redux for state management
- Back-end
    - Express
    - Node.js
- Database
  - Mongo DB (Cloud)
- IDE
  - Jetbrains Webstorm

### Configuring Mongo DB URL

Create a File in `./config/keys.js`
Example can be found in `./config/keys.js.example`

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```


### Installation 

Need to run install the libraries for both the server and client
```
npm install
npm install --prefix client
```

### Running 

This uses [Concurrently](https://www.npmjs.com/package/concurrently) to run the client and Server at the same time

```
npm install
npm install --prefix client
npm run dev
```