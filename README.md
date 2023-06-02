# WebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Comandos git para subir cambios y desplegar:
 https://github.com/Albs1985/portafolioAlba.git
ng build
PARA QUE SE DESPLIEGUE EN LA WEB, DEBEMOS copiar el directorio dist a la carpeta de docs

git s
git add .
git commit -m "Comentario del commit"
git status (arbol limpio)

git push

Si falla al subirlo al GIT por este error, le damos más buffer:
error: unable to rewind rpc post data - try increasing http.postBuffer error: RPC failed; curl 56 ioctl callback returned error 2 fatal: the remote end hung up unexpectedly

git config --global http.postBuffer 2097152000
git config --global https.postBuffer 2097152000

AUNQUE NO SIRVE TAMPOCO...

Podemos subir los ficheros a mano, en la carpeta dist cogerlos y llevarlos a la carpeta docs
## Curso de Udemy:
https://www.udemy.com/course/html-hacia-angular/




