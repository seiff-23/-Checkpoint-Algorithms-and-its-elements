import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./player";
import players from "./players";

const PlayersList = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
