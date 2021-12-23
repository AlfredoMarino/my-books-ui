FROM node:16-alpine as builder
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod


FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/my-books-ui /usr/share/nginx/html
COPY --from=builder /app/nginx/my-books-nginx.conf /etc/nginx/conf.d