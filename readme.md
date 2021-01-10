
## Pencil Backend Application
The goal of this assignment is to store and create an index over question objects in MongoDB, and write a NodeJS + Express based server that exposes a RESTful API to query the index and return questions that match the query.

#### Built With

- Node
- MongoDB

#### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tosinbot/pencil-be-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Setup env file by renaming `.env.example` to `.env`
```JS
   PORT=Preferred_Port_Number
   MONGODB_URL="db_type://username:password@hostname:port/database_name"
   ```
5. Start mongodb with `mongod`
6. Start the server with `npm start`

#### Endpoints available
| Endpoints                 | Method  | Description                                         |
|---------------------------|---------|-----------------------------------------------------|
|  /search?q=query          | GET     | returns an array of question numbers that contain an annotation which is anywhere in the subtree of the query topic|

#### Hosted sample App
The app is hosted on Netify
- Access the API via https://tosin-pencil.netlify.com/api/v1
- Database is hosted on [Mongo Atlas](https://cloud.mongodb.com/)

#### Example Usage
To query the database make a get request to the route `https://tosin-pencil.netlify.com/api/v1/search?q=<name of topic>`

###### Example 1:
`https://tosin-pencil.netlify.com/api/v1/search?q=Reproduction`
should return
```JSON
{
    "questions": [
       29,48,58,176,181,7,53,54,73,69,158,182,37,52,109,49,122,3,25,193,125,133,12,45,138,187,56,153,190,15,130,167,197]
}
```

###### Example 2:
`https://tosin-pencil.netlify.com/api/v1/search?q=Molecular Genetics`
should return
```JSON
{
    "questions": [
       31,79,107,150,162,126,144]
}
```

###### Example 3:
`https://tosin-pencil.netlify.com/api/v1/search?q=Molecular Genetics`
should return
```JSON
{
    "questions": [
       31,79,107,150,162,126,144]
}