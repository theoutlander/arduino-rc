function sendCommand (cmd) {
  console.log('Sending command', cmd)

  fetch('/move', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      command: cmd
    })
  })
    .then(response => {
      if (response && response.status === 200) {
        return response.json()
      }
      else {
        console.error(response.statusText)
      }
    })
    .then(json => {
      console.log(json)
    })
}

function connect () {
  fetch('/connect', {
    method: 'POST'
  })
    .then(response => {
      if (response && response.status === 200) {
        return response.json()
      }
      else {
        console.error(response.statusText)
      }
    })
    .then(json => {
      console.log(json)
      setAsConnected()
    })
}

function setAsConnected () {
  document.getElementById('connect').classList.remove('red')
  document.getElementById('connect').classList.add('green')
}

function registerListeners () {
  document.addEventListener('click', function (e) {
    if (e.target && e.target.tagName === 'IMG') {
      let cmd = e.target.getAttribute('data-cmd')
      sendCommand(cmd)
    }
  })

  document.getElementById('connect').addEventListener('click', function (e) {
    connect()
  })
}

function init () {
  console.log('initializing')
  registerListeners()
}