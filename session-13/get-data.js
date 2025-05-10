/*
* function implemented by Anca Margea
*/
async function getHistoricalEvents(apiKey, options) {
  function buildQueryString(options) {
    const params = new URLSearchParams();

    if (options.year) params.append("year", options.year);
    if (options.month) params.append("month", options.month);
    if (options.day) params.append("day", options.day);
    if (options.text) params.append("text", options.text);

    return params.toString();
  }

  const apiUrl = "https://api.api-ninjas.com/v1/historicalevents";
  const query = buildQueryString(options);
  const url = `${apiUrl}?${query}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  });

  if (!response.ok) {
    if (response.status === 400) {
      console.error(
        `Request failed with status 400: Unauthorized – API key is missing or invalid.`
      );
    } else if (response.status === 403) {
      console.error(
        `Request failed with status 403: Forbidden – you don’t have access to this resource.`
      );
    } else if (response.status === 404) {
      console.error(
        `Request failed with status 404: Not Found – the endpoint might be incorrect.`
      );
    } else {
      console.error(
        `Request failed with status ${response.status}: Unexpected error.`
      );
    }

    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}