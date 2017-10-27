Deezer Data Grid By Jen
========================

## Recrutement Test

![alt text](https://github.com/jendigital/deezer-data-grid/blob/master/deezer_by_jen.png)

## Heroku App

http://deezerdg-byjen.herokuapp.com/

## Launch React Front

* cd react-ui then yarn then yarn start
* see result on http://localhost:3000
* cd react-ui then yarn test to launch jest test
* create-react-app-sass project

## Launch Server (Optionnal on localhost Indispensable for Heroku)

* yarn then yarn start
* see result on http://localhost:5000

### Main Functionality

* Search a song ( http://api.deezer.com/search/track?q=query )
* Result in a Datagrid

## Datagrid Features

* Display results by column
* Permits column resize
* No Pagination But Infinite Scroll - Display results by pack triggered when user reach end of page
* Ordering result possibilities by clicking on column header
* A filter on real-time of results

## Notices

* Performances watch -> exectution periods
* Chrome, Firefox, IE9 compatibility
* Add Unit tests
* API https://developers.deezer.com/api
