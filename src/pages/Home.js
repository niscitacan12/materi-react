import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faParachuteBox, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import vendor from "../assets/img/Vendor.jpeg";

const title1 = "Server Payment";
const description1 = "You can make payments with the server";

const title2 = "Free Shipping";
const description2 = "If you want to do it, there will be no fee";

const title3 = "10 Day's Reterna";
const description3 = "You can wait 10 days for the goods to arrive";

export const Home = () => {
  return (
    <section>
      <Container fluid className="home">
        <div className="d-flex">
          <div className="wrap-text">
            <span className="tangline">Welcome To The Portfolio</span>
            <h1>Welcome and please take a look at the items you need</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              minima quam, molestias a, vel id enim doloribus vitae officia
              obcaecati repellendus ipsam explicabo eum praesentium voluptate
              temporibus, odio iusto iure!
            </p>
          </div>
          <div className="image">
            <img
              src={vendor}
              alt="Vendor"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Container>

      <Container className="d-flex justify-content-between">
        <Card bg="primary" text="white" style={{ maxWidth: '400px', margin: '8px' }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div>
                <FontAwesomeIcon icon={faWallet} size="2x" style={{ marginRight: '30px' }} />
              </div>
              <div>
                <Card.Title>{title1}</Card.Title>
                <Card.Text>{description1}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card bg="primary" text="white" style={{ maxWidth: '400px', margin: '8px' }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div>
                <FontAwesomeIcon icon={faParachuteBox} size="2x" style={{ marginRight: '30px' }} />
              </div>
              <div>
                <Card.Title>{title2}</Card.Title>
                <Card.Text>{description2}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card bg="primary" text="white" style={{ maxWidth: '400px', margin: '8px' }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div>
                <FontAwesomeIcon icon={faCalendarDay} size="2x" style={{ marginRight: '30px' }} />
              </div>
              <div>
                <Card.Title>{title3}</Card.Title>
                <Card.Text>{description3}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>

      <Container fluid className="my-5 p-4 bg-primary text-white text-center">
        <Row>
            {/* Documents Section */}
            <Col md={6} className="text-left align-items-center">
            <div>
                <h6>Documents</h6>
                <ul className="list-unstyled">
                <li>Goods</li>
                <li>Needs</li>
                <li>Beginning</li>
                </ul>
            </div>
            </Col>

            {/* Public Section */}
            <Col md={6} className="text-left align-items-center">
            <div>
                <h6>Public</h6>
                <ul className="list-unstyled">
                <li>Stack Overflow</li>
                </ul>
            </div>
            </Col>
        </Row>

        <div className="pb-4">
            <p className="text-center">Copyright © 2024. Created for the task of using Bootstrap.</p>
        </div>
      </Container>
    </section>
  );
}

export default Home;