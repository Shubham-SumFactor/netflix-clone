

export async function queryHasuraGQL(operationsDoc, operationName, variables) {
    const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL
     , 
      {
        method: "POST",
        headers: {
           //"x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET}, 
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2h1YmhhbSIsImlhdCI6MTY4NTQ3OTg2MCwiZXhwIjoxNjg2MDg0NzM1LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWlkIjoidGhha3VyIn19.NctvmQut-gisup0r0D4MvdIVOyaylfHzK2LyDXBiS14"},
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }


