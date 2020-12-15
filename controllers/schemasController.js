
const { schemas } = require('./../schemas/index');

async function find(req, res) {

    res.json({ schemas: schemas[0] });
}

async function list(req, res) {

    res.json({ schemas });
}

module.exports =  {
    find,
    list
}