const express = require('express');
const path = require('path');
const db = require('./config/connection');
const User = require('./models/User');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
  
app.use(routes);
  
db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
  