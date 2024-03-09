FROM node:14 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/conf.d

EXPOSE 80

COPY startnginx.sh /startnginx.sh
RUN chmod +x /startnginx.sh

CMD ["/startnginx.sh"]