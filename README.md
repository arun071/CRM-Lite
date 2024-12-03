# CRM Lite Application

CRM Lite is a lightweight Customer Relationship Management application designed to manage contacts, leads, sales pipelines, tasks, and basic reporting. It is built with a **Spring Boot** backend, a **React** frontend, and uses **MySQL** for data storage. This application provides a simple, user-friendly interface to help businesses manage customer relationships and track important business processes.




## Features

- **Contact and Lead Management**: Track and manage customer contacts and leads effectively.
- **Sales Pipeline**: Visualize and manage sales processes and stages.
- **Task Management**: Organize tasks and assignments for improved productivity.
- **Basic Reporting**: Generate and view basic reports for performance insights.





## Technologies 

The CRM Lite application is built using the following technologies:

- **Spring Boot**: A Java-based framework used for building the backend RESTful API.
- **React**: A JavaScript library for building the frontend user interface.
- **MySQL**: A relational database management system used to store application data.
- **Docker**: A platform used to containerize the application, ensuring consistency across environments.
- **Docker Compose**: A tool used for defining and managing multi-container Docker applications.
- **JDK 17**: The Java Development Kit used for building and running the Spring Boot application.




## Running the Application
### Prerequisites

Before running the CRM Lite application, ensure you have the following tools installed on your system:

- **Docker**: A platform for developing, shipping, and running applications. [Install Docker](https://www.docker.com/get-started).
- **Docker Compose**: A tool for defining and running multi-container Docker applications. [Install Docker Compose](https://docs.docker.com/compose/install/).




### 1. Create a `docker-compose.yml` File

Create a file named `docker-compose.yml` in your project root and paste the following content:

```yaml
version: '3'
services:
  mysql:
    image: mysql:8.0
    ports:
      - "3307:3306"
    environment:
      MYSQL_ROOT_PASSWORD: P@ssw0rd
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      MYSQL_DATABASE: db

  spring-boot-app:
      image: arun071/crm-backend
      ports:
        - "8080:8080"
      depends_on:
        - mysql
      environment:
        SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/db
        SPRING_DATASOURCE_USERNAME: user
        SPRING_DATASOURCE_PASSWORD: password
      restart: always

  react-app:
      image: arun071/crm-frontend
      ports:
        - "5173:80"
```

### 2. Start the Application

To start the application and its services, execute the following command in your terminal:

```bash
docker-compose up -d
```

This command will start the **MySQL**, **Spring Boot Backend**, and **React Frontend** services in detached mode.

### 3. Access the Application

- **Frontend**: Open your browser and go to [http://localhost:5173](http://localhost:5173) to access the React frontend.
- **Backend API**: Access the backend API at [http://localhost:8080](http://localhost:8080).

### 4. Stopping the Application

To stop the application and remove the running containers, use the following command:

```bash
docker-compose down
```
## Images Used

The following Docker images are used in the application:

- **MySQL**: [mysql:8.0](https://hub.docker.com/_/mysql)
- **Backend (Spring Boot)**: [arun071/crm-backend](https://hub.docker.com/r/arun071/crm-backend)
- **Frontend (React)**: [arun071/crm-frontend](https://hub.docker.com/r/arun071/crm-frontend)

## Environment Variables

### MySQL Service
- `MYSQL_ROOT_PASSWORD`: The root password for the MySQL instance.
- `MYSQL_USER`: The username for the application’s database user.
- `MYSQL_PASSWORD`: The password for the application’s database user.
- `MYSQL_DATABASE`: The name of the database to be created.

### Spring Boot Backend
- `SPRING_DATASOURCE_URL`: JDBC URL pointing to the MySQL database.
- `SPRING_DATASOURCE_USERNAME`: The username to access the MySQL database.
- `SPRING_DATASOURCE_PASSWORD`: The password to access the MySQL database.


