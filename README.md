# Co-Make API

---
*Published URL = https://troll-hub.herokuapp.com/*

--- 
Schemas 
User Schema: 
{ 
  name: string,
  email: string,
  zip: integer,
  state: string,
  password: string,

}

Issues Schema:{
 name: string,
 desc: string,
 state: string,
 zip: integer,
 image: string,
 vote: integer,

}

__Base URL = https://troll-hub.herokuapp.com/api__

1. Creation/Login Flow ~~ RestAPI ~~ See Charts for Endpoints

|      Endpoints       | Method|            Other                |
| :------------------: | :----:| :-----------------------------: |
|   /auth/register     |  POST |  Registers a User with Token    |
|   /auth/login        |  POST |  Logins a User with Token       |


2. User Routes ~~ RestAPI ~~ See Chart for Endpoints


|      Endpoints       | Method|            Other                |
| :------------------: | :----:| :-----------------------------: |
|      /user        | GET   |     Gets a List of Users        |
|      /user/:id    | GET   |      Gets a User By Id          |
|      /user/:id    | PUT   |        Edits a User             |
|      /user/:id    |DELETE |        Deletes a User           |

3. Issue Routes ~~ RestAPI ~~ See Chart for Endpoints

|      Endpoints       | Method|            Other                |
| :------------------: | :----:| :-----------------------------: |
|      /issue        | GET   |     Gets a List of Issues        |
|      /issue/:id    | GET   |      Gets an Issue By Id          |
|      /issue        | POST   |     Posts an Issue       |
|      /issue/:id    | PUT   |        Edits an Issue             |
|      /issue/:id    |DELETE |        Deletes an Issue           |


