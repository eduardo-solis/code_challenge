# Code Challenge

> Practica desarrollada por @carlogilmar en LaunchX - MissionNodeJS

## Dependencias

- Jest: 

Esta dependencia se utilizo para la creación de pruebas de unidad.

- ESLint:

Por medio de esta dependencia se le dio el formato (JavaScript) para los archivos del proyecto.

- Express:

Para crear el servidor con el cual se expuso la API desarrollada.

## Clases desarrolladas

```mermaid
    classDiagram
    class Reader
    Reader: +readJsonFile(path)$
```

```mermaid
    classDiagram
    class StudentService
    StudentService: +getAllStudents(data)$
    StudentService: +getStudentsEmailWithCertification(data)$
    StudentService: +getStudentsWithMoreCredits(data)$
```

```mermaid
    classDiagram
    class StudentController
    StudentController: +getAllStudents()$
    StudentController: +getStudentsEmailsWithCertification()$
    StudentController: +getStudentsWithMoreCredits()$
```

## Flujo de la información

```mermaid
flowchart BT;

    subgraph Paso 1
    A[Reader class]-->|"readJsonFile(path)"|B[explorers.json]
    end

    subgraph Paso 2
    C[StudentService class]-->|"getAllStudents(data)"|A
    C[StudentService class]-->|"getStudentsEmailWithCertification(data)"|A
    C[StudentService class]-->|"getStudentsWithMoreCredits(data)"|A
    end


    subgraph Paso 3
    D[StudentController class]-->|"getAllStudents()"|C
    D[StudentController class]-->|"getStudentsEmailsWithCertification()"|C
    D[StudentController class]-->|"getStudentsWithMoreCredits()"|C
    end

    subgraph Paso 4
    E[Server]-->|"localhost:3000/v1/students/"|D
    E[Server]-->|"localhost:3000/v1/students/emails"|D
    E[Server]-->|"localhost:3000/v1/students/credits"|D
    end

```


## Como se usa

Este proyecto se ejecuta por medio del comando `npm run server` el cual ejecuta el servidor para poder usar la API (usa el formato *JSON*).

La url que se usa es la siguinte:
- `localhost:3000/`

Los endpoints con los que cuenta la API son:

- `localhost:3000/v1/students/`

Que devuleve la una lista de estudiantes.

- `localhost:3000/v1/students/emails`

Que devuleve la una lista de emails de los estudiantes que han tenido una certificación.

- `localhost:3000/v1/students/credits`

Que devuleve la una lista de estudiantes que han tienen creditos mayor a 500 puntos.