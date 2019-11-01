About
======

This is a lightweight Docker-based tool that allows you to test Apache mod_rewrite redirects on a test server with Mocha. The core functions of this tool were written by Remie Bolte and taken from the following article: https://medium.com/@remie/creating-a-realiable-and-scalable-redirect-server-with-docker-mocha-tests-ftw-86f98bb8f4a8
The code snippets have been adapted into an easy to use and deploy Docker box and their functionality has been expanded, adding a simple spec-test generator, a basic httpd.conf diff script, recursive reading of directories containing configuration files, and the ability to run the tests on the live web.



Setup
======

- Add site-specific VirtualHost configurations and redirect rules for testing to `/conf.d/*.vhost.conf`
    - An example is provided with `example.vhost.conf`
- Add Tests to be performed to `/test-script/test/*.test.js`
    - ensure that the test script is headed with `var redirect = require('/opt/redirect/redirect.test.js' )` and calls `redirect.check()` instead of `check()`
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
- A basic error log is generated in `/log/error.log`.

Utility Scripts
---------------

Navigate to `/utility-scripts` and enjoy the following extra functions:

- `./test-generator.sh` will create a basic, functional Mocha spec test files (.test.js) in `/test-script/test` for two different inputs:

	- the specified `.vhost.conf` files
	- all `.vhost.conf` files in a specified filepath

By default the test will redirect from the hostname to the first RewriteRule target found in your vhost file. The test can be modified to your liking from there.

- `./httpd-compare.sh` specifically diffs the Include statements in your `httpd.conf` file with one called `httpd-prod.conf`. Grab your `httpd.conf` from your Production Apache server, place it in `conf.d`, and rename it to `httpd-prod.conf`, then run this script to diff them.
