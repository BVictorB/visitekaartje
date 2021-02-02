// const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members/55'
// const userData = {
//   "teamId": "1",
//   "name": "Victor",
//   "avatar": "https://avatars.githubusercontent.com/u/10921830?s=460&u=d9790f50bebe35de86146b7fcb76906286611703&v=4",
//   "prefix": "",
//   "surname": "Boucher",
//   "mugshot": "https://avatars.githubusercontent.com/u/10921830?s=460&u=d9790f50bebe35de86146b7fcb76906286611703&v=4",
//   "githubHandle": "BVictorB",
//   "other": {
//     "age": "22",
//     "sport": "(kick)boksen, wielrennen, voetballen, krachttraining",
//     "pet": "Katten",
//     "muziek": "Hip-hop/rap, Drum & Bass, Lo-fi, en nog veel meer",
//     "werkplek": "Thuis"
//   },
//   "url": "https://bvictorb.github.io/visitekaartje/"
// }

// fetch(url, {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(userData),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data)
//   })
//   .catch((error) => {
//     console.error('Error:', error)
//   })

const 
  card = document.querySelector('.card'),
  avatar = document.querySelector('.avatar'),
  height = card.clientHeight,
  width = card.clientWidth

const transformCard = (e) => {
  const 
    rotationY = 10 * ((e.layerX - width / 2) / width),
    rotationX = -10 * ((e.layerY - height / 2) / height)

  card.style.transform = `perspective(1000px) scale(1.1) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  avatar.style.transform = 'scale(1.05)'
}

card.addEventListener('mousemove', transformCard)
card.addEventListener('mouseout', () => {
  card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)'
  avatar.style.transform = 'scale(1)'
})