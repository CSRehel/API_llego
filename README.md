# API_llego

## Lenguaje y BD utilizados

- Lenguaje de Programación: JavaScript / NodeJs / Express Js
- Base de Datos: Postgres

## Variables de entorno

En la ruta raíz del proyecto se encuentra el archivo ```.env.example``` en donde están todas las variables de entorno necesarias para el funcionamiento del proyecto.
Cree un nuevo archivo .env y luego copie y pegue el contenido del archivo ```.env.example```.

```
PORT = puerto para levantar la app de express. // Por defecto está configurado en el puerto 3000 en el archivo config/config.js
DB_URL = postgres://<usuario>:<contraseña>@<host>:<puerto>/<nombre_base_de_datos> // url de conexión a la base de datos 
```

## Base de Datos

En la carpeta ```db``` se encuentra el archivo ```bd.sql``` el cual contiene el script sql para crear la base de datos en Postgres.

![Company](https://user-images.githubusercontent.com/95497717/216847365-5905c62a-63b8-4ea3-8520-dcf2f009c167.png)

## Consultas API

Asumiendo que estamos en localhost, puerto 3000:

### Obtener todos los empleados (GET)

Puede obtener todos los empleados si consulta la ruta:

```
http://localhost:3000/
```

### Crear un empleado (POST)

Puede crear un empleado si consulta la misma ruta y envía un body con la siguiente estructura (JSON):

```
http://localhost:3000/
---------------------------
{
  "name": "nombre",
  "lastname": "apellido",
  "birthday": "1990-01-01",
  "id_department": 1
}
```

## Restricciones y validaciones

Considere que el proyecto incluye un middleware que valida la data que viene en el payload antes de entrar en el endpoint de creación de usuarios 
y ejecutar la consulta a la base de datos. En el archivo ```schemas/employee.schemas.js``` se encuentra el esquema a utilizar para la validación de los datos.

- name = (String) mínimo 3 caracteres de largo y máximo 100 
- lastname = (String) mínimo 3 caracteres de largo y máximo 100 
- birthday = (Date) mayor a la fecha '01-01-1940' y menor a '01-01-2004'
- id_department = (Number)

