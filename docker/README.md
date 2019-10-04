Quick start guide

Create a self signed SSL certificate
openssl req -newkey rsa:2048 -nodes -keyout certificates/main.key -x509 -days 365 -out certificates/main.crt
