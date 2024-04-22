
async function connectToDatabase() {
    return 'connected to database!'
}

async function query(query, params) {
    await connectToDatabase;
    return 'query executed!'
}

module.exports = {
    query
}