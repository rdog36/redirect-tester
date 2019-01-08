Setup 
======

- Add site-specific VirtualHost configurations and redirect rules for testing to `/conf.d/*.vhost.conf`
- Add Tests to be performed to `/test-script/test/*.test.js`
    - ensure that the test script is headed with `var redirect = require('../redirect.test.js')` and calls `redirect.check()` instead of `check()`

Use
======

- The Working Directory is `/opt/redirect` and entering the `shell` should land you there. 
- Run the test suite with `./test.sh` in this directory.