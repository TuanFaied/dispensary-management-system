FROM openjdk:17-jdk AS build

COPY target/dispensaryapp.jar .

EXPOSE 8081

ENTRYPOINT [ "java","-jar","dispensaryapp.jar" ]


