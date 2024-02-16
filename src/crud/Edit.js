import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function Edit() {
  const { id_produks } = useParams();
  const [posts, setPosts] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const [produks, setProduks] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/produks/${id_produks}`);
        const { nama, price, detail, img } = response.data;
        setPosts(response.data);
        setProduks(nama || '');
        setPrice(price || '');
        setDetail(detail || '');
        setImg(img || '');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id_produks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input name
    switch (name) {
      case 'nama':
        setProduks(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'detail':
        setDetail(value);
        break;
      case 'img':
        setImg(value);
        break;
      default:
        break;
    }
  };

  const edit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.put(`http://localhost:3030/produks/${id_produks}`, {
        nama: produks,
        img,
        detail,
        price,
      });
  
      history.push('/data_barang'); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="mb-4" style={{ width: '50%', margin: 'auto' }}>
      <Card.Body>
        {Object.keys(posts).length > 0 ? (
          <>
            <div className="text-center">
              <img src={posts.img} alt={posts.nama} style={{ maxWidth: '50%', marginBottom: '15px' }} />
            </div>
            <FloatingLabel controlId="floatingTextarea1" label="Nama" className="mb-3">
              <Form.Control
                type="text"
                name="nama"
                value={produks}
                onChange={handleChange}
                autoComplete="off"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Harga" className="mb-3">
              <Form.Control
                type="text"
                name="price"
                value={price}
                onChange={handleChange}
                autoComplete="off"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea3" label="Detail" className="mb-3">
              <Form.Control
                as="textarea"
                name="detail"
                value={detail}
                onChange={handleChange}
                autoComplete="off"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <Button variant="primary" onClick={edit}>
              Save
            </Button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default Edit;