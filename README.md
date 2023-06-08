# Section 13
## Netflix-Clone App

1. **Setting Up the fonts**
> fonts.google.com => Roboto Slab => 400
>
> font implement using < link > in _document.js || 
>
> font mentioned in global.css under font-family: "Roboto Slab"

===================================================================================================

# Section 14 

## Netflix Component Architecture 
> Nav bar having Logo, mylist and loginId
>
> banner having title, subtitle , play and IMG
>
> category wise distinction
>
> npm install classnames
>
> npm install framer motion

## Youtube API
> SSR 
> YT data based API
> Popular | Travel| Disney| Productivity cards added with functionality
==========================================================================

# Section 15
## Authentication with MAgic 
> Passwordless Authentication
>
> Sign-in 
>
> Login page will be a nested route 
>
> Sign In Page 
>
> Magic Link == npm install --save magic-sdk
>
> Loading state while loggin in
>
> Routing Delay with Login
>
> Signout a user
>
> Flickering of the page fixed
>
> Loading component

========================================================================
# Section 16
## Incremental Static Generation
>
>Dynamic Route 
>
> Linking Dynamic Page to Card component
>
> BAnner Component has play button which redirect to the specific video/[videoId]
>
> React Modal
> 
> npm install --save react-modal
>
> Implementing YouTube Player
>
## Data Fetching Techniques to use
> ISR
>
>YT API
>
>YT Quota Limit

=============================================

# Section 17
HAsura GraphQL
> Overview
> GraphQL
> GQL Query Vs Mutation
>
>Hasura 
> DB Architecture
> 
> Set Up DB
>
> Query Live Hasura Server
>
> JWT = json web token 
>
>https://jwt.io/#debugger-io
>
>https://hasura.io/docs/latest/auth/authentication/jwt/#configuring-jwt-mode

===================================
# Section 18
## Authentication with Hasura
>
> Overview 
>
> Architecture
>
> POSTMAN
> 
>Take a look at the docs to see how to use it: https://learning.postman.com/docs/getting-started/sending-the-first-request/
>
1 Authorization token : created a file in api => login.js
>
> npm install --save @magic-sdk/admin
>
2 JWT token server side 
>
> https://www.npmjs.com/package/jsonwebtoken
> 
> npm install jsonwebtoken


# cookie
> store jwt token as cookie 
>
>$ npm install cookie
>
>  const setCookie = cookie.serialize('name',value,{Optional});
>    
>Serialize a cookie name-value pair into a Set-Cookie header string. The name argument is the name for the cookie, the value argument is the value to set the cookie to, and the options argument is an optional object containing additional serialization options.

=================================
# Section 19

## Rating Service {Likes & Dislike} and My List 

>
> Section Overview
>
> App Architecture
>
> like and dislike a vid
>
>: Watch it again => Watched by a user.
>
> My List Page => Favourited vids
>
> *everything is related and revolves around videoId*
>
> VideoId associated to the user => in the hasura table
> Query data on homepage
>
> API => all info about video
> stats (hasura table)
>
> /stats
>> 1 Read token from cookie 
>
>> 2 verify Jason token 
>
>> 3 find video by Id and by user
>> a yes => Update stats for that user (GQL mutation)
>> b No => create new stats for that user

=====
## Like And Dislike button 

=> funcationality

# stats api creation
> /stats\
>
>1 read token from cookies
>
> verify JWT
>
>Find Video by videoId and by user
>
> yes => update stat for that user 

>
> no => create new stats for that user

# stats API overview with JWT Verification
>2 Verify json token JWT
> 
> const decode = jwt.verify(token, key)
>
> stats API Design GraphQL
> **find video by ID and by user (GQL query)**
>
> issuer (PK) in the users table is UserId in stats table (fk)
>
> insert and update API

## **Like Dislike Functionality**
> Testing of Like and dislike
>
>GET Req to fetch the data available on Stats table in hasura
>
>invoke Stats API on frontend
>

## Watch It Again
>
> Architecture 
>
> Section card added with the prop of watchedvideos which fetch the like or dislike vid.
>
> HD image ImgUrl added
> 
> Removing hard coded token n userID from the index.js
>
>Cookies inside SSR
>
> read token from cookies => verify JSon Token (JWT) => GQL query mutation

## My-List 
> Hasura Query 
>
>Server side Render 
> 
> Wrap Cards
>
> Logout with removing cookie token
>
> SSR redirect implemented
