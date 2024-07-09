#!/bin/sh

# Replace BACKEND_SERVICE_IP with the actual value using envsubst
envsubst '$BACKEND_SERVICE_IP' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Inspect the resulting Nginx configuration file
echo "Modified Nginx configuration:"
cat /etc/nginx/conf.d/default.conf

# Replace the placeholder in baseURL.js with the actual environment variable for WEBSOCKET
sed -i "s|__WEBSOCKET_IP__|${WEBSOCKET_IP}|g" /usr/share/nginx/html/static/js/*.js

# Start Nginx server
nginx -g "daemon off;"