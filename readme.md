docker build -t image-changer:1.0 .
docker-compose up --build -d  
docker run -p 3000:3000 image-changer:1.0

# Image Changer Application

This project serves a random anime image using a Node.js server and Dockerized services.

## Getting Started

### Build the Docker Image

```sh
docker build -t image-changer:1.0 .
```

### Composed servised

docker-compose up --build -d

Run the Docker Container Manually (Optional)

```sh
docker run -p 3000:3000 image-changer:1.0
```

This will run a single instance of the application on port 3000.
