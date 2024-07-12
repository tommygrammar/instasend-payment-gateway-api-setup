# instasend-payment-gateway-api-setup
This is my setup with instasend payment gateway api for my react app

Frontend - profile.js (make sure to import it into your React app.)

Backend - server.js

install the following before you run it:

npm install instasend-node
npm install express
nom install body-parser
npm install axios
npm install intasend-inlinejs-sdk
npm install https-browserify
npm install @craco/craco
npm install stream-http
npm install url buffer

Create a craco.config.js file at the root directory of your react app

in your package.json file: replace scripts with this instead:

"scripts": {
"start": "craco start",
"build": "craco build",
"test": "craco test",
"eject": "react-scripts eject"
}

make sure to run your backend: node server.js

run your frontend with npm start:

then click the button, it should bring a transaction thing.

Try it out

Keep your secret keys in your .env file. Do not expose it to the public

