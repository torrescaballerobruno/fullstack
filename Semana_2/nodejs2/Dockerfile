FROM node
LABEL version="1.0"

#Crear el directorio de trabajo
RUN mkdir -p /opt/app

#Se establece el directorio de trabajo
WORKDIR /opt/app

#Copiamos el archivo package-lock al contenedor
COPY package-lock.json .

#Instalar todas las dependencias o paqueteria que se estan usando en el proyecto
RUN npm install --quiet

#Instalar un demonio de node
RUN npm install nodemon -g --quiet

#Copiar toda la aplicacion
COPY . .

# Exponer un puerto
EXPOSE 8000

CMD nodemon -L --watch . servidor2.js