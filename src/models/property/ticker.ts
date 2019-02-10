export class Ticker{
  symbol: string
  
  constructor() {
    symbol: ''
  }
  setSymbol(symbol: string) {
    this.symbol = symbol
    return this
  }
}