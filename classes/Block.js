const CryptoJS = require('crypto-js')

class Block {

  constructor(index, previousHash, timeStamp, data, hash) {
    
    this.index = index
    this.previousHash = previousHash
    this.timeStamp = timeStamp
    this.data = data
    this.hash = hash.toString()
  }
}

module.exports.Block = Block

class BlockChain {

  // ブロク管理用オブジェクト
  constructor() {

    this.blocks = []

    let genesis =  new Block(0, "0", 1465154705, "my genesis block!!", "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7"); 
    this.blocks.push(genesis)
  }

  generateNextBlock(blockData) {
    if (this.blocks.length <= 0) {
      console.error('生成に必要な最初のブロックが存在しません')
      return
    }

    const previousBlock = this.getLatestBlock()
    const nextIndex = previousBlock.index + 1;
    const nextTimeStamp = new Date().getTime() / 1000
    const nextHash = BlockManager.calcurateHash(nextIndex, previousBlock.hash, nextTimeStamp,blockData)
    
    const newBlock = new Block(nextIndex, previousBlock.hash, nextTimeStamp, blockData, nextHash)
    this.blocks.push(newBlock)
    return newBlock
  }

  // 一番最後のブロックを返してあげてあげる
  getLatestBlock() {
    // TODO:本来はtimestampのソートをして正しくトランザクションが新しいものを返すべきだが、暫定的に
    return this.blocks[this.blocks.length - 1]
  }

  static calcurateHash(index, previousHash, timestamp, data) {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  }  
}


module.exports.BlockChain = BlockChain
