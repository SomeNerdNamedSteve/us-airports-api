# US Airports API
------

The U.S. Airports API allows you to grab basic information about select airports in the United States

The list of airports was pulled from the table here: https://en.wikipedia.org/wiki/List_of_airports_in_the_United_States

The response is a stringified array of JSON Objects.  

Each JSON Object has the following format

```
{
    city: //city of the airport
    state: //state of the airport
    faa: //FAA code associated with the airport
    iata: //IATA code associated with the airport
    icao: //ICAO code associated with the airport
    name: //name of the airport
    role: // the role of the airport (see role legend here for more information https://en.wikipedia.org/wiki/List_of_airports_in_the_United_States)
}
```

## Base URL
The base url is ```https://us-airport-api.herokuapp.com/get-info```

## Query by city
Airport information can be queried by city with the added path ```/city/:<CITY_HERE>```

example request: 

```curl -X GET https://us-airport-api.herokuapp.com/get-info/city/:Boston```

example response:

```
[
    {
        "city": "Boston",
        "state": "MASSACHUSETTS",
        "faa": "BOS",
        "iata": "BOS",
        "icao": "KBOS",
        "name": "Gen. Edward Lawrence Logan International Airport",
        "role": "P-L"
    }
]
```

## Query by FAA code
Airport information can be queried by FAA Code with the added path ```/faa/:<FAA_CODE_HERE>```

example request: 

```curl -X GET https://us-airport-api.herokuapp.com/get-info/faa/:BOS```

example response:

```
[
    {
        "city": "Boston",
        "state": "MASSACHUSETTS",
        "faa": "BOS",
        "iata": "BOS",
        "icao": "KBOS",
        "name": "Gen. Edward Lawrence Logan International Airport",
        "role": "P-L"
    }
]
```
