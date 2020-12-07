# etapa de build
FROM node:12-alpine as build-stage

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# etapa de publicação
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
