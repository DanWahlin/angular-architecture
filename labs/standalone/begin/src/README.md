# Standalone Lab

This lab begins with an application that has been *partially* converted to standalone.

> The original, 100% NgModule application is in the adjacent `reference` folder.

The following have already been converted:
- The villains feature has already been converted.
- Two of the three Heroes components have been completed.

Your job is to finish the conversion. 


## Overview

- Convert `toolbar.component` in `core`
- Convert `heroes.component` in `heroes`  
- Fix the app routing to route to your standalone `heroes.component`
- Convert the `app.component`
- Bootstrap as a standalone component in `main.ts`
- Clean up the NgModule detritus that you left behind.

## Installation

Run npm install. It will probably fail because the Angular Material lib is older and possible out-of-sync with your cli.

You can try `npm i --force` to get over this hurdle.

## Steps


1. Run `npm I --force`. You must add the `--force` option because the Angular Material components are from an older library and are likely out-of-sync with your cli.

1. Run `ng serve` to start the application. Keep it running while you work. The app will break along the way but it should resume as you convert.


### Toolbar Component Conversion

1. Open `toolbar.component.ts` in `core/toolbar`

1. Import `RouterLink` from `'@angular/router'`.

1. Import `materialImports` from `'../../standalone-imports'`. This is an array of Angular material components that you can import into the standalone application components (like `Toolbar`) that use Material.


1. Add the following two lines below `selector:` in the component declaration:

  ```
  // standalone: true,
  // imports: [materialImports, RouterLink],
  ```

  **The app will break**

1. Delete `core.module.ts`.

1. Delete the `core.module` export from `core/index.ts`

1. Remove `core.module` import from `app.module`

1. Add `import { ToolbarComponent } from './core/toolbar/toolbar.component';`

1. Add `ToolbarComponent` to the list of module imports

  **The app should resume working.** If it doesn't, try killing the server and re-running `ng serve`.



### Heroes Component and Module Conversion

1. Open `heroes.component.ts` in `heroes/heroes`


1. Add these three imports:
  ```
  import { materialImports } from '../../standalone-imports';
  import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
  import { HeroListComponent } from '../hero-list/hero-list.component';
  ```


1. Add the following two lines below `selector:` in the component declaration:

  ```
  standalone: true,
  imports: [materialImports, HeroDetailComponent, HeroListComponent],
  ```

  **The app will break**

1. Delete the `heroes/heroes.module` because all heroes components are now converted.

1. Delete the **local level* `heroes/routes.ts` 

1. Open the **top level** `app/routes.ts`

1. Replace the NgModule route to heroes with the standalone route to heroes:

  ```
  {
    path: 'heroes',
    loadComponent: () =>
    import('./heroes/heroes/heroes.component').then((m) => m.HeroesComponent),
  },
  ```

  **The app should resume working.** If it doesn't, try killing the server and re-running `ng serve`.




### AppComponent and Bootstrap Conversion

1. Open `app.component.ts`

1. Import `routerOutlet` and `toolbar.component`.

1. Add the following two lines below `selector:` in the component declaration: 
  ```
  standalone: true,
  imports: [ RouterOutlet, ToolbarComponent],
  ```

1. Open `main.ts` in the projecd root

1. Replace its NgModule-based contents with the following:

  ```
  import { enableProdMode } from '@angular/core';
  import { bootstrapApplication } from '@angular/platform-browser';

  import { environment } from './environments/environment';

  import { AppComponent } from './app/app.component';
  import { appConfig } from './app/app.config';

  if (environment.production) {
    enableProdMode();
  }

  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
  ```

  **The app should resume working.** If it doesn't, try killing the server and re-running `ng serve`.


1. Delete `app-dev.module.ts`

1. Delete `app.module.ts`

1. Delete `shared.module.ts`
