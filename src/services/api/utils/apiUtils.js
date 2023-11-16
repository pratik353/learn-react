

// handle Syncronised RESPONSE of API

export async function handleResponse(response) {
  if (response.ok) {
    // console.log(response.json());
    return response.json();
  }
  if (response.status === 404) {

    // handle  serverside errors
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
//   throw new Error("Network response was not ok.");
}


// display error on client side
export function handleError(error){
    console.error('API call failed', error);
    throw error;
}
