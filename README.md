# SpaceX

The SpaceX app displays information about dragons.

## About app

This app uses additional dependencies Axios, react-router-dom, and react-icons. These dependencies are written in the package.json file

    "axios": "^0.27.2"
    "react-icons": "^4.4.0"
    "react-router-dom": "^6.4.1"
    
When working with the API, I encountered the following problem: the API request stopped working when building static files in docker, although everything worked locally. So I had to fix this problem in quick mode. And I succeeded. The application works correctly.

Unfortunately, I was unable to implement an automatic display of all dragons and user registration. But I will work on these questions before the technical interview

## About build and deploy

##### If you need to work with the code, write npm install in your terminal, then all the necessary dependencies will be added for you locally

    npm install

You can click Dragon 1 or Dragon 2 to see detailed information about the fallen dragon. Also, if you are on the home page, you can click on one of the pictures in the center of the page.

### The application is hosted using Docker, Nginx, and AWS EC2, ECR, Route53. Security certificate added using Certbot.
##### If it is necessary to update the application, stop the "daemon" and perform the following actions:

Build a new static file using the docker build

    docker build -t <<tag>> .
    
Push a local Docker representation using the docker push

    docker push <<tag>>

##### Next, use the key to go to the service and execute the following commands on behalf of the root

Download the latest version of the application using the docker pull

    sudo docker pull <<tag>>

Run the new version as a "daemon" (in the example, the port used during the first setup is specified)

    sudo docker run -d -p 127.0.0.1:8080:80 <<tag>>
    
## About candidate
### You can find out more about the candidate's experience and skills at the link
https://tetiana-chykalova.click/
