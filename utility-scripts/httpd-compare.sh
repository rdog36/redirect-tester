diff /app/conf/httpd-prod.conf <(grep -n '^Include' /app/conf/httpd.conf |
sed  -e 's/:[^ ]* /{ r /'    \
     -e 'G;s/.$/&b&}/'       |
sed -nf - -ep       /app/conf/httpd.conf)