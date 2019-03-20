// 拼接url参数
function splitUrl(url, options) {
  let urlNew = url;
  const paramsArray = [];
  Object.keys(options).forEach(key => paramsArray.push(`${key}=${options[key]}`));
  if (Object.keys(options).length === 0) {
    return url;
  }
  if (/\?/.test(urlNew) === false) {
    urlNew = `${urlNew}?${paramsArray.join('&')}`;
  } else {
    urlNew += `&${paramsArray.join('&')}`;
  }
  return urlNew;
}

const HOST = 'http://localhost:3000'

const request = (url, method = 'GET', data) => {
  return fetch(`${HOST}${url}`, {
    body: data && JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'content-type': 'application/json'
    },
    method, // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json()) // parses response to JSON
  .catch(e => { console.log('error======>', e) })
}




export default request