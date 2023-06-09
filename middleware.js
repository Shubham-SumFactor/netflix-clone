import { NextResponse } from 'next/server';

export async function middleware(req,ev){
     console.log( { req, ev });
     //check the token 
     //if token is valid
     // || if page is /login 
     return NextResponse.next(); 
    //const token = req ? req.cookies.get("token") : null;
    //if no token 
    //
}