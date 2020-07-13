FROM node:12.13-alpine As development

RUN npm install yarn -g

WORKDIR /usr/src/api

COPY package*.json ./

RUN yarn install --production=false

COPY . .

RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package*.json ./

RUN yarn install --production

COPY . .

COPY --from=development /usr/src/api/dist ./dist

RUN ls -al

CMD ["node", "dist/main"]