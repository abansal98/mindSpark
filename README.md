# MindSpark Application

MindSpark is a web application that let users share quotes that inspirit one another.

### The build version on live server (usually updated once a week)
* http://myvmlab.senecacollege.ca:6475/


Team Members:
* Youngmin Ko (Team Lead) - https://github.com/masonkoh
* Gia Tuong Tran - https://github.com/giatuongtran9
* Pratik Panchani - https://github.com/PratikPanchani
* Arnav Bansal - https://github.com/abansal98

## Components explanation

| Component        | Explanation           | note  |
| ------------- |:-------------:| -----:|
| About      | It's landing page. It has introduction(who we are and what kind of service we offer) |  |
| Signin      | Let user login      |    |
| Signup | Let user signup      |    |
|Navbar|navigation bar which always stay on top of the website||
|Quotelist|It's the main feature of the website. It has 'QuoteBox component' which shows the quote(main service of us) and 'Category component' as left-side navigation bar.|(a.k.a. Home component)|
|QuoteBox|It shows quotes, quoteAuthor, quoteRate in one box. |sub-component of Quotelist component|
|Category|It shows categories of quotes and let user selects. Once user select a category, the Quotelist component will load corresponding quotes in QuoteBox component|sub-component of Quotelist component|
|Userprofile|Let user see or midify their profile||
|Footer|||
|Error|||

