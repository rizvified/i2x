import 'whatwg-fetch';

function parseJSON(response) {
  return response.json();
}

export default function request(url, options) {
  return fetch(url, options)
    .then(parseJSON);
}
