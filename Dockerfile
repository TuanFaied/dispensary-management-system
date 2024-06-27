FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install 

COPY . ./ 

RUN yarn build

FROM nginx:1.25.1


COPY --from=build /app/build /user/share/nginx/html

EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]