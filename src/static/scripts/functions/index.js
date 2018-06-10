/* eslint-disable */

// Get url params
// https://davidwalsh.name/query-string-javascript
export function getUrlParams(item) {
  item = item.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + item + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Load script async
export function loadScriptAsync(src, callback) {
  const wf = document.createElement('script');
  const s = document.getElementsByTagName('script')[0];
  wf.src = src;
  wf.async = 'true';
  if (callback) {
    wf.onload = callback;
  }
  s.parentNode.insertBefore(wf, s);
}

export function buildReadableDate(input) {
  const date = new Date(input),
  month = ('0' + (date.getMonth() + 1)).slice(-2),
  day = ('0' + date.getDate()).slice(-2), year = date.getFullYear();
  return month + '.' + day + '.' + year;
}
