import React, { Component } from "react";
import * as material from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

import "./App.css";

const cities = [
  "China",
  "London",
  "Buenos Aires",
  "Bogota",
  "Washington",
  "España",
  "Mexico"
];

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <material.AppBar position="sticky">
            <material.Toolbar>
              <material.Typography variant="title" color="inherit">
                Weather App
              </material.Typography>
            </material.Toolbar>
          </material.AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <material.Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer />
              </div>
            </material.Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
