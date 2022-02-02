# Webdev Project 003

Last updated: 02/02/2022  
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

## Simple API Checking

- import the `postman_collection` to Postman
- run the collection, check Save Responses
