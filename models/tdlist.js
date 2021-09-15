const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const tdListModelo = new mongoose.Schema({
    nome: {type: 'String', required: true},
    descricao: {type: 'String', required: true},
    dataCriacao: {type: 'Date', default: Date.now},
    dataAlteracao: {type: 'Date'},
    situacaoTarefa: {type: 'String', required: true}
})

const TdList = mongoose.model('tdList', tdListModelo);

module.exports = TdList;