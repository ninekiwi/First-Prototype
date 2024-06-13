const scriptURL ='https://script.google.com/macros/s/AKfycbwMhJp4KBsu8amW-kEqgj_TAZBaxFSX60tyL_JKWR5nor5OlPO5DKbg79xCoCvJsq6aVg/exec'

const form = document.forms['Survey-Form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Submitted Successfully !"))
        // .then(()=> {window.location.reload();})
        .catch(error => console.error('Error!', error.message))
})