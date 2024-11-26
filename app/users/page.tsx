import React from 'react'
interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-cache"})

    //re-request data after 10 seconds (no data cache)
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()
    return (
        <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {
                users.map(user => <li key = {user.id}>
                    {user.name}
                </li>)
            }
        </ul>
        </>
    )
}

export default UsersPage