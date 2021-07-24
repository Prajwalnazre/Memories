# Memories
This project is made as a part of learning MERN stack.

Deployed on netlify app <a href="https://prajjmemories.netlify.app/" target="_blank">here</a>
 
![Memories](https://github.com/Prajwalnazre/Memories/blob/main/results/memories_cropped.png)

The backend is deployed using heroku at <a href="https://reactmemories.herokuapp.com/posts" target="_blank">here</a>

To run this project locally, you have nodejs and react pre-installed.

cd into the both client and server folders seperately and run 
```
npm install
```
to install all the node modules. You will have 'node_modules' installed after this command.

Client Side dependancies to be installed
- axios
- moment
- react-file-base64
- redux
- redux-thunk
- material

To install the dependancies use 
```
npm install axios moment react-file-base64 redux redux-thunk material
```

Backend Side dependancies to be installed
- body-parser
- cors
- express
- mongoose
- nodemon

To install the dependancies use 

```
npm install body-parser cors express mongoose nodemon
```

To run both the the client and server locally use 
```
npm start 
```
in the terminal seperately after cd into the directory

Note: Under client/src/api/index.js change the line 3 and 4 to
```
const url = "http://localhost:5000/posts";
const url2 = "http://localhost:5000/posts/create";
```

Awesome, you are ready to run it locally and feel free to edit the code play. If you have any suggestions or query, do contact me!!

## Common Error 1

![Error1](https://github.com/Prajwalnazre/Memories/blob/main/common%20errors/error1.jpeg)

You might face this error during the project development. While I am not sure what exactly cause the error, here is a solution in case you face the same.
1. Delete node_modules files in both client and server directory
2. Delete package-lock.json in both the directories
3. Run ```npm cache clean clean --force``` in both the directories
4. Install both client and server dependancies respectively
