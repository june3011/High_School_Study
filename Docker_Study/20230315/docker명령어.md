## docker pull python:3.10

docker python 이미지 가져오기

#

## docker images

이미지 리스트 보기

#

## docker run -d -it -p 5000:5000 --name mypython python:3.10

포트 5000번 포트포워딩

이름 mypython

image python 으로

#

## docker ps

현재 돌아가고 있는 프로세스 확인

#

## docker stop mypython

mypython container 정지

#

## docker rm mypython

mypython contaier 삭제

#

## docker rmi myython

mypython image 삭제

#

## docker cp app.py mypython:/app.py

현재 폴더에 잇는 app.py를 컨테이너 mypython에 루트 경로에 app.py로 복사

#

## docker exec -it mypython bash

#

## pip install flask

flask 모듈 설치

#

## python app.py

app.py 실행

#

## docker commit CONTAINER_ID myflask:3.10

## docker run -it -d --name myflask_container -p 5000:5000 myflask:3.10

## docker tag myflask:3.10 june0623/myflask:3.10

## docker login

## docker push june0623/myflask:3.10

서버에 image 파일 올리기

#

## docker build -t make_my_flask .

dockerfile로 image 생성
