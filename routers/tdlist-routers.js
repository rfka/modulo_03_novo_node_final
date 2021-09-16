const express = require('express');
const router = express.Router();
const TdList = require('../models/tdlist');

router.post('/add', async (req, res) => {
        await TdList.create(req.body)
        .then(() => {
            res.status(200).send('Tarefa adicionada com sucesso');
        }).catch((err) => {
            res.status(400).send('A tarefa não pode ser adicionada, tente novamente!!');
            console.error(err);
        })
});

router.get('/', async (req, res) => {
    await TdList.find({})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send('As tarefas não puderam ser carregadas, tente novamente!!');
        console.log(err);
    })
});

router.get('/findById/:id', async (req, res) => {
    await TdList.find({_id : req.params.id})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send('A tarefa não pode ser carregada, tente novamente!!');
        console.log(err);
    })
});

router.get('/findByName/:name', async (req, res) => {
    await TdList.find({nomeTarefa : req.params.name})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send('Algo errado com a musica, tente novamente');
        console.log(err);
    })
});

router.put('/update/:id', async (req, res) => {
    await TdList.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send('Tarefa atualizada com sucesso');
    })
    .catch((err) => {
        res.status(400).send('Algo errado em atualizar a tarefa, tente novamente!!');
        console.log(err);
    });
});

router.delete('/delete/:id', async (req, res) => {
    await TdList.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send('Tarefa deletada com sucesso');
    })
    .catch((err) => {
        res.status(400).send('Algo errado ao excluir a tarefa, tente novamente!!');
        console.log(err);
    });
});


module.exports = router;