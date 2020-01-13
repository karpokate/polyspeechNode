# REQUESTS:

requests and data for them.

## Auth

- POST http://localhost:5000/api/v1/auth/register
- POST http://localhost:5000/api/v1/auth/login
- GET http://localhost:5000/api/v1/auth/me
- POST http://localhost:5000/api/v1/auth/
- PUT http://localhost:5000/api/v1/auth/
- PUT http://localhost:5000/api/v1/auth/
- PUT http://localhost:5000/api/v1/auth/
- GET http://localhost:5000/api/v1/auth/

## Botcamps

- GET http://localhost:5000/api/v1/bootcamps
- GET http://localhost:5000/api/v1/bootcamps/:id
- POST http://localhost:5000/api/v1/bootcamps
- PUT http://localhost:5000/api/v1/bootcamps/:id
- DELETE http://localhost:5000/api/v1/bootcamps/:id
- GET http://localhost:5000/api/v1/bootcamps/radius/02118/10
- PUT http://localhost:5000/api/v1/bootcamps/:id/photo

## Courses

- GET http://localhost:5000/api/v1/courses
- GET http://localhost:5000/api/v1/bootcamps/:id/courses
- GET http://localhost:5000/api/v1/courses/:id
- POST http://localhost:5000/api/v1/bootcamps/:id/courses
- PUT http://localhost:5000/api/v1/courses/:id
- DELETE http://localhost:5000/api/v1/courses/:id

## Reviews

- GET http://localhost:5000/api/v1/reviews
- GET http://localhost:5000/api/v1/bootcamps/:id/reviews
- GET http://localhost:5000/api/v1/reviews/:id
- POST http://localhost:5000/api/v1/bootcamps/:id/reviews
- PUT http://localhost:5000/api/v1/reviews/:id
- DELETE http://localhost:5000/api/v1/reviews/:id

## only for admin panel

- GET http://localhost:5000/api/v1/users
- GET http://localhost:5000/api/v1/users/:id
- POST http://localhost:5000/api/v1/users/
- PUT http://localhost:5000/api/v1/users/:id
- DELETE http://localhost:5000/api/v1/users/:id
