# Usa a imagem oficial do SDK do .NET como base
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

# Copia os arquivos do projeto para o cont�iner
COPY . .

# Publica a aplica��o
RUN dotnet publish -c Release -o out

# Usa a imagem m�nima do ASP.NET Core para reduzir o tamanho final
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app

# Copia os arquivos publicados da etapa de compila��o
COPY --from=build /app/out .

# Define o comando de entrada para iniciar a aplica��o
ENTRYPOINT ["dotnet", "EstagioJaAPI.dll"]

