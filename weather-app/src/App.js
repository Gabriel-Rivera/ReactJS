import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as material from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';


const cities = [
  'China', 'London', 'Buenos Aires', 'Bogota', 'Washington', 'España'
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
  }

  handSelectedLocation = city => {
    this.setState({ city });

    this.props.setCity(city);

  }

  render() {
    const { city } = this.state;
    return (
      <Grid fluid>
        <Row>
          <material.AppBar position='sticky'>
            <material.Toolbar>
              <material.Typography variant='title' color='inherit'>
                Weather App
              </material.Typography>
            </material.Toolbar>
          </material.AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <material.Paper elevation={4}>
              <div className="details">
                {city !== null ?
                  <ForecastExtended city={city}></ForecastExtended> :
                  null
                }
              </div>
            </material.Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapDispatchToPropsActions = dispatch => ({ 
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
