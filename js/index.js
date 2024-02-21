// The index.html file has a form with a search input. When the form is submitted, it should take the value of the input and search GitHub for user matches using the User Search Endpoint.


// use a querySelector to target the from and listen for submit event on the form
document.getElementById('github-form').addEventListener('submit', (event) => {
    event.preventDefault() 
    const userInput = document.getElementById('search').value
    // search GitHub for user matches using the User Search Endpoint - "https://api.github.com/search/users?q=userInput"
    fetch(`https://api.github.com/search/users?q=${userInput}`, {
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    })
    // promise returned from fetch is successful and resolved to a response - take the resp and convert it to JS data
    .then(resp => resp.json())
    .then(data => console.log(data))
})

