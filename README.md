## Get Agent Dev Test

The Get Agent Dev Test is an application built with React, Styled Components, and Moment.js. The application must accept a property ID, postcode or street and display the matching properties with the corresponding transaction(s).

<img width="1680" alt="Screenshot 2021-03-15 at 06 27 40" src="https://user-images.githubusercontent.com/47988806/111115335-5a18eb00-855c-11eb-920c-0c33bb5807e9.png">

## Project structure

To get started:

Inside the "api" folder: 
- run `npm install`
- run `node server.js`

### Frontend

Inside the "frontend" folder: 
- run `npm install`
- run `npm start`

### Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Styled Components](https://github.com/styled-components/styled-components) and [Moment.js](https://github.com/moment/moment/). 

### API Reference

A simple API has already been setup. This uses data from a sqlite database (included in this project). The API is powered by [Koa](https://github.com/koajs/koa), and uses [Bookshelf](https://bookshelfjs.org/) as an ORM.

### Reflection

This was a week-long project built as a short technical exercise. Project goal included is to create a React application that will consume data from the SQLite database.  

Originally I wanted to build an application that allowed a user search for property transactions and display them. I started this process by using the `create-react-app` boilerplate, then adding `Nodemon` to automatically restarting the node application when file changes in the directory are detected, then added `styled-components` to write actual CSS code to style the components, and lastly `Moment.js` to manipulating, and formatting dates.

One of the main challenges I ran into was to pull the information from the API. This leads me to spend a few hours planning a better way to display the information coming from the API. Due to project time constraints, I had to decide a simplified design to demonstrate a better visualisation of the pieces of information that I had available.

At the end of the day, the technologies implemented in this project are React, Styled Components, and Moment.js. I choose to use as fewer frameworks as possible to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration with more time, I would like to implement a filter to the property list, type safety method and possibly unit tests.
