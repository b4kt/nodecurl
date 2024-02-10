basic nodejs app to accept CURL (https://curl.se/) uploads 

your_token is what you change to change the login, it can be any plaintext password

Example upload command for server <br>
curl -F "file=@C:\filepath\" -H "Authorization: Bearer your_token" http://example.example:3000/upload

##Dependencies
|NodeJS|
<br>
##NPM Dependencies
|Express|
|Multer|

