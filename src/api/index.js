const apiURL = 'https://dapetcu21.herokuapp.com/api/v1'

export function apiCall (method, path, data, opts) {
  opts = opts || {}
  opts.request = opts.request || {}

  const fetchOpts = {
    method,
    headers: {
      'Accept': 'application/json'
    },
    json: true
  }

  if (!opts.absolute) {
    fetchOpts.headers.Authorization = 'Token token=db2ff4cda645cc469d29c4e0e932ac18'
  }

  let url = opts.absolute ? path : (apiURL + path)

  if (data) {
    fetchOpts.body = JSON.stringify(data)
  }

  return fetch(url, Object.assign({}, opts.request, fetchOpts))
    .then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Can't ${method} ${path}: HTTP Error ${response.status}`)
      }
      return response.json()
    })
}

export function apiGetWeather () {
  return apiCall('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Bucharest&APPID=45978b79903c0e325980ff3785398e66', null, { absolute: true })
}

export function apiGetRooms () {
  return apiCall('GET', '/rooms')
}

export function apiGetBulbs () {
  return apiCall('GET', '/bulbs')
}

export function apiToggleBulb (bulbId, state) {
  return apiCall('PATCH', `/bulbs/${bulbId}/${state ? 'on' : 'off'}`)
}
