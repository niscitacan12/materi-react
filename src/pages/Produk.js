import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Produk = () => {
  const [posts, setPosts] = useState([]);

  const getAll = () => {
    axios 
    .get('http://localhost:3030/produks')
    .then((res) => {
      setPosts(res.data);
    })
  }

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

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {posts.map((post) => (
        <Col key={post.id}>
          <Card>
            {post.img && (
              <Card.Img
                variant="top"
                src={post.img}
                alt={post.nama}
                style={{ height: '200px', objectFit: 'cover' }}
              />
            )}
            <Card.Body>
              <Card.Title>{post.nama}</Card.Title>
              <Card.Text>Rp{post.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Produk;