# Assignments

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

# API

The name of the API I am using is freetogame.

Link: https://www.freetogame.com/api-doc

Example request: GET https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date

I chose HttpClient and Observable because it stores the signal so a zoneless app knows to update the view.

# LAZY LOADING
Before:
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-BQID5ZKB.js    | main          | 307.36 kB |                79.90 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 307.36 kB |                79.90 kB

Application bundle generation complete. [5.183 seconds] - 2026-11-16T14:38:14.948Z

After:
nitial chunk files | Names          |  Raw size | Estimated transfer size
main-4VLVCCRX.js    | main           | 254.59 kB |                69.33 kB
styles-5INURTSO.css | styles         |   0 bytes |                 0 bytes

                    | Initial total  | 254.59 kB |                69.33 kB

Lazy chunk files    | Names          |  Raw size | Estimated transfer size
chunk-CRrICx7H.js   | game-form      |  51.62 kB |                11.47 kB
chunk-DhdXtIG4.js   | game-detail    |   1.80 kB |               817 bytes
chunk-CO-js2st.js   | page-not-found | 925 bytes |               925 bytes

Application bundle generation complete. [3.428 seconds] - 2026-11-16T15:04:33.225Z

Output location: /home/kaycee/Desktop/SCC/S3/JS Frameworks/Assignments/Video Game API/dist/Assignments
## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
