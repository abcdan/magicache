const Magicache = require('../dist/index')


function print() {
    console.log('heh')
}
async function main() {

    const cache = new Magicache(print, 300)

    cache.run()
}