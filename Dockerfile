FROM node:14.18-alpine3.11 AS BUILD_IMAGE

RUN apk --no-cache add \
			yarn \
			bash \
			g++ \
			ca-certificates \
			lz4-dev \
			musl-dev \
			cyrus-sasl-dev \
			openssl-dev \
			make \
			python

RUN apk add --no-cache --virtual .build-deps gcc zlib-dev libc-dev bsd-compat-headers py-setuptools bash curl

WORKDIR /usr/src/app

ARG NPM_AUTH_TOKEN

COPY package.json yarn.lock .npmrc ./

RUN echo "//npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN}" >> .npmrc

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

FROM node:14.18-alpine3.11 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


USER 1000
RUN mkdir -p /home/node/app/
RUN mkdir -p /home/node/app/node_modules
RUN mkdir -p /home/node/app/dist

RUN chown -R 1000:1000 /home/node/app
RUN chown -R 1000:1000 /home/node/app/node_modules
RUN chown -R 1000:1000 /home/node/app/dist

WORKDIR /home/node/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/dist /home/node/app/dist
COPY --from=BUILD_IMAGE /usr/src/app/package.json /home/node/app/package.json
COPY --from=BUILD_IMAGE /usr/src/app/node_modules /home/node/app/node_modules

EXPOSE 3000
CMD ["node", "dist/src/main"]
