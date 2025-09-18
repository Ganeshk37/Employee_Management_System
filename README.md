# 🧑‍💼 Employee Management System

A full-stack web application to manage employees using React (Frontend), Spring Boot (Backend), and MySQL (Database).

## 🚀 Features
- Add, update, delete, and view employees (CRUD).
- Frontend built with React, Bootstrap, and Ant Design.
- Backend built with Spring Boot and Spring Data JPA.
- Database integrated with MySQL.
- REST APIs for communication between frontend and backend.
- Responsive UI for easy usage.

## 🏗️ Project Architecture
Frontend (React) → Backend (Spring Boot REST APIs) → Database (MySQL)

## ⚙️ Tech Stack
- **Frontend**: React, Bootstrap, Ant Design, Axios  
- **Backend**: Spring Boot, Spring Data JPA, Hibernate  
- **Database**: MySQL  

## 📦 Installation & Setup
1. **Clone the repository**
```bash
git clone <your-repo-link>
cd employee-management-system
Setup Database (MySQL)

Create a database named employeedb in MySQL.

Update application.properties file in backend with your MySQL username & password:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/employeedb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
Run Backend (Spring Boot)

Open backend folder in IntelliJ or Eclipse.

Run the Spring Boot application.

Backend will start at: http://localhost:8080

Run Frontend (React)

bash
Copy code
cd frontend
npm install
npm start
Frontend will start at: http://localhost:3000

It will connect to backend running on http://localhost:8080

🔑 Important Annotations
@Entity, @Table, @Id → Database mapping

@RestController, @GetMapping, @PostMapping → API endpoints

@Service, @Repository, @Autowired → Business & database logic injection


