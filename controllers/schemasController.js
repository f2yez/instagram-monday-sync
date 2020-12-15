
const { schemas } = require('./../schemas/index');

async function find(req, res) {

    res.json({ schemas });
}

async function list(req, res) {

    res.json({ schemas });
}

module.exports =  {
    find,
    list
}