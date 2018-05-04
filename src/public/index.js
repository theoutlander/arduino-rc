function sendCommand (cmd) {
  console.log('Sending command', cmd)

  fetch('/move', {
    method: 'POST',
    body: JSON.stringify({
      command: cmd
    })
  })
    .then(response => {
      if(response && response.status === 200)
      {
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

function registerListeners () {
  document.addEventListener('click', function (e) {
    if (e.target && e.target.tagName === 'IMG') {
      let cmd = e.target.getAttribute('data-cmd')
      sendCommand(cmd)
    }
  })
}

function init () {
  console.log('initializing')
  registerListeners()
}