#!/bin/bash

while test $# -gt 0; do
    case "$1" in
    	-l | --live)
			export LIVE=true
			break
			;;
    esac
done

## Add an additional configuration file to Apache for testing purposes
# echo "Include /usr/local/apache2/conf.d/redirect-test.conf" >> /usr/local/apache2/conf/httpd.conf;

## Start Httpd
httpd

## Run tests
npm install


## Cleanup additional Apache configuration file
echo '' > /usr/local/apache2/conf.d/redirect-test.conf


if [[ $LIVE == true ]]; then
	env LIVE=true node node_modules/.bin/mocha
else
	exec node_modules/.bin/mocha
fi