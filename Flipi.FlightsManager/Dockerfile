FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

COPY Flipi.FlightsManager/*.csproj ./
RUN dotnet restore

COPY Flipi.FlightsManager/ ./
RUN dotnet publish Flipi.FlightsManager.sln -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "Flipi.Flights.dll"]