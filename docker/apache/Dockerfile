FROM httpd:2.4-alpine

## Installing NodeJS
RUN apk add --update nodejs npm

## Copy Apache redirect rules
RUN echo "Include /usr/local/apache2/conf.d/redirect.conf" >> /usr/local/apache2/conf/httpd.conf;

## Set Default directory to the one with test.sh
WORKDIR /opt/redirect
