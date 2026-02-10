import { use } from "react";

const Users = ({ usersPromise }) => {
    const users = use(usersPromise)
    console.log(users)

    const handleAddUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        console.log(user)

        //create user in the user
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log('data after post', data))
    };
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;