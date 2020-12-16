const Storage = require('../service/storage')

async function find(req, res) {
    const findResult = await Storage.find(req.body)
    res.json(findResult)
}

async function get(req, res) {

    const getResult = await Storage.get(req.body)
    res.json(getResult)
}

async function insert(req, res) {

    const insertResult = await Storage.insert(req.body)
  	res.json(insertResult)
}


async function update(req, res) {

    const updateResult = await Storage.update(req.body)
  	res.json(updateResult)
}


async function remove(req, res) {

    const removeResult = await Storage.remove(req.body)
  	res.json(removeResult)
}


async function count(req, res) {

    const countResult = await Storage.count(req.body)
  	res.json(countResult)
}

module.exports =  {
    find,
    get,
    insert,
    update,
    remove,
    count
}