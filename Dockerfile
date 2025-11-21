FROM node:14 AS build

WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm install

# 复制源代码并构建
COPY . .
RUN npm run build

FROM nginx as deploy
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
