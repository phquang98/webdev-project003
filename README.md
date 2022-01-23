# Template Backend Pure

Last updated: 30/12/2021
Tech: TS + Express

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

## Test Data

Student:
{
"id": "A001",
"name": "John Doe",
"age": 26,
"gender": "male",
"email": "johndoe@gmail.com",
"pnum": "0675222385",
"studyYear": 4,
"academicYear": "2016-2020",
"programme": "IT"
}
