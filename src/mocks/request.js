const getAllClients = async () => {
    const time = Math.random() * 10000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Renan','Pedro']);
        }, time)
    })
}

module.exports = getAllClients;