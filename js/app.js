const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members'

fetch(url)
  .then(
    (res) => {
      res.json().then((data) => {
        console.log(doeIetsMetData(data))
      })
    }
  )
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

const doeIetsMetData = (data) => {
  const namen = data.map((persoon) => persoon.name)
  return namen
}