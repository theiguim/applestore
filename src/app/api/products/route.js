import products from "../../../../database.json";

export function GET(){

    return new Response (JSON.stringfy(products), {
        status: 200,
        headers: {
            "Content-Type":"application/json"
        },
    });
};
