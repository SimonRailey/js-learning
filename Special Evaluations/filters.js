const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 189.50, change: 2.3, sector: "Technology", volume: 5000000 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 175.20, change: -1.8, sector: "Automotive", volume: 3000000 },
  { symbol: "MSFT", name: "Microsoft", price: 420.10, change: 0.9, sector: "Technology", volume: 4000000 },
  { symbol: "AMZN", name: "Amazon", price: 185.75, change: -3.2, sector: "E-commerce", volume: 2500000 },
  { symbol: "NVDA", name: "NVIDIA", price: 950.60, change: 5.1, sector: "Technology", volume: 6000000 },
  { symbol: "JPM", name: "JPMorgan Chase", price: 205.40, change: 0.5, sector: "Finance", volume: 3500000 },
];

// Q1. User says: "Show me all Technology stocks."

// function sector(query){
//     return stocks.filter(stocks=>stocks.sector===query)
// }

// console.log(sector("Automotive"))


// Q2. User says: "Show me stocks that are gaining today."

// function gainers(query){
//     return stocks.filter(stocks=>stocks.change>0)
// }

// console.log(gainers())

// Q3. User says: "I’m looking for 'Tesla' or 'TSLA'."

// function searchStocks(query){
//     const searched=query.toLowerCase()
//     return stocks.filter(stocks=>stocks.name.toLowerCase().includes(searched)|| // includes is used to match paritally
//                         stocks.symbol.toLowerCase().includes(searched)
//                         )
// }

// console.log(searchStocks("Tesla"))

//Q4. User says: "Show me stocks with volume > 4M."
// function volumeFiler(query){
//     return stocks.filter(stocks=>stocks.volume>query)
// }
// console.log(volumeFiler(4000000))