# http module : hyper text transfer protocol
# html : hyper text markup language
# css : cascading style sheet

url is converted in ip address(combination of bits) -> router -> system(server): request & response
request: who is client, response : reply

**command to write in terminal to obtain ip address of google**
ping google.com
render: to show html page

**port** in computer : hearing - 2^32

# npm - node package manager
to make backend - **npm init -y** - in terminal of specific folder(LAB3)
package.json is created - do following changes:
1. "scripts": 
    "start":"node app.js"
2. "type": "module"
npm start - command in lab3

# whenever a change is there - restart server everytime(**problem**)
install libraray
search on google - **npm** - search there **nodemon**//no need to restart server 

**npm install** - in lab3 terminal type : npm i nodemon -D
package.json me ye add ho gya hoga:
"devDependencies": 
    "nodemon": "^3.1.14"
    
**npm run dev** - changes automatically gets saved

//20 aug
call back - arrow/nameless function : ()=>{}

# Method
1. Get
2. Post
3. Put
4. Patch
5. Delete



# API
any api can be of four types: get(R:read), post(C:create), put&patch(U: update), duck(D:delete)
api can be responsed by server with status code and json data 
api generally start with api/version :- eg: /api/v1/products    /api/v1/products/2169   /api/v1/users    
/api/v1/users/anushka      /api/v1/product?=mobile
by default browser can check only get request, to check other 3 request type like : post, put&patch or delete we require frontend or 3rd party api tester(like:postman,thunderclient, echoapi) **echoapi**

npm - installation
cntrl+C - server stop
npm start - start main program
npm run dev =

# RT0 - request time out

# content type
content-type is used to tell the browser what type of data is being sent in the response. In this case, it is set to 'text/json' to indicate that the response will be in JSON format.

1.'text/html'- 
2. 'text/json' - 
3. 'text/plain' - 

# http methods
url,method,socket,headers

# http Status Codes: 
- 200-OK
- 201-CREATED 
- 202-ACCEPTED
- 204-NO CONTENT
- 400-BAD REQUEST 
- 401-UNAUTHORISED 
- 403-FORBIDDEN 
- 404-NOT FOUND
- 500-INTERNAL SERVER ERROR
- 503-SERVICE UNAVAILABLE
A small package to install which include all these things : 

## SERVER CAN SEND DATA
1.html 
3.json data
4.plain text
5.css
6.jss
6.

7.file

## Server can set header to send data

1. res.setHeader
2. res.writeHeader()

## server can set status code
1. res.statusCode()
2. res.writeHeader()

## request methods

1. get
2. post
3. put/patch
4. delete

# Routes
- "/" -> home/index/localhost
- "/users"
- "/products/2369" -> from many products we want only 2369
- "/products?S=TV" -> products: route , S=TV: query string
