![image](https://github.com/b4kt/nodecurl/assets/94001761/0036db36-f993-4ffd-b7a3-183659d7410c)basic nodejs app to accept CURL (https://curl.se/) uploads 

your_token is what you change to change the login, it can be any plaintext password

Example upload command for server
curl -F "file=@C:\filepath\" -H "Authorization: Bearer your_token" http://example.example:3000/upload

Dependencies
--
|NodeJS|

NPM Dependencies
--
|Express|
|Multer|

