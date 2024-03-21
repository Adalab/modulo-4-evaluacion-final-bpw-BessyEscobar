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

//data conection 
const dataBaseConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'rootbessy',
  database: 'recetas_db'
};

//settings 
async function getConnect () {
  try {
    const connection = await mysql.createConnection(dataBaseConfig);
    return connection;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
}


//start with the server
app.listen(port, () => {
  console.log( `The server is running at http:/localhost:${port}` )
});


//Endpoints
// root for recipe
app.get( '/api/recetas', async (req, res) => {
  try {
    const conn = await getConnect();
    const [results] = await conn.query('SELECT * FROM recetas');
    conn.close();
    res.json( { 
      info: { count: results.lenght},
      results: results 
    });
  } catch (error) { 
    console.error('Error getting recipes::', error);
    res.status(500).json({ success: false, message: 'oh oh error' });
  }
});

// root for recipe by id
app.get('/api/recetas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await getConnect();
    const [results] = await connection.query('SELECT * FROM recetas WHERE id = ?', [id]);
    connection.end();
    if (results.length === 0) {
      res.status(404).json({ success: false, message: 'Recipe not found' });
    } else {
      res.json(results[0]);
    }
  } catch (error) {
    console.error('Error getting recipe:', error);
    res.status(500).json({ success: false, message: 'oh oh error' });
  }
});

//create new recpe
app.post ('/api/recetas', async (req, res) => {
  const data = req.body;
  const { id, nombre, ingredientes, instrucciones } = data;
  if (!nombre || !ingredientes || !instrucciones) {
    return res.status(400).json( { success: false, message: 'Required fields are missing' } )
  }
  try {
    const connection = await getConnect();
    const sql = "INSERT INTO recetas ( id, nombre, ingredientes, instrucciones ) VALUES ( ?, ?, ?, ? )";
    const [results] = await connection.query(sql, [id, nombre, ingredientes, instrucciones]);
    connection.end();
    res.json( { success: true, id: results.insertId } );
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ success: false, message: 'oh oh error' });
  }
});

// update recipe
app.put('/api/recetas/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, ingredientes, instrucciones } = req.body;
  if (!nombre || !ingredientes || !instrucciones) {
    return res.status(400).json({ success: false, message: 'Required fields are missing' });
  }
  try {
    const connection = await getConnect();
    await connection.query('UPDATE recetas SET nombre = ?, ingredientes = ?, instrucciones = ? WHERE id = ?', [nombre, ingredientes, instrucciones, id]);
    connection.end();
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ success: false, message: 'oh oh error' });
  }
});

//delete recipe 
app.delete('/api/recetas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await getConnect();
    await connection.query('DELETE FROM recetas WHERE id = ?', [id]);
    connection.end();
    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar la receta:', error);
    res.status(500).json({ success: false, message: 'Ha ocurrido un error' });
  }
});

