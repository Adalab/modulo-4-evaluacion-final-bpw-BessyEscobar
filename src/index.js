// insert bibliotecas
const express = require('express');
const path = require('path'); // res.sendFile(path.join(__dirname, '../public/ivanico.html'))
const cors = require('cors');
const mysql = require('mysql2/promise');

//create variables
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

//settings 
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root12.',
  database: 'recetas_db'
});


//start with the server
app.listen(port, () => {
  console.log( `The server is running at http:/localhost:${port}` )
});


//Endpoints
// root for recipe
app.get( '/recetas', async (req, res) => {
  try {
    const conn = await connectToDB();
    const [X] = await conn.query('SELECT * FROM recetas');
    conn.end();
    res.json( { 
      info: {count: X.lenght},
      results: X 
    });
  } catch (error) { 
    console.error('Error getting recipes::', error);
    res.status(500).json({ success: false, message: 'oh oh error' });
  }
});

// root for recipe by id

//