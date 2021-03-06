# Recipe

A simple recipe book app built using AngularJS. It stores recipes of user and his/her shopping list. It uses Firebase for authentication and Database.

### ScreenShots of App

<p align="center">
<img src="screenshots/recipe-main.png" height = "250" width="400" border="2">&nbsp&nbsp
<img src="screenshots/recipe-recipes.png" height = "250" width="400" border="2">
</p>
<br/><br/>
<p align="center">
<img src="screenshots/recipe-edit.png" height = "250" width="400" border="2">&nbsp&nbsp
<img src="screenshots/recipe-new.png" height = "250" width="400" border="2">
</p>
<br/><br/>
<p align="center">
<img src="screenshots/recipe-login.png" height = "250" width="400" border="2">&nbsp&nbsp
<img src="screenshots/recipe-shopping.png" height = "250" width="400" border="2">
</p>
<br/>
<br/>


### Steps to run the project

Fork the repository and clone it on your machine.
To download all dependencies run:

```bash
npm install --dev
```

#### To use firebase (Auth and DB)
Make an app in firebase console and put the details of the app in secret.json(you have to make your own) based on secret-demo.json in the assests folder.


#### Run on Development server

Run project on localhost:

```bash
ng serve
``` 
Navigate to `http://localhost:4200/`.

#### Build

To build project run:

```bash
ng build
```

