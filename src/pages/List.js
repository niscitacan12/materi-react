function List() {
    // const cars = ['BMW', 'Ayla', 'Volvo'];
    const users = [
        {
            username: "Niscita",
            email: 'email@gmail.com',
            name: 'Niscita Candrarini'
        },
        {
            username: "Niscita",
            email: 'email@gmail.com',
            name: 'Niscita Candrarini'
        },
        {
            username: "Niscita",
            email: 'email@gmail.com',
            name: 'Niscita Candrarini'
        },
        {
            username: "Niscita",
            email: 'email@gmail.com',
            name: 'Niscita Candrarini'
        }
    ]
  return(
    <>
        {/* <h2>Car</h2>
        <ul>
            {cars.map((car) => (
                <li>My Car Is</li>
            ))}
        </ul> */}
        <h2>User</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                         <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {/* <ul>
            {users.map((user) => (
                <li>username : {user.username}</li>
            ))}
        </ul> */}
    </>
  );
}

export default List;