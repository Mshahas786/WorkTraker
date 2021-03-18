import React from 'react';
// import logo from './logo.svg';
import { Button, Container} from 'react-bootstrap' ;
import './App.css';

function App() {
  return (
    <Container>
      <h1 className="text-center">WorkTraker</h1>
      <Button className="btn-warning ">
       <h3 className="text-light">click here </h3> 
      </Button>
    </Container>
  );
}

export default App;
