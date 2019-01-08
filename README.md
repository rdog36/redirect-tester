Setup 
======

- Add site-specific VirtualHost configurations and redirect rules for testing to `/conf.d/*.vhost.conf`
    - An example is provided with `example.vhost.conf`
- Add Tests to be performed to `/test-script/test/*.test.js`
    - ensure that the test script is headed with `var redirect = require('../redirect.test.js')` and calls `redirect.check()` instead of `check()`
    - `redirect.check`'s parameters are: (host, path, expectedRedirect, statusCode)
        - `host` is simply the hostname you are testing - example.com, teleflex.com, etc.
        - `path` is anything in the URL that you are looking for after the hostname - `/careers`, `/products/<someRegEx>`, etc.
        - `expectedRedirect` is the full desired result of your test
        - `statusCode` is the HTTP Status Code and will default to `302` if not specified
    - An example is provided with `example.test.js`

Use
======

- The Working Directory is `/opt/redirect` and entering the `shell` with `md shell` after the Docker VM is started should land you there. 
- Run your test suite with `./test.sh` in this directory.