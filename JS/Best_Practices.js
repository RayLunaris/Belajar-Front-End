'use strict';

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

async function fetchUserData() {
    let state = { loading: true, error: null, data: null };
    
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        state.data = data;
    } catch (err) {
        state.error = err.message;
    } finally {
        state.loading = false;
    }

    const city = state.data?.address?.city ?? "Unknown";
    console.log(`User: ${state.data?.name ?? 'N/A'}, City: ${city}`);
    
    return state;
}

fetchUserData().then(state => console.log(state));
