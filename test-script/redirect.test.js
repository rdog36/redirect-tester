var live = process.env.LIVE

const axios = require('axios');

// check(host, path, expectedRedirect, statusCode)
//  {host}: the host header of the request (without http(s)://)
//  {path}: the path after the host
//  {expectedRedirect}: the full URL of the Location header that should be returned
//  {statusCode}: the expected status code (optional, defaults to 302)
const check = function(host, path, expectedRedirect, statusCode) {

  path = path || '';
  if (path.substr(0,1) === '/') path = path.substr(1);
  statusCode = statusCode || 302;

  if (live === "true"){
    var url = 'http://' + host + '/' + path;
  }
  else {
    var url = 'http://127.0.0.1/' + path;
  }

  // We can only check http because the Docker redirect server usually runs behind a loadbalancer
  return axios({ method: 'GET', url: url, headers: {Host: host}, maxRedirects: 0})
  .then(function (response) {
    return Promise.reject('No redirect status code received');
  })
  .catch(function (error) {
    const response = error.response;
    if (response.status === statusCode && response.headers.location === expectedRedirect) {
      return Promise.resolve();
    } else if (response.status !== statusCode) {
      return Promise.reject('Received unexpected status code. Expected: "' + statusCode + '" got: "' + response.status + '"');
    } else if (response.headers.location !== expectedRedirect) {
      console.log(response.headers.location);
      return Promise.reject('Received unexpected redirect location. Expected: "' + expectedRedirect + '" got: "' + response.headers.location + '"');
    } else {
      console.log(error);
      return Promise.reject('redirect failed!');
    }
  });
}

module.exports = {
  axios: axios,
  check: check
}