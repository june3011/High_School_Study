docker run -d --name [container name] -- network [network name]

# 네트워크 만들기

docker network create docker-net

# docker mysql 실행 명령어

docker run -d --name mymysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -v e:/mymysql:/var/lib/mysql --network docker-net --network-alias mysql mysql

docker run -it -d --name mynode -p 5000:5000
-v e:/mynode:/app --network docker-net
-e MYSQL_HOST=mysql -e MYSQL_USER=root
-e MYSQL_PASSWORD=password -e MYSQL_DB=word node:18.13.0
