<p align="center">
  <a href="https://www.mobixtec.com/" rel="noopener" target="_blank"><img width="150" src="https://user-images.githubusercontent.com/16656725/96494904-643cf480-121d-11eb-9d1c-6597027dcadd.png" alt="Mobix logo"></a></p>
</p>

<h1 align="center">React Native Boilerplate</h1>

<div align="center">

Crafted with :heart: by <strong>[Mobix Software Studio](http://github.com/mobixsoftwarestudio)</strong> for </strong> [React Native](https://reactnative.dev/) applications.

</div>

# Install

```bash
// clonning:
git@github.com:mobixsoftwarestudio/react-native-boilerplate.git
```

# Dependencies

- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Eslint](https://eslint.org/)
- [React Query](https://react-query.tanstack.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Detox](https://github.com/wix/Detox)

# Folders

## assets

Contains all project`s global assets, such as images and videos.

## components

Contains all global components that will be used throughout the application.

## contexts

Contains all global contexts created with [Context API](https://reactjs.org/docs/context.html).

## hooks

Contains all global [Hooks](https://reactjs.org/docs/hooks-reference.html).

## queries

Contains all global [queries](https://react-query.tanstack.com/reference/useQuery).

## services

Contains all external services configurations, such as api base url and interceptors.

## themes

Contains all theme configurations.

## types

Contains all global types.

## modules

Contains every functionally of the application divided by the following folders:

### assets

Contains all the assets of this module.

### components

Contains all the components of this module.

### hooks

Contains all the hooks of this module.

### queries

Contains all the queries of this module.

### screens

Constains all the screens of this module.

<br />

It should also have the following files:

- routes.tsx: responsible for handling the module's routing.
- types.ts: responsible for storing the module's types.
