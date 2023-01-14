const crateTodos = async (todo) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(todo),
    };
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    return response;
}

const getTodo = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let p = await response.json();
    return p;
}

const mainFunc = async () => {
    let todo = {
        title: "Title of post",
        body: "body",
        userId: 1
    }
    let a = await crateTodos(todo);
    console.log(a);
    console.log(await getTodo(15));
}

mainFunc();