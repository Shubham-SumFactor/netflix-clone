import { isNewUser, createNewUser } from "@/lib/db/hasura";
import { magicAdmin } from "@/lib/magic";
import jwt from "jsonwebtoken";
import { setTokenCookie } from "@/lib/cookies";

export default async function login(req, res){
    if(req.method === "POST"){  
        try {
            const auth = req.headers.authorization;
            const didToken = auth ? auth.substr(7) : '';

            //console.log({ didToken });

 //invoke magic 
          const metadata = await magicAdmin.users.getMetadataByToken(didToken)
         // console.log({ metadata });

          // create jwt 
            const token = jwt.sign({
                ...metadata,
                "iat": Math.floor(Date.now() / 1000) ,
                "exp": Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
                "https://hasura.io/jwt/claims": {
                  "x-hasura-default-role": "user",
                  "x-hasura-allowed-roles": ["user", "admin"],
                  "x-hasura-user-id":`${metadata.issuer}` ,
                },
            },
            process.env.JWT_SECRET
            );

           // console.log({ token });

            //check if user exists
            const isNewUserQuery = await isNewUser(token, metadata.issuer);
           
           isNewUserQuery && (await createNewUser(token, metadata));

             setTokenCookie(token, res);
                //console.log({ cookie });
                res.send({done: true });
            }
        catch(error){
            console.error("something went wrong Logging in", error)
            res.status(500).send({ done: false});

        }
    } else{
        res.send({ done: false});
    }
}