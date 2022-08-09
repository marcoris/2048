# Simple NodeJS highscore storage server
This is a simple server made with NodeJS to store the highscores of our 2048 game made in the FWebT module.
Feel free to add more to it.

The server stores the data in a JSON file. on every post request this file is overwritten with the new data.
For the simplicity there are none callbacks for exceptions or strange data inputs, so if you mess with it, the JSON data may be corrupted.

## Run the Server on Docker
1. Clone this repository
2. Open a terminal and move into the repository directory
3. Create the docker container: `docker build . -t fwebt/highscores`
4. Check if you can find the docker image: `docker images`
5. Run the image: `docker run -p 49160:8000 -d fwebt/highscores`
6. Test the server using port 49160 which is mapped by port 8000: `curl -i localhost:49160`

## Run the Server on Node
`node controller.js`

## Requests
At the current state there are only three possible requests:
- GET status with every call on http://localhost:8000
- GET all highscores on http://localhost:8000/highscores
- POST new highscore on http://localhost:8000/highscores

### GET example
`curl http://localhost:8000/highscores`

*--- Output ---*

`[{"name":"Test","score":900},{"name":"Test2","score":200},{"name":"Test3","score":8555},{"name":"another Test","score":666},{"name":"another Test2","score":1666}]`

### POST example
`curl -X POST -H "Content-Type: application/json" -d '{"name": "Some Name", "score": 420}' http://localhost:8000/highscores`
