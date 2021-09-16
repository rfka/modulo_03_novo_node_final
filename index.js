if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const cors = require('cors');
  
  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  }
  
  const app = express();
  app.use(express.json());
  app.use(cors(corsOptions));
  
  const Conn = require('./models/conn/conn');
  
  const db_url = process.env.DB_URL;
  const db_user = process.env.DB_USER;
  const db_pass = process.env.DB_PASS;
  const db_data = process.env.DB_DATA;
  
  Conn(db_url, db_user, db_pass, db_data);
  const port = 4000;
  
  const tdListRouter = require('./routers/tdlist-routers');
  app.use('/tarefas',tdListRouter);

  app.get('/', (req, res) => {
    res.send('Backend lista de Tarefas!!');
  });
  
  app.listen(process.env.PORT || port, ()=> {
    console.info(`Servidor rodando http://localhost:${port}`);
  })