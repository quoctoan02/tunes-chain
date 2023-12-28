FROM node:16-alpine3.15 as BASE
LABEL author="ductnn"

WORKDIR /dapp

COPY package.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn install --frozen-lockfile

COPY . .
RUN yarn generate

FROM nginx:alpine

WORKDIR /dapp

COPY ./.config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=BASE /dapp/html /usr/share/nginx/html
