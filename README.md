# Welcome to Backend Test!

Proyecto simple con tecnología de Node.js, con el poder de TypeScript, Express y MongoDB, es una aplicación que permite guardar usuarios y listarlos.

Su arquitectura es bastante simple con 3 capas, donde el repositorio se encarga de acceder a la base de datos mediante el conector de mongodb, en esta capa cada función no debe contener lógica de negocio, solo exponer los datos.

El movimiento entre estas capas se hace por medio de DTO's.

En la capa de servicios va la lógica de negocio y las llamadas respectivas al repositorio, mientras que en la capa final del controlador se expone para procesar las requests y devolver el JSON necesario.

Es importante recalcar que se usa class-validator para probar que los datos que entran a mongo sean los correctos.

## Despliegue

La aplicación fue desplegada con ayuda de DigitalOcean.

Para correrlo en local, compilarlo y usar nodemon para correrlo. 

tsc && nodemon dist/server.js

# Librerías incluidas

Faker:  Se encarga de generar imágenes aleatorias en el registro  

Mongose: Conector de MongoDB<br>
Dotenv: Manejo de variables de entorno<br>
Class validator: Validación entrada de datos<br>
Cors: Protección para el usuario <br>

# Variables de entorno

```
# PORT
PORT = 2000

# DATABASE
DB_HOST=mongodb+srv://teamzz111:teamzz111@cluster0.mgtqle6.mongodb.net/test?retryWrites=true&w=majority&wtimeoutMS=5000
DB_PORT=27017

# TOKEN
SECRET_KEY = secretKey

# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = *
CREDENTIALS = false
```
