export async function getOffers(){
    return await fetch("http://localhost:4000/offers")
    .then(function (resp) {
        return resp.json();
    })
    .catch((error) => {
        return error;
    });
}