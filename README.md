# DesignWay

## 1) Create a node express project with four routes to:
- POST 
- GET
- PUT
- DELETE

## 2) Now create a .json file in a project directory, using below format, which should be created by node app when it starts for first time if the file doesn’t exist.

{
“author”: <your name>, <— this should be added when the file is created for the first time
“version”: <This should be pulled from your package.json file using your code and inserted here> <— this should be added when the file is created for the first time
“time_stamp”: <date and time when the file was created in this format eg “18 June 2019 at 9:00 AM”>, <— this should be added when the files is created first time
“to_do_list”: [<to_do_objects here>, <to_do_objects here>] <- this array should consist of all the todo objects
}


## 3) Now using all above 4 routes to write below content inside the .json file you created just now.

a) Using one of the 4 routes you should add 5 todo items to the above json file to_do_list array with a success response on you API.
b) Using  one of the 4 routes you retrieve all todo items from the above json with status 201.
c) Using  one of the 4 routes you should remove 3rd position todo items in the above json with status 204.
d) Using  one of the 4 routes you should update 2nd position todo items name with “new text” in the above json with status 204.
e) Now make a copy of json file as “_yourjsonfilename.json” at the same location and add a name/value pair “updatedAt”:<time this copy file was created>. 
