## Este proyecto se basa en los principios descritos por Martin Flower en Clean Code, y SOLID.

### - En el archivo InvalidCharacters están definidos los carácteres no admitidos bajo ninguna circunstancia.
### - En CharClosedPreset están definidos los "carácteres normales" basados en el challenge.


Dejo en forma de curl todas las API's creadas:

Analizar palabra con database manual:
```sh
curl --location --request POST 'localhost:3000/api/v1/analyze-word' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "El 37% de los humanos está bancarizado"
}'
```

Guardar carácter en database extendida:
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

Analizar palabra con database extended:
```sh
curl --location --request POST 'localhost:3000/api/v1/analyze-word' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "El 37% de los humanos está bancarizado["
}'
```

Reset extended database:
```
curl --location --request POST 'localhost:3000/api/v2/reset-database'
```