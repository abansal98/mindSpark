# MindSpark Application

MindSpark is a web application that let users share quotes that inspirit one another.

### The build version on live server (usually updated once a week)
* http://myvmlab.senecacollege.ca:6475/


Team Members:
* Youngmin Ko (Team Lead) - https://github.com/masonkoh
* Gia Tuong Tran - https://github.com/giatuongtran9
* Pratik Panchani - https://github.com/PratikPanchani
* Arnav Bansal - https://github.com/abansal98

## Component name changing Announcement (2:25PM, THU, MAY 30 2019)
* Home -> Quoteboard (under Quoteboard dir)
* Content -> Quotelist (under Quoteboard dir)

# Components explanation

### About Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
|| About      | It's landing page. It has introduction(who we are and what kind of service we offer) |
|sub-component| Aboutteam      | sub-component of About, introduce who we are |
|sub-component|SampleQuote|sub-component of About, introduce what service we offer|

### Error Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
||Just 404 page||

### Footer Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
||Footer||

### Navbar Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
||Navbar|navigation bar always stay on top|

### QuoteBoard Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
||QuoteBoard| Combination of sub-components. Category on left as left-side navigation, QuoteList on right-side.|
|sub-component|QuoteList|It's the main feature of the website. It has list of 'QuoteBox component' which shows the quote(main service of us).|
|sub-component|QuoteBox|It shows quotes, quoteAuthor, quoteRate in one box. It's on QuoteList component|
|sub-component|Category|It shows categories of quotes and let user selects. Once user select a category, the Quotelist component will load corresponding quotes in QuoteBox component|

### Signin Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
||Signin|Let user login |

### Signup Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
||Signup|Let user signup|

### Userprofile Component
|Note| Component name        | Explanation           |
|:-------------:| :-------------: |-------------|
||Userprofile|Let user see or modify their profile|




