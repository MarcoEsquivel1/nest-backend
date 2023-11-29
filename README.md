<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Uso prueba en linea
1. Vea: <a href="https://hungry-handbag-toad.cyclic.app/api" target="blank">https://hungry-handbag-toad.cyclic.app/api</a>
2. El serividor puede tardar un momento en levantasrse por lo que debes refrescar la pagina hasta que muetre la documentación de la API
3. puedes usar el endpoint auth/login con el sisguiente usuario, o crear uno propio
```
{
    "email": "super@email.com",
    "password": "Abc123"
}
```

# Teslo API - Descargar proyecto
1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar variables de entorno
5. Levantar base de datos en docker
```
docker-compose up -d
```

6. Levantar: ```yarn start:dev```
7. Ejecutar Seed
```
http://localhost:3000/api/seed
```
