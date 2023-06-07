
import { findVideoIdByUser, updateStats, insertStats } from '@/lib/db/hasura';
import { verifyToken } from "@/lib/utils";


export default async function stats(req, resp) {

    try {
        const token = req.cookies.token;
        if (!token) {
            resp.status(403).send({});
        } else {
            const inputParams = req.method === 'POST' ? req.body : req.query;
            const { videoId } = inputParams;

            if (videoId) {
               
                const userId = verifyToken(token);
                const findVideo = await findVideoIdByUser(
                    token,
                    userId,
                    videoId
                );

                const doesStatsExits = findVideo?.length > 0;
                if (req.method === "POST") {
                    const { favourited, watched = true } = req.body;
                    if (doesStatsExits) {
                        const response = await updateStats(token, {
                            favourited,
                            watched,
                            videoId,
                            userId,
                        });
                        resp.send({ data: response });
                    } else {
                        const response = await insertStats(token, {
                            favourited,
                            watched,
                            videoId,
                            userId,
                        });
                        resp.send({ data: response });
                    }

                } else {
                    if (doesStatsExits) {
                        resp.send(findVideo);
                    } else {
                        resp.status(404);
                        resp.send({ user: null, msg: "video not found" });
                    }
                }
            }
        }
    } catch (error) {
        console.error("Error occured /stats", error);
        resp.status(500).send({ done: false, error: error?.message });
    }
}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJkaWQ6ZXRocjoweDA1Y2E1RTJDQjk0MmViNjRiRDkyQjg2M2NkMjBFQjU2MkI3OGNFOTEiLCJwdWJsaWNBZGRyZXNzIjoiMHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIiwiZW1haWwiOiJzaHViaGFtLnN1bWZhY3RvckBnbWFpbC5jb20iLCJvYXV0aFByb3ZpZGVyIjpudWxsLCJwaG9uZU51bWJlciI6bnVsbCwid2FsbGV0cyI6W10sImlhdCI6MTY4NTY5MDk4NiwiZXhwIjoxNjg2Mjk1Nzg2LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiZGlkOmV0aHI6MHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIn19.mVcbZF7pNfEz6Txru0Kpu1H5CD63143hKIuGANtsEfE