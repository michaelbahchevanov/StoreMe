FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy and restore csproj separately
COPY *.csproj ./
RUN dotnet restore

# Copy and release everything else
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
COPY --from=build-env /app/out .

# Expose ports and healthcheck
EXPOSE 5100/tcp
ENV ASPNETCORE_URLS http://*:5100
HEALTHCHECK --interval=30s --timeout=3s --retries=1 CMD curl --silent --fail http://localhost:5100/hc || exit 1

# Start
ENTRYPOINT [ "dotnet", "Sweepi.UserServiceAPI.dll" ]