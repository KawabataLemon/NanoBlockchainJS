
const { Block, BlockManager } = require('./classes/Block')

// logginig
const log = (obj) => { console.log(obj) }

const manager = new BlockManager()

let generateBlockAndlogging = (data) => {
  manager.generateNextBlock(data)
  log(manager.blocks)  
}

generateBlockAndlogging('hoge')
generateBlockAndlogging('moge')
generateBlockAndlogging('mage')
generateBlockAndlogging('page')