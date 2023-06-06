import jwt from "jsonwebtoken";
import { findVideoIdByUser, updateStats } from "@/lib/db/hasura";

export default async function stats(req, resp) {
    if(req.method === "POST"){ 
       // console.log({ cookies: req.cookies });

        try {
        const token = req.cookies.token
        if(!token){

            resp.status(403).send({});
        }else{

            const videoId = req.query.videoId;
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          //  console.log({ decodedToken });

            const userId = decodedToken.issuer;
          //  const videoId = '4zH5iYM4wJo';
            const doesStatsExist = await findVideoIdByUser(token, userId, videoId);
           // console.log({ findVideoId })
           if (doesStatsExist) {
            // update it 
            const response = await updateStats(token, {
                
                watched: false,
                userId,
                videoId:"kpGo2_d3oYE",
                favourited: 0,
            });
            resp.send({ msg: "it works", response });

           }else{
            //add it 
            resp.send({ msg: "it works", decodedToken, doesStatsExist });

           }
           
        }
            
    }catch(error){
        console.log("error occured /stats", error);
        resp.status(500).send({done: false, error: error?.message })
    }
}
}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJkaWQ6ZXRocjoweDA1Y2E1RTJDQjk0MmViNjRiRDkyQjg2M2NkMjBFQjU2MkI3OGNFOTEiLCJwdWJsaWNBZGRyZXNzIjoiMHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIiwiZW1haWwiOiJzaHViaGFtLnN1bWZhY3RvckBnbWFpbC5jb20iLCJvYXV0aFByb3ZpZGVyIjpudWxsLCJwaG9uZU51bWJlciI6bnVsbCwid2FsbGV0cyI6W10sImlhdCI6MTY4NTY5MDk4NiwiZXhwIjoxNjg2Mjk1Nzg2LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiZGlkOmV0aHI6MHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIn19.mVcbZF7pNfEz6Txru0Kpu1H5CD63143hKIuGANtsEfE