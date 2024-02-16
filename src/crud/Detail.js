import React, { useState, useEffect } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Detail = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      methos: "follow",
    };
    fetch("http://localhost:3030/produks", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
    }
  }, [posts]);

  // button berhasil
  const handleClick = () => {
    alert("Pesanan anda sedang diproses, silahkan tunggu beberapa hari kedepan!!!");
  };

  const deleteProduks = async (id) => {
    axios
      .delete(`http://localhost:3030/produks/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("error deleting product:", error);
      });
  };

  // button edit
  const handleOpen = (id) => {
    window.location.href = `/edit/${id}`;
  };

  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <h2 className="mb-4">product</h2>
          <Table striped bordered hover responsive="md">
            <thead className="thead-dark" style={{ textAlign: "center" }}>
              <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Keterangan</th>
                <th>Gambar</th>
                <th>Harga</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{post.nama}</td>
                  <td>{post.detail}</td>
                  <td>
                    {post.img && (
                      <Image
                        src={post.img}
                        alt={post.nama}
                        fluid
                        className="img-responsive"
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                      />
                    )}
                  </td>
                  <td>{post.price}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Button
                        variant="warning"
                        style={{
                          backgroundColor: "#ffc107",
                          border: "none",
                          color: "white",
                          marginLeft: "auto", 
                        }}
                        onClick={handleClick}
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </Button>
                      <Button
                        variant="primary"
                        style={{
                          backgroundColor: "#007BFF",
                          border: "none",
                          color: "white",
                          marginLeft: "auto", 
                        }}
                        onClick={() => handleOpen(post.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} /> 
                      </Button>
                      <Button
                        variant="danger"
                        style={{
                          backgroundColor: "#FC3C3C",
                          border: "none",
                          color: "white",
                          marginLeft: "auto", 
                        }}
                        onClick={() => deleteProduks(post.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;