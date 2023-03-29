# docker mysql 실행 명령어

docker run -d --name mymysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=word -p 3306:3306 -v d:/mymysql:/var/lib/mysql mysql:5.7

# docker logs mymysql <- docker logs 보는 명령어

##

#

docker exec -it mymysql bash

##

docker run -d --name mynode -p 5000:5000 -v d:/mynode:/app node:18.13.0

##

docker run -it -d --name mynode -p 5000:5000 -v C:/Users/DGSW/Documents/GitHub/High_School_Study/Docker_Study/20230322/node_mysql_test/:/app node:18.13.0
docker exec -it mynode bash
