# Co-Make API
<div align="center">


---
*Published URL = https://community-issues.herokuapp.com/*

--- 
Schemas 
User Schema: 
{ 
  name: string,
  email: string,
  zip: integer,
  state: string,
  password: string,}

Issues Schema:{
 name: string,
 desc: string,
 state: string,
 zip: integer,
 image: string,
 vote: integer,}

__Base URL = https://community-issues.herokuapp.com/api__

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
|      /issues        | GET   |     Gets a List of Issues        |
|      /issues/:id    | GET   |      Gets an Issue By Id          |
|      /issues        | POST   |     Posts an Issue       |
|      /issues/:id    | PUT   |        Edits an Issue             |
|      /issues/:id    |DELETE |        Deletes an Issue           |

</div>
