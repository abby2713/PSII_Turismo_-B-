# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en la carpeta de la aplicación
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará (asegúrate de que coincida con el puerto que tu aplicación usa)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
# # Comando para iniciar la aplicación
# CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]
