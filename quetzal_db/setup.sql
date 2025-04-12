-- Create employees table
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    department TEXT NOT NULL
);

-- Create developers table
CREATE TABLE developers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    programming_language TEXT NOT NULL,
    experience INTEGER NOT NULL
);

-- Create departments table
CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

-- Create projects table
CREATE TABLE projects (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    start_date TEXT,
    end_date TEXT,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Create assignments table
CREATE TABLE assignments (
    id INTEGER PRIMARY KEY,
    employee_id INTEGER,
    project_id INTEGER,
    role TEXT,
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Insert data into employees table
INSERT INTO employees (name, position, department) VALUES ('Samuel Guxegdsa', 'Project Manager', 'HR');
INSERT INTO employees (name, position, department) VALUES ('Nobuhle Ngobeni', 'Analyst', 'Finance');

-- Insert data into developers table
INSERT INTO developers (name, programming_language, experience) VALUES ('Samuel Guxegdsa', 'Python', 5);
INSERT INTO developers (name, programming_language, experience) VALUES ('Nobuhle Ngobeni', 'React', 1);

-- Insert data into departments table
INSERT INTO departments (name) VALUES ('HR');
INSERT INTO departments (name) VALUES ('Finance');
INSERT INTO departments (name) VALUES ('Engineering');

-- Insert data into projects table
INSERT INTO projects (name, start_date, end_date, department_id) VALUES ('Project AI', '2025-01-01', '2025-06-30', 3);
INSERT INTO projects (name, start_date, end_date, department_id) VALUES ('Project DRONE', '2025-03-01', '2025-11-30', 2);

-- Insert data into assignments table
INSERT INTO assignments (employee_id, project_id, role) VALUES (1, 1, 'Manager');
INSERT INTO assignments (employee_id, project_id, role) VALUES (2, 2, 'Analyst');
INSERT INTO assignments (employee_id, project_id, role) VALUES (3, 1, 'Developer');
INSERT INTO assignments (employee_id, project_id, role) VALUES (4, 2, 'Developer');

-- Update a project in the projects table
UPDATE projects
SET name = 'Therapeautic', 
    start_date = '2025-01-01', 
    end_date = '2025-12-31', 
    department_id = 1
WHERE id = 2
;
UPDATE projects
SET name = 'Agrostone', 
    start_date = '2025-01-01', 
    end_date = '2025-12-30', 
    department_id = 2
WHERE id = 3;

-- Insert new projects into the projects table
INSERT INTO projects (id, name, start_date, end_date, department_id) VALUES
(4, 'Agrotone', '2025-02-01', '2025-11-30', 2),
(5, 'Hydropetro', '2025-03-01', '2025-12-31', 4),
(6, 'Future Networks', '2025-04-01', '2025-10-31', 5),
(7, 'SmartTech Integration', '2025-05-01', '2025-09-30', 6);

-- Delete the project named 'Project AI' from the projects table
DELETE FROM projects
WHERE name = 'Project AI';

-- Insert new departments into the departments table
INSERT INTO departments (id, name) VALUES
(4, 'Agriculture'),
(5, 'Fintech'),
(6, 'Medical Research'),
(7, 'Security'),
(8, 'Big Data'),
(9, 'Cloud Computing');
