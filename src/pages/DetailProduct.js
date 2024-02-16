import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Image } from "react-bootstrap";

function DetailProduct() {
    const { id_produks } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios
                .get("http://localhost:3030/produks/" + id_produks)
                .then((data) => setPosts(data.data))
                .catch((error) => console.log(error));
        };
        getData();
    }, [id_produks]);

    return (
        <div>
            <h3>
                <span>{posts.id} </span>{posts.nama}
            </h3>
            {posts.img && (
                <Image 
                    src={posts.img} 
                    alt={posts.nama} 
                    fluid 
                    className="img-responsive" 
                    style={{ maxHeight: "400px", objectFit: "cover" }} 
                />
            )}
            <p>{posts.detail}</p>
            <p>{posts.price}</p>
        </div>
    );
}

export default DetailProduct;