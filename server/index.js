const express = require('express'); //common js
/*Henry*/ 

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello New Paltz!');//if we get a get request in the root path we send hello world
});//routing

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`); //listen to the port, execute the code
});
//ctrl c to stop the server