#!/bin/bash

## Add an additional configuration file to Apache for testing purposes
# echo "Include /usr/local/apache2/conf.d/redirect-test.conf" >> /usr/local/apache2/conf/httpd.conf;

## Start Httpd
httpd

## Run tests
npm install
exec node_modules/.bin/mocha

## Cleanup additional Apache configuration file
echo '' > /usr/local/apache2/conf.d/redirect-test.conf