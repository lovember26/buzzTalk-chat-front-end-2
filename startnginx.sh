#!/bin/sh
# Define full backend service URL
export BACKEND_SERVICE_URL="http://$BACKEND_SERVICE_IP:8000/"

# Print debug information
echo "Backend service URL: $BACKEND_SERVICE_URL"

# Replace BACKEND_SERVICE_URL with the actual value using envsubst
envsubst '$BACKEND_SERVICE_URL' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Inspect the resulting Nginx configuration file
echo "Modified Nginx configuration:"
cat /etc/nginx/conf.d/default.conf

# Start Nginx server
nginx -g "daemon off;"