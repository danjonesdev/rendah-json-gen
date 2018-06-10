/* eslint-disable no-console */

import request from 'superagent';

const FetchEndpoint = (url, callback) => {
  request
    .get(url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (res.status === 200) {
        if (typeof callback === 'function') {
          return callback(res.body);
        }
        return res.body;
      }
      if (err) {
        console.log(err);
      }
      return console.log(res);
    });
};

export default FetchEndpoint;
