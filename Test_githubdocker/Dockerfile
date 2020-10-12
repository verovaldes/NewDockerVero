# Esto se ejecutará en una imagen de Linux, por lo que su estructura será la de un
#archivo de Linux.
FROM node:carbon
# La imagen utilizará el código que usted incluya en la carpeta dentro de la imagen de
#Linux.
WORKDIR /usr/src/app
# A continuación, copiará de nuevo todo lo que hay en la carpeta actual (ese será todo
#el código de JS).
COPY . .
# Entonces, se ejecutará "npm install" para obtener todos los módulos del nodo e
#incluirlos en la imagen (cargada previamente).
RUN npm install
# Para poder interactuar con la web deberá exponer un puerto, en este caso el 8080.
EXPOSE 8080
# Finalmente, para ejecutar la imagen deberá ejecutar también el servidor web. Para
#ello, tendrá que indicarle que ejecute el comando "npm start".
CMD ["npm", "start"]
## Más información
# Para crear esta imagen, utilice la siguiente línea (sin #):
#docker build -t node-example .
#Esto indicará a Docker que cree (build) la imagen del Dockerfile a nivel del root ( .
#) y le ponga la etiqueta "-t" como "node-example". No olvide el punto, ya que así es
#como Docker sabe dónde buscar el Dockerfile.
#docker run -p 3141:8080 -d node-example
#Esto indicará a Docker que ejecute (run) la imagen creada y etiquetada como
#"user1/node-example", que exponga el puerto 3141 en el equipo que haga de host, que
#busque el puerto 8080 en el contendedor de Docker (-p 3141:8080) y que ponga en marcha
#el proceso como si fuera un proceso daemon (-d) que se ejecuta en un segundo plano.
