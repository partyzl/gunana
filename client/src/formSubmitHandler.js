const formSubmitHandler = async (e, setPuns, setFormExpanded) => {
    console.log('formSubmitHandler called!')
   e.preventDefault();
    const url = 'http://localhost:5000/puns';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: e.target.name.value,
            pun: e.target.pun.value
        })
    }
    const resp = await fetch(url, options)
    const all = await fetch(url)
    const puns = await all.json()
    setPuns(puns)
    setFormExpanded(false)
}

export default formSubmitHandler;

