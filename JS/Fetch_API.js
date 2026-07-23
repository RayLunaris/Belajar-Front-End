async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

async function createPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'Postingan Baru',
            body: 'Konten postingan...'
        })
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const post = await getPosts();
        console.log("GET Result:", post);

        const newPost = await createPost();
        console.log("POST Result:", newPost);
    } catch (error) {
        console.error("Fetch Error:", error.message);
    }
})();
