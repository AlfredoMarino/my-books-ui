FROM node:alpine as builder
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod


FROM nginx:alpine
COPY --from=builder /app/dist/my-books-ui /usr/share/nginx/html
COPY --from=builder /nginx/my-books-nginx.conf /etc/nginx/conf.d