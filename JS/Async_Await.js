async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

(async () => {
    try {
        const data = await getData();
        console.log(data);

        const [users, posts] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json())
        ]);

        console.log(users);
        console.log(posts);
    } catch (error) {
        console.error(error);
    }
})();
