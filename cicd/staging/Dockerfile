FROM node:14-alpine

ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "start"]