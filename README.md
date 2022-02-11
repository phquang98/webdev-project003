# Webdev Project 003

Last updated: 08/02/2022  
Tech: TS + Express + TypeORM + PostgreSQL

## Run

- `npm i`
- `npm run build`: let `tsc` compile Node server in TS to JS, and compile again detect changes in `/src`
- `npm start`: build a Node server using `nodemon`
- remember install `.d.ts` files for any libraries with `npm i -D @types/yourLibHere`

## Todo

- [ ] simple validation
- [ ] typings 4 params of RequestHandler
- [ ] recheck logic code in controller (should createCtrl use save or create, ...)
  - [ ] raw SQL should be insert, update and delete ? should i spam save everywhere ?

## Notes

- `x` to denote my own custom code, aka not from any libs
- why wrap every controllers with `trycatch` -> cause using async code
- TypeORM has comfy fnc like `save()` and `remove()` that exe multiple queries, but as learning, trying to mimic so only 1 query exed
  - atm, still using `save()` and `remove()` cause comfy return res, but future try to change to `insert()`, `update()` and `delete()`
- update controllers: 2 inputs path params & req body -> 4 possible combination (not include `catch`), implements 2 for simple atm
- [why PUT HTTP should include both resourceID in both path params & req body](https://dzone.com/articles/rest-api-path-vs-request-body-parameters)

## Simple API Checking

- import the `postman_collection` to Postman
- run the collection, check Save Responses
