// Copyright 2015-2016, Google, Inc. Licensed under the Apache License, Version
// 2.0 (the "License"); you may not use this file except in compliance with the
// License. You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

'use strict'

// Hierarchical node.js configuration with command-line arguments, environment
// variables, and files.
const nconf = require('nconf')

nconf
// 1. Command-line arguments
  .argv()
// 2. Environment variables
  .env([
    'CLOUD_BUCKET',
    'DATA_BACKEND',
    'GCLOUD_PROJECT',
    'MONGO_URL',
    'MONGO_COLLECTION',
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'NODE_ENV',
    'OAUTH2_CLIENT_ID',
    'OAUTH2_CLIENT_SECRET',
    'OAUTH2_CALLBACK',
    'PORT',
    'SECRET',
    'COOKIE_NAME',
    'COOKIE_MAX_AGE_IN_HOURS',
    'FRONTEND_ROOT'
  ])
// 3. Config file .file({ file: path.join(__dirname, 'config.json') })
// 4. Defaults
  .defaults({
  // Typically you will create a bucket with the same name as your project ID.
    CLOUD_BUCKET: 'sytac-quiz2',
  // dataBackend can be 'datastore', 'cloudsql', or 'mongodb'. Be sure to
  // configure the appropriate settings for each storage engine below. If you are
  // unsure, use datastore as it requires no additional configuration.
    DATA_BACKEND: 'datastore',

  // This is the id of your project in the Google Cloud Developers Console.
    GCLOUD_PROJECT: 'sytac-quiz2',

  // Connection url for the Memcache instance used to store session data
  // MEMCACHE_URL: 'localhost:11211',
    MEMCACHE_URL: 'memcache:11211',

  // MongoDB connection string
  // https://docs.mongodb.org/manual/reference/connection-string/ MONGO_URL:
  // 'mongodb://localhost:27017', MONGO_COLLECTION: 'books', MYSQL_USER: '',
  // MYSQL_PASSWORD: '',

    OAUTH2_CLIENT_ID: '385431397485-phq68ort7nhlatcnha6f4dff7o8ddvj8.apps.googleusercontent.com',
    OAUTH2_CLIENT_SECRET: 'sg8fIwSBVaylcMKD_wsDXneU',
    OAUTH2_CALLBACK: '/auth/google/callback',

  // Port the HTTP server
    PORT: 8080,

    SECRET: `-----BEGIN RSA PRIVATE KEY-----
MIIJKQIBAAKCAgEAhOftYoeNoibharF3tw1ohQbiHwX8OrBBnIzgvF6Sl15sEmh8
uJY1tuYFJ6PAwSGUBlkhoi0Mkmf8hwqrZMgGi4pd5wHZ4RgiFNV/YGtD78A1O2G2
rC85hzIQzFcDXguGrSiRdDKe7okFJBpS0J/kv2V6taiNW+zn9VTlKpZr9FWtKV6t
e+L2ioY6SQOfvskgL7tzWCTRg4hlkz1Sjpt9qANqBil9OCoEAjTCR+9wc+wd2zhH
lCy1RiYhF8qnWOY7/EJ6eKx2EMr+mdFRXVYNJLK0HFUgCL7bTo12apP3Hxmpei+m
EoE6LVOo0PZ0JMNI6cRpt1cKmJNgDcoq0ygQRC+OlkfZs8IQ19JDHX5JlMxuNnPl
+6zyeKN3Skx0m+fIwRYgd+9oRyVmuVbqN17/SDG71fp5+w/TmXJ15TdUC7W80JC7
xHkobvzwttlQ2L5E42dsiV8Y4SFxq8SYNyRJG8CxFn8Sr7GH8Wn8p5EkUKO/mDfZ
wmWhNFTCmhrZhPcs9WfJcoDy+v8MYPMdfK37tM6nsCbGMLG5khvtKZWTZ4crYX7h
obba7KhNXUgvuhnWwriznVhM1VXQk+8E1W8G7EfiA6tRNwa0Yg5jtzDzr8vVlDY6
AVqTVc6xpp6i8TRdrbXiwHy0+w1xV5HQ/CqFIKbZ8C+BuDf2CzLzoGizFusCAwEA
AQKCAgAxylF8YBwHa1l3hxS6VyOY8oMz7CIaOn3aEE0BRMzWOGF0ZACVhnCJHJNB
zm8f61xxJGMdRpM3Jg3M6YpcLzOEg0m6iU7+rPPXqkQV8xl4cCGBJZIx319F7tOs
OczhJqBFrrUPOwefhWWPqOzti3k+2t2lwId0sMQVfMB9u+yllJNStE155AVI0BB1
2g22g9KzDx6fHuv+wtKK3qZXFpl0oBLQTCrFJ7houystl94hD4v/3I20TSt8JDyx
lRIsk9RVJPKM0s9Ia0QGjAxXUy2JWglvs9RUcmvmecirFNO3qv168O7eb9tDr9vG
rQ3F2AMw0IxqSwmFL3EEuYBhqtispd4h17ra/Uv/ao8QinD8LDzsvGF62qqlFodg
QhSvtLJ9M8XxgK+ajx7CNzrW5DGEPz18VZEFDfzyFhAJKkqFmDhFisvoDe6r9l/J
aIMCH36ly8jZRo93BnodQrbSrrBKx3+HETuY9AHbZZR4CQyg3Kl24Lcqfzxm3B9W
VzTf8/sWAFEJnRiucEfqIyUlgV3AyqSf568jvadIRliDkU4eM1Pz2H0IX4IgtLUo
8ixR622JzSqaJiMyZavAc3qQFwm0OAE4VJJKtkQ0NgPefONY6sGgMBd9X5GjGdNQ
XOO3+497hsAOuU5OAP/iM6kRQjiUjDFPhNAWjLDYw1mGKGU+AQKCAQEA4KMcb3W3
BfZV7t9hm+lJbBQwWT4kP3Nlt5QSfXX+5n4IC422j2fC4u8snpkqkZ4sUeCtLtwv
mRdzinxAYa8o6pZd4H0svMan7oDmonXRxsz9IYnq4iCEeKvMeDRYAY4W3DjsLQIH
3Duu8coJa8rMWCmnt1FkqLg/NazuzqzngDRARjF7FX6DuZdkuAJxOlswfT4g8w43
psqbZDur/c2j/+x2gxLz8iK6lOgkr8i6fXnKHOM3WZsXqopP3GnsqiEUvUasBgns
3khnU6jUAL75c6m0bT5AY8EEXAr2SKBeS/bpvZwm+J5bqYGUExOvCymJXLUrPl3l
dGvIKYrGIn4uSwKCAQEAl3YyoZ8ZmD7pFl8yfAKiUtO3Q3bNNTesZHV077mcUsPn
mtkaOd6zJu0mjs6Gg7hF0v39TfAZDMb9wJTNrvwOOV0GTPc+S8kGe4EVHJ4GBeQd
4qLBBy5F6JLIjyms3MxFSnYtpjPq0cPh9uf8g49MpOYQbV4f8bkY5qGyZyrJ6ngl
CdSWwu7hyC9kYlFspTmPfdDiPPzWdYGLjeTwBNyKinn79DUaaRqfcdfbgujqgm1E
EiI8R6Biki+YvyitXHGcd0gB6xG+rrsdPXCvS+FnXtFr/MmQgo05DfxqmV3cvMf0
CQE5kyJO0aYojo3e0FhEaLIeYdZhGmGU/V++pNjV4QKCAQEAl8FZimrp1BtQfmlm
VZ/KPDt/VirG7h6VTum3fA5kv23RHY0FEeg1Hn4ZlKNAwNMsebvhA1E4zqGrKpk6
HUPpzmD61pd5y6Yg+N0X8hTKPRVqxGeZyF3TYHofTe1+rr5A71F9LAK9MKkZTLsC
llGQrtalORDBgcHG4goL4o+obVHfQgxXbHPlpVGDd1QfDh9gqJt6QvkN253wUEyH
qpRsAI7MmUwKhT+08LfLYP2oDvBh/BX75IsD9/Asd2kPuvdSPXQq7oFyBdDADSJ2
5nIdr2esPkjZ0wooWc4GB5ZfXc5WpgOByF+i6OZjFGgtzsqmw3yY1C82vem6dWYM
6Gx59QKCAQAJ9C+hpYYWFlRVLw5vTfEDBnztxxn3XGBM/dcghg869Tr8VzY9BWC6
ty0oh3QZpfuYwS5rd9L9nvpANMdLr67zoCRw3HLQojZ12WbcyZnVu0cnhNCwux7H
CRZ7Kh79J8OKADhByvmsrXXlNxvGPZ2o3KHJvjzVMvfq+Ed0NkCs0xaEDd+WkgJu
mIa9W2KLfTvr5dVocqlZcZkNSzVm7GOCdD/VrcO9ko1V+vynHs2CotGta2iQwH6Z
4tzj+zVhdOn2gNn3a+QfMZbbWdN7ZiXX+mVhaJHBsqxEOgl7aMq/8VgdW2JARCnv
5z6VF8fD43kjdElA3sjk5fLXr/okdUehAoIBAQCVgiitjvXP9+YpMGT9WnQICIdG
eO/Lid0wnImW+6xKBASMYGafEUnAG2tOBjLAFx/k5mI2wURkI06/xX6Fzpa2xHgP
m7NGhwABj54lqBkr/Xb0eeqalZvjDwA6d+DQSla1W0dYl+F1o0XTdjp6LqEBVBlc
omZdk2jXDU7uRVm7/LQY6MPfXlo+YvrHRQFvNDICngq/e533BC5XNN1OPBKSulhm
UC5kqLvaTv3ned4vwFR66cghXdH9k/LlxdOANJzekTCqEGsIwca6bX1OywtfDh78
OoQt4lUtdx6HCz3PuLEgv+LbLOe4bGhS5dnNERXiTJMr6fRtv/X7EmDVRYKe
-----END RSA PRIVATE KEY-----`,
    COOKIE_NAME: 'app-cookie',
    COOKIE_MAX_AGE_IN_HOURS: 48,
    FRONTEND_ROOT: 'http://sytac-quiz2.appspot.com/'
  })

module.exports.config = nconf
