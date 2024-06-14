FROM node:21-alpine as BULID_IMAGE
WORKDIR /app
COPY  ./package*.json ./
COPY  ./yarn.lock ./
RUN yarn
COPY . .
EXPOSE 3000
CMD [ "yarn", "dev" ]



# COPY  ./tsconfig.json ./
# COPY  ./tsconfig.node.json ./
# COPY  ./vite.config.ts ./

