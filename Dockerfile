FROM node:8-alpine
LABEL MAINTAINER="yhl, yhl@1024hw.org"

ENV TIMEZONE Asia/Shanghai
RUN mkdir -p /app
WORKDIR /app

RUN apk update && \
  apk upgrade && \
  apk add --update tzdata && \
  cp /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && \
  echo "${TIMEZONE}" > /etc/timezone && \
  npm cache clean -f && \
  apk del tzdata && \
  rm -rf /var/cache/apk/*

ADD package.json .
# Install dependencies
RUN yarn

ADD . .
