 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


module.exports = {sleep, randomInteger}
