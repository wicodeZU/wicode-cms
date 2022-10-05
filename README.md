# wicode-cms
manage your blogs easily ⚡

### how to run this project on your machine
- clone the repo
```
git clone https://github.com/wicodeZU/wicode-cms
```
- cd directory to wicode-cms

#### start the ui
our client side is in React, Typescript and Tailwindcss
-first change directory to ui
```
cd ui
```
- then install dependanicies using 
```
yarn install
```
or
```
npm install
```
- then start the app
```
yarn start
```

#### start the api
our api is in Nodejs, Express, Typescipt and MongoDB
- change directory to app
```
cd app
```
- then install dependanicies using 
```
yarn install
```
- build to compile into js
```
yarn build
```
- then run the api
```
yarn start
```

#### useful links
create a mongo db atlas account here https://www.mongodb.com/cloud/atlas/register
<br />
install yarn if you don't have https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable
<br />
checkout Ts docs https://www.typescriptlang.org/
<br />
install TypeScript ```npm install -g typescript```
#### api endpoints
home enpoint
```/api/v1```
<br />
returns
```
{
"message": "Welcome to Wicode-cms api v1"
}
```
signup endpoint ```/api/v1/auth/signup```
<br />
expects
```
{
  "username":"name",
  "email":"name@email.com",
  "password":"*******"
}
```
returns
```
"newUser": {
   "username": "name",
   "email": "name@email.com",
   "password": "$2b$10$ufn17nscGwOiFqMeIk3q1e5CoVrwNhLZxwG17tF/TkwwfIkKLYSP.",
   "_id": "6334892744bf6dede7107c85",
   "__v": 0
}
```
signin endpoint ```/api/v1/auth/sigin```
<br />
expects

```
{
  "email":"thatdude@email.com",
  "password":"*******"
}
```
returns
```

{
	"success": true,
	"user": {
		"_id": "633db685c60fa30723bb3358",
		"username": "that dude",
		"email": "thatdude@gmail.com",
		"password": "$2b$10$wkFpEErs41uJcvXDxQ8KHOkD3sKhHe44gjCVpx.ZklN1o01OXE0NO",
		"__v": 0
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjMzZGI2ODVjNjBmYTMwNzIzYmIzMzU4IiwiaWF0IjoxNjY0OTg5OTEzLCJleHAiOjE2NjQ5OTM1MTN9.M1D0Cz22wQYRSjiEiHAB_QskiI1waoV8n2uxaRR-x8I"
}
```
## contributing Guide

clone the repo using the below command
```
git clone https://github.com/wicodeZU/app-landing-page
```
then after cloning open on vscode or any other IDE
```
cd app-landing-page && code .
```
make sure to branch out the main branch using
```
git branch branch-name && git switch branch-name
```
make your changes. then commit using

```
git add <filename>
```
write a good commit message describing your change
```
git commit -m 'feat:did this change'
```
thn push code to the new branch you created using
```
git push origin branch-name
```
create a pull request and request for a review

<br />
happy to see you contribute
