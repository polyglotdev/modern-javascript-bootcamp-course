const prices = [400.5, 4000.0, 5679.49, 8746.43, 4759.99]
const getPrices = prices.sort((a, b) => b - a)
console.log(getPrices)

const nbaPlayers = [
  {
    name: 'LeBron James',
    team: 'LA Lakers',
    points: 35367,
  },
  {
    name: 'Kevin Durant',
    team: 'Brooklyn Nets',
    points: 23883,
  },
  {
    name: 'Kawhi Leonard',
    team: 'Los Angles Clippers',
    points: 11085,
  },
]
const nbaPlayersAsc = nbaPlayers.sort((a, b) => b.points - a.points)
console.log(nbaPlayersAsc)

const nbaPlayersDesc = nbaPlayers.sort((a, b) => a.points - b.points)
console.log(nbaPlayersDesc)
