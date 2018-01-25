FROM index.24haowan.com/docker-node8-pm2:1.0.0
MAINTAINER yhl, yhl@1024hw.org

ADD package.json .
# Install dependencies
RUN yarn

ADD . .
