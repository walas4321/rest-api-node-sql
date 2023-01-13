import app from "./app.js"

import './database/connection.js';

//import {  } from "./database/connection.js";

app.listen(app.get('port'))

console.log('server on port', app.get('port'))
