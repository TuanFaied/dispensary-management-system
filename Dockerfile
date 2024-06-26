FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . ./ 

RUN npm run build

FROM nginx:1.25.1


COPY --from=build /app/build /user/share/nginx/html

EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]