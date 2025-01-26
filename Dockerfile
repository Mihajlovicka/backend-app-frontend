FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run docker:build -- --no-progress

FROM nginx:1.27.2-alpine-slim AS run
COPY --from=build /usr/src/app/dist/front /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf

EXPOSE 80