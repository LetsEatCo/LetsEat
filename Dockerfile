FROM mhart/alpine-node:10 as build

WORKDIR /usr/app
COPY . .

RUN yarn install --production
RUN mv node_modules node_modules--production
RUN yarn install

ENV NODE_ENV production

RUN yarn build && yarn --production

FROM mhart/alpine-node:base-10

WORKDIR /usr/app

ENV NODE_ENV production

COPY --from=build /usr/app/node_modules--production ./node_modules
COPY --from=build /usr/app/build ./build
COPY --from=build /usr/app/package.json ./package.json

CMD ./node_modules/next/dist/bin/next-start build