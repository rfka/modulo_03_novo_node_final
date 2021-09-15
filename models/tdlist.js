const mongoose = require ('mongoose');

const tdListModelo = new mongoose.Schema({
    tarefa: {type: 'String', required: true},
    descricao: {type: 'String', required: true},
    dataCriacao: {type: 'Date', default: Date.now},
    dataConclusao: {type: 'Date'},
    situacao: {type: 'String', required: true}
})

const TdList = mongoose.model('tdList', tdListModelo);

module.exports = TdList;