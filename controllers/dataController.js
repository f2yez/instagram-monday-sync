
async function find(req, res) {

    res.json({
        items: [],
        totalCount: 0
    });
}

async function get(req, res) {

    res.json({
        
    });
}

async function insert(req, res) {

    res.json({
        
    });
}


async function update(req, res) {

    res.json({
        
    });
}


async function remove(req, res) {

    res.json({
        
    });
}


async function count(req, res) {

    res.json({
        totalCount: 0
    });
}

module.exports =  {
    find,
    get,
    insert,
    update,
    remove,
    count
}