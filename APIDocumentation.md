# Project: GrowSimple

## End-point: REGISTER USER
### Method: POST
>```
>http://localhost:5000/api/users/register
>```
### Body (**raw**)

```json
{
    "username" : "ADMIN2", 
    "email": "admin2@mail.com", 
    "password": "123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: LOGIN USER
### Method: POST
>```
>http://localhost:5000/api/users/
>```
### Body (**raw**)

```json
{
    "username" : "ADMIN2", 
    "password": "123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: RETREIVE MOVIES LIST
### Method: GET
>```
>http://localhost:5000/api/movies/
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjg0YTFiM2ZlODc2MDk0Mjk1MmQxZCIsImlhdCI6MTY1MTAwMTk4NywiZXhwIjoxNjUzNTkzOTg3fQ.OojeTb1MOqDNdyLE-9cHQphgpCZIPKobxNoltJ-qVXc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: ADD NEW RATING
### Method: PUT
>```
>http://localhost:5000/api/movies/626857bba61540df2f0e5ba0
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjg0YTFiM2ZlODc2MDk0Mjk1MmQxZCIsImlhdCI6MTY1MTAwMTk4NywiZXhwIjoxNjUzNTkzOTg3fQ.OojeTb1MOqDNdyLE-9cHQphgpCZIPKobxNoltJ-qVXc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: CHECK RATING
### Method: GET
>```
>http://localhost:5000/api/movies/12
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjg0YTFiM2ZlODc2MDk0Mjk1MmQxZCIsImlhdCI6MTY1MTAwMTk4NywiZXhwIjoxNjUzNTkzOTg3fQ.OojeTb1MOqDNdyLE-9cHQphgpCZIPKobxNoltJ-qVXc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: ADD NEW MOVIE
### Method: POST
>```
>http://localhost:5000/api/movies/
>```
### Body (**raw**)

```json
{
    "title": "Grizzly Man", 
    "poster": "/nXIV2qGK9KkdkaOTzrpK87CuAGC.jpg", 
    "budget":10, 
    "overview":"Werner Herzog's documentary film about the \"Grizzly Man\" Timothy Treadwell and what the thirteen summers in a National Park in Alaska were like in one man's attempt to protect the grizzly bears. The film is full of unique images and a look into the spirit of a man who sacrificed himself for nature.", 
    "release_date":"2005-08-12", 
    "revenue":10, 
    "runtime":103, 
    "status":"Released", 
    "tagline":"In nature, there are boundaries. One man spent the last 13 years of his life crossing them."
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjg0YTFiM2ZlODc2MDk0Mjk1MmQxZCIsImlhdCI6MTY1MTAwMTk4NywiZXhwIjoxNjUzNTkzOTg3fQ.OojeTb1MOqDNdyLE-9cHQphgpCZIPKobxNoltJ-qVXc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
