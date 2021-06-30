const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 1000000,
  battleOfTheDecades: 1000000,
}

totalWinnings = 0
for (let prop in jeopardyWinnings) {
  totalWinnings += jeopardyWinnings[prop]
  console.log(`Ken Jennings Total Earnings: ${totalWinnings}`)
}

// forOf is for arrays
for (let k of [88, 99, 77, 66]) {
  console.log(`${k}`)
}
