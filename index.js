
const { Block, BlockChain } = require('./classes/Block')

// logginig
const log = (obj) => { console.log(obj) }

const chain = new BlockChain()

let generateBlockAndlogging = (data) => {
  chain.generateNextBlock(data)
  log(chain.blocks)  
}

generateBlockAndlogging('hoge')
generateBlockAndlogging('moge')
generateBlockAndlogging('mage')
generateBlockAndlogging('page')