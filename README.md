# Affluence - Is Ressource Available

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.


## Before running the app

- Run the backend app on 8080 port

- Using `Docker build --tag affluences .` and `docker run -p 8080:8080 --name affluences-container affluences`

- If port is no more 8080, please change the value of apiUrl in file environments/environment.ts (frontend)

## Running frontend app

Run `ng serve` or `npm run start` at the root of the frontend project.

Webapp can be reach at `http://localhost:4200/`.

## How it works

- Enter a valid Date from the datepicker
- Enter a valid Time from the timepicker
- Validation button will be shown only if date and time are correctly set up
- After clicking on the button, the result will be displayed with a different color depending on the state of the response
