# stage 1, build app
FROM node:17-alpine3.14 as builder

# create new folder for app
RUN mkdir /react-app
WORKDIR /react-app

# copy the package.json to install dependencies
COPY ["package.json", "tsconfig.json", "/react-app/"]

COPY ./ /react-app/

# install the dependencies
RUN cd /react-app && npm install

# build the project
RUN npm run build

# stage, based on Nginx
FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# copy from the stage 1
COPY --from=builder /react-app/build /usr/share/nginx/html

EXPOSE 3000 80
