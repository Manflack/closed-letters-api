#### Este proyecto se basa en los principios descritos por Martin Flower en Clean Code, y sus principios SOLID. En conjunto a la implementación de Hexagonal Architecture en Typescript.
---

Para correr el proyecto es necesario tener instalado npm y haber instalado con anterioridad las dependencias:
`npm install`
Ejecución de dev:
`npm run dev`

# Files
---
- En el archivo `InvalidCharacters` están definidos los carácteres no admitidos bajo ninguna circunstancia.
- En `CharClosedPreset` están definidos los "carácteres normales" basados en el challenge.

# Test
---
Puede probar las API's con los siguientes pasos:
- 1, analiza con base de datos normal
- 2, guarda un caracter adicional
- 1, comprueba que no se haya afectado el funcionamiento con la base de datos normal
- 3, comprueba que en la api de base de datos extendida si cuenta el carácter adicionado
- 4, resetea la base de datos extendida
- 2, comprueba que se haya eliminado el conteo de la base de datos extendida

# APIs
---
[1] Analizar palabra con database manual:
```sh
curl --location --request POST 'localhost:3000/api/v1/analyze-word' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "El 37% de los humanos está bancarizado"
}'
```

[2] Guardar carácter en database extendida:
```sh
curl --location --request POST 'localhost:3000/api/v2/save-char' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": [
        {
            "char": "[",
            "quantity": 1
        }
    ]
}'
```

[3] Analizar palabra con database extended:
```sh
curl --location --request POST 'localhost:3000/api/v1/analyze-word' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "El 37% de los humanos está bancarizado["
}'
```

[4] Reset extended database:
```
curl --location --request POST 'localhost:3000/api/v2/reset-database'
```