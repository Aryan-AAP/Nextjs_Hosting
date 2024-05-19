export async function  POST(request){

const {name }  = await request.json();
    return Response.json({message:`Hello ${name}`})
}