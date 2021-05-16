import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaCard from './Card.js';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="App" >
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">TopConnect</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar>
        <h1>Welcome to TopConnect provider</h1>
        <h3>We are connecting people around the world</h3>
        <Box ml={12} mt={14}>
          <Grid container spacing={4} ml={2}>
            <Grid item xs={12} lg={3}>
              <MediaCard note={{ title: "Internet", description: "Access to the web with a highest speed", img: "./img/mobileTop.jpg" }} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <MediaCard note={{ title: "Phone connectivity", description: "Calls and internet access from any place", img: "./img/phone.jpg" }} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <MediaCard note={{ title: "Solutions for companies", description: "Offers for a big scale", img: "./img/companies.png" }} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <MediaCard note={{ title: "Customer service", description: "A helping hand for everyone", img: "./img/hand.jpg" }} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
