import React, { useState, useEffect } from "react";

const TesJson = () => {
    const [posts, setPosts] = useState([]);

    const getData = () => {
        var requestOptions = {
            method: "GET",
            methos: "follow",
        };
        fetch("http://localhost:3030/details", requestOptions)
            .then((response) => response.json())
            .then((result) => setPosts(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        {posts.map((post) => (
            <div key={post.id}>
                <h3>
                    <span>{post.id}</span> {post.nama}
                </h3>
                <p>{post.price}</p>
            </div>
        ))}
    </div>
  );
};

export default TesJson