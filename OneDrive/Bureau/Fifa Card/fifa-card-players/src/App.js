import React from "react";
import "./index";
import PlayersList from "./PlayersList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="text-center mt-4">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </Container>
  );
}

export default App;
