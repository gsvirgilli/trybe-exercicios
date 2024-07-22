FROM mysql:8.0.32

# Definindo variáveis de ambiente com o formato correto
ENV MYSQL_ROOT_PASSWORD=password

# Copia o script SQL para o diretório apropriado no container
COPY ./database/01_create_database.sql /docker-entrypoint-initdb.d/data.sql
