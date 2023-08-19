 const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ3K9nMPx6rzCJvUhdse_6oNNcMZ6UKtxusw2h6lRpf3exG-XE0PL_FG3p6b-VPZ63jw/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })