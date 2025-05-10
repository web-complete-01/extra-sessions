const apiKey = 'UxJpiB8G1eKe/1R0JuHOWA==cbBJpDfHNyfbpl3I';
const requestOptions = {
    year: 1099,
    // month: 12,
    // day: 1,
    // text: 'roman'
}

function getHistoricalEvents(apiKey, requestOptions) {
    return new Promise(async (resolve, reject) => {
        if (!apiKey) {
            reject('API Key not specified');
            return;
        }

        if(!requestOptions.year && !requestOptions.month && !requestOptions.day){
            reject('You have to specify at least a year, month or day');
            return;
        }

        const apiUrl = 'https://api.api-ninjas.com/v1/historicalevents';
        const queryParams = Object.keys(requestOptions)
                                .filter(key => requestOptions[key])
                                .map(key => `${key}=${requestOptions[key]}`)
                                .join('&');

        const fetchOptions = {
            headers: { 
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(`${apiUrl}?${queryParams}`, fetchOptions);
        const data = await response.json();

        if(!response.ok){
            reject(data.error);
            return;
        }
        
        resolve(data)
    })
}

// getHistoricalEvents(apiKey, requestOptions)
//     .then(data => displayHistoricalEvents(eventListContainer, data))
//     .catch(error => console.error(error))


// create an ordered list in the specified parent element, displaying the events list given as a parameter
// parentElem: DOM Element reference
// before creating the list, all the child nodes of the parent elem will be deleted
function displayHistoricalEvents(parentElement, eventsList){
    parentElement.innerHTML = '';

    if(!eventsList.length){
        parentElement.textContent = 'No historical events available!';
        return;
    }

    function createSpan(text){
        const span = document.createElement('span');
        span.textContent = text;
        return span;
    }

    const ol = document.createElement('ol');
    parentElement.append(ol);

    eventsList.forEach(event => {
        const li = document.createElement('li');
        ol.append(li);

        li.append(createSpan(event.year));
        li.append(createSpan(event.month));
        li.append(createSpan(event.day));
        li.append(createSpan(event.event));
    });
}


const eventListContainer = document.querySelector('#display');



// const historicalEvents = [
//     {
//         "year": "1200",
//         "month": "05",
//         "day": "22",
//         "event": "King John of England and King Philip II of France sign the Treaty of Le Goulet."
//     },
//     {
//         "year": "1200",
//         "month": "08",
//         "day": "24",
//         "event": "King John of England, signer of the first Magna Carta, marries Isabella of Angoul\u00eame in Angoul\u00eame Cathedral."
//     },
//     {
//         "year": "1200",
//         "month": "10",
//         "day": "08",
//         "event": "Isabella of Angoul\u00eame is crowned Queen consort of England."
//     }
// ]
// displayHistoricalEvents(eventListContainer, historicalEvents);