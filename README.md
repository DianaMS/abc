# YevoFront

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Yevo_FrontEnd&metric=alert_status&token=04ee53218c9d6adf8aa825de3ca750705d715e34)](https://sonarcloud.io/summary/new_code?id=Yevo_FrontEnd)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `npm run dev:ssr` for running the SSR version of the project locally.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `npm run build:ssr` to build the project + ssr server. The build artifacts will be stored in dist/. Browser directory is for ui files and server is for ssr server files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

# Deploy
We can use [FileZilla](https://filezilla-project.org/download.php?type=server) to upload the files.

After build (with the commands below), We'll need to upload all the files from `./dist/yevo-front/browser` to the server at `/site/wwwroot/browser` and `./dist/yevo-front/server/` to `/site/wwwroot/`

**NOTE**: it is very necessary to avoid losing the **web.config file**

Build:
---

### production
```bash
npm run build:ssr
cd dist/yevo-front/server/
mv main.js server.js

```
### development
```bash
npm run build:dev:ssr
cd dist/yevo-front/server/
mv main.js server.js
mv main.js.map server.js.map

```
---
