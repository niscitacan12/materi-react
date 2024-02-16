import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function TambahData() {
  const [produks, setProduks] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [img, setImg] = useState("");

  const addData = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3030/produks", {
        nama: produks,
        img: img,
        detail: detail,
        price: price,
      });

      window.location.reload('/data_barang');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="mb-4" style={{ width: '50%', margin: 'auto' }}>
      <Card.Body>
        <>
          <FloatingLabel controlId="floatingNama" label="Nama" className="mb-3">
            <Form.Control
              type="text"
              name="nama"
              value={produks}
              autoComplete="off"
              onChange={(e) => setProduks(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingHarga" label="Harga" className="mb-3">
            <Form.Control
              type="text"
              name="price"
              value={price}
              autoComplete="off"
              onChange={(e) => setPrice(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingLinkGambar" label="Link Gambar" className="mb-3">
            <Form.Control
              as="textarea"
              name="img"
              value={img}
              autoComplete="off"
              onChange={(e) => setImg(e.target.value)}
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingDetail" label="Detail" className="mb-3">
            <Form.Control
              as="textarea"
              name="detail"
              value={detail}
              autoComplete="off"
              onChange={(e) => setDetail(e.target.value)}
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <Button variant="primary" onClick={addData}>
            Save
          </Button>
        </>
      </Card.Body>
    </Card>
  );
}

export default TambahData;