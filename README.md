<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Prueba Backend Node - Bunker DB

Proyecto REST API hecho con Nest JS. Utiliza Node.js 20 y proporciona una API para interactuar con la base de datos new_developers

## Instalación

Para comenzar con este proyecto, asegúrate de tener Node.js 20 instalado en tu sistema. Luego, sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/brunoandres/Prueba-Backend-Node.git

- 2-Navega hasta el directorio raíz del proyecto:

  ```shell
  cd path del proyecto descargado...
- 3-Ejecuta el siguiente comando para instalar las dependencias

  ```shell
  npm install

## Migraciones

Una vez importada la base de datos, ejecutar los siguientes comandos para realizar migraciones

1. Ejecutar la generación de una nueva migración, en este caso cambia la estructura de las tablas originales. Crea una relación de Employees con Company, quita campo cant_employees de la tabla employees. Cambio el tipo de dato para date_admission y agrego valor por defecto.

   ```bash
   npm run migration:generate --name=UpdateStructure

- 2- Ejecutar la migración generada anteriormente

  ```shell
  npm run migration:run --name=UpdateStructure
- 3- Con estas modificaciones ya se pueden usar los endpoints correctamente

## Iniciar Servidor

Para iniciar el servidor ejecutar el siguiente comando, una vez inciado estará listo en la siguiente ruta: (http://localhost:3000/)


## Endpoints

Para compilar el proyecto en modo dev ejecutar el siguiente comando npm run start:dev, el servidor se ejecutará por defecto en el puerto 3000
generando los siguientes endpoints:
- GET localhost:3000/company/ (Lista todas las compañías con sus empleados)
- GET localhost:3000/company/:idCompany (Lista una compañía con sus empleados pasando como parámetro el id de la compañia) 
- POST localhost:3000/company (Agregar una nueva compañía)
  El body para el post es: {
    "name": "Bunker DB",
    "country": "UY"
  }
- POST localhost:3000/employees (Agregar un employee)
  El body para el post es: {
    "first_name":"BRUNO",
    "last_name":"OVANDO",
    "document_number":"38091463",
    "company": ID generado de la compañia
}
