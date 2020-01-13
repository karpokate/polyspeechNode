# PolyspeechNode

Polyspeech is a university project. In this folder you can find backend part of polyspeech project.
this app is smth like Udemy. This is a place where you can find bootcamps and courses.

## Technologies (tech stack)

- NodeJS
- Express
- Mongo Atlas

## Main project parts

db image: https://dbdiagram.io/d/5e1cc69794d9ab14375a2eae

### Auth and log in:

- resister user
- loging user
- password change
- update info about user
- logout

### Bootcamp

- get whole info about all bootcamps
- if your role (in user) is publisher you can add bootcamp
- you can add photo (if you have bootcamp)
- you can update bootcamp info (if you created bootcamp)
- find bootcamp by latitude and longitude (if your role are user)
- delete bootcamp (if it is your own bootcamp)

#### Courses

- get all courses and info about them
- choose bootcamp and get courses in them
- create course (only if you have bootcamp)
- update course
- delete course

### Write reviews (only for bootcamp)

- read reviews for bootcamp
- add review for bootcamp
- update (edit smth) your review
- delete review

### if you are admin you can manage info about users

- get all info about users
- find certain user
- create user
- update user
- delete user
