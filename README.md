Asegurarse de tener instalado docker

Correr el comando para buildear la imágen: \n
docker build -t backend_toolbox .

Luego
docker run -d -p 8000:8000 --name backend_toolbox backend_toolbox

