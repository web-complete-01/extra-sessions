// my code

const apiKey = 'UxJpiB8G1eKe/1R0JuHOWA==cbBJpDfHNyfbpl3I';

const requestOptions = {
    year: 1099,
    month: '',
    // day: '',
    // text: ''
}



getHistoricalEvents(apiKey, requestOptions)
    .then(data => {
        const eventListContainer = document.querySelector('#display');
        displayHistoricalEvents(eventListContainer, data)
    })
    .catch(error => console.error(error))
