

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {

    // data stuff
    fetch('http://localhost:8000/api/v1')

    .then(function(data){
      return data.json()

    })

    .then(function(data){


      data.forEach(function(filmV){
        var bigbox = document.createElement('tr')

        var film = document.createElement('td')
          film.innerHTML = filmV.film

        var stars = document.createElement('td')
          stars.innerHTML = filmV.stars

        var rating = document.createElement('td')
          rating.innerHTML = filmV.rating

        var votes = document.createElement('td')
          votes.innerHTML = filmV.votes

        bigbox.appendChild(film)
        bigbox.appendChild(stars)
        bigbox.appendChild(rating)
        bigbox.appendChild(votes)
        document.getElementById('data').appendChild(bigbox)
      })

    })

    // data
    //.then(function(json){console.log(json)})

  }
}
