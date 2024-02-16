import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ponselImage from "../assets/img/Ponsel.jpeg";

function Contact() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card className="p-4" style={{ width: '50%', marginRight: '20px' }}>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="" defaultValue="Niscita" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="" defaultValue="citacita@gmail.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPhone" label="Number" className="mb-3">
          <Form.Control type="text" placeholder="" defaultValue="089525763194" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingMessage" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a message here"
            style={{ height: '100px' }}
            defaultValue="Halo, saya tertarik dengan layanan Anda. Bisakah kita berdiskusi lebih lanjut?"
          />
        </FloatingLabel>
      </Card>
      <Image
        src={ponselImage}
        alt="Ponsel"
        style={{ width: '400px', height: '400px', borderRadius: '400%', marginLeft: '20px' }}
      />
    </div>
  );
}

export default Contact;