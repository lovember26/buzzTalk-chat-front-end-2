#!/bin/sh

# Replace BACKEND_SERVICE_IP with the actual value using envsubst
envsubst '$BACKEND_SERVICE_IP' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Inspect the resulting Nginx configuration file
echo "Modified Nginx configuration:"
cat /etc/nginx/conf.d/default.conf

# Start Nginx server
nginx -g "daemon off;"