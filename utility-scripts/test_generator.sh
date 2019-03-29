#!/bin/bash
if [[ $1 == *".conf" ]]; then
	confsToSpec=$1
else
	confsToSpec="$1/*.conf"
fi

for filename in $confsToSpec; do
 sitename=$(basename "$filename" .vhost.conf)
 echo "$sitename"
 rewriteTarget=$(awk '/RewriteRule/ {print $3} ' $filename)
 sourceDirectory=$(dirname "$filename")
 specDirectory=${sourceDirectory/conf.d/spec}
 touch $specDirectory/$sitename.test.js
 cat > $specDirectory/$sitename.test.js << EOF
	var redirect = require('/opt/redirect/redirect.test.js')

	describe('$sitename.vhost.conf', function() {

	  describe('www.$sitename', function() {
	    it('should redirect to $rewriteTarget',
	        () => redirect.check(
	            'www.$sitename',
	            null ,
	            '$rewriteTarget'));
	  });

	});

EOF
done