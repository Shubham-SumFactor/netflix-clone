export async function isNewUser(token) {
  const operationsDoc = `
  query MyQuery {
    users(where: {issuer: {_eq: "did:ethr:0x05ca5E2CB942eb64bD92B863cd20EB562B78cE91"}}) {
      email
      issuer
      publicAddress
      id
    }
  }
  `;

  const response = await queryHasuraGQL(operationsDoc, "MyQuery", {}, token);

  //console.log({ response });
  return response?.users?.length === 0 ;
};


export async function queryHasuraGQL(operationsDoc, operationName, variables, token) {
    const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL
     , 
      {
        method: "POST",
        headers: {
           //"x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET}, 
            "Authorization": `Bearer ${token}` ,
            "Content-type" : "application/json",
        },
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }

  
  const operationsDoc = `
  query MyQuery {
    users(where: {issuer: {_eq: "did:ethr:0x05ca5E2CB942eb64bD92B863cd20EB562B78cE91"}}) {
      email
      issuer
      publicAddress
      id
    }
  }
  `;
   
  function fetchMyQuery() {
    return queryHasuraGQL(operationsDoc, "MyQuery", {},'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJkaWQ6ZXRocjoweDA1Y2E1RTJDQjk0MmViNjRiRDkyQjg2M2NkMjBFQjU2MkI3OGNFOTEiLCJwdWJsaWNBZGRyZXNzIjoiMHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIiwiZW1haWwiOiJzaHViaGFtLnN1bWZhY3RvckBnbWFpbC5jb20iLCJvYXV0aFByb3ZpZGVyIjpudWxsLCJwaG9uZU51bWJlciI6bnVsbCwid2FsbGV0cyI6W10sImlhdCI6MTY4NTYxMTc2NywiZXhwIjoxNjg2MjE2NTY3LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiZGlkOmV0aHI6MHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIn19.kizsTmlBh97DrQf95puKUGfeb4x6nmSCLHKQU8OPLbI');
  }
  
  export async function startFetchMyQuery() {
    
    
    const { errors, data } = await fetchMyQuery();
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
    // do something great with this precious data
    console.log(data);
  }
  startFetchMyQuery();
