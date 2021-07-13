const warriorsGames = [
  {
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false,
    },
  },
]

// create the ul section to hold the scores
const ulParent = document.createElement('ul')
for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game

  let scoreLine
  const gameLi = document.createElement('li')
  const teamsNames = `${awayTeam.team} @ ${homeTeam.team}`

  if (homeTeam.points > awayTeam.points) {
    scoreLine = `${awayTeam.points} - <strong>${homeTeam.points}</strong>`
  } else {
    scoreLine = `<strong>${awayTeam.points}</strong> - ${homeTeam.points}`
  }

  const warriors = homeTeam.team === 'Golden State' ? homeTeam : awayTeam
  gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')
  gameLi.innerHTML = `${teamsNames} - ${scoreLine}`
  ulParent.appendChild(gameLi)
}

// add the ul to the body
document.body.appendChild(ulParent)
