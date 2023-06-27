import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const response = handleResponseFromAPI(promise);
console.log(response);
