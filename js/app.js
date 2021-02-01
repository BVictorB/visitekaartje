const xhr = new XMLHttpRequest()
const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members'

const userData = {
  "teamId": "1",
  "name": "Victor",
  "avatar": "https://avatars.githubusercontent.com/u/10921830?s=460&u=d9790f50bebe35de86146b7fcb76906286611703&v=4",
  "prefix": "",
  "surname": "Boucher",
  "mugshot": "https://avatars.githubusercontent.com/u/10921830?s=460&u=d9790f50bebe35de86146b7fcb76906286611703&v=4",
  "githubHandle": "BVictorB",
  "other": {
    "age": "22",
    "sport": "(kick)boksen, wielrennen, voetballen, krachttraining",
    "pet": "Katten",
    "muziek": "Hip-hop/rap, Drum & Bass, Lo-fi, en nog veel meer",
    "werkplek": "Thuis"
  }
}

const postUserData = () => {
  xhr.open("POST", url, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(userData))
}