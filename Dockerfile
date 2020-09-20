FROM node:alpine as builder
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod


FROM nginx:alpine
COPY --from=builder /app/dist/my-books-ui /usr/share/nginx/html