
'use strict'

const nconf = require('nconf')

nconf
// 1. Command-line arguments
  .argv()
// 2. Environment variables
  .env([
    'SECRET'
  ])
  .defaults({
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
-----END RSA PRIVATE KEY-----`
  })

module.exports.config = nconf
