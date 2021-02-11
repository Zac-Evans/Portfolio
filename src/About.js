import React, { Component } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import SiteNavbar from './SiteNavbar';
import { Paper } from '@material-ui/core';
import Headshot from './img/headshot.gif';
import Button from '@material-ui/core/Button';
import { Fade, Slide } from 'react-awesome-reveal';

class About extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xl='2' lg='2' md='0' sm='0' xs='0' />
          <Col
            className='d-flex justify-content-center p-3'
            xl='3'
            lg='3'
            md='12'
            sm='12'
            xs='12'
          >
            <Fade duration={3000} triggerOnce>
              <img
                src={Headshot}
                style={{ width: '50vw', maxWidth: '300px' }}
                className='d-flex align-self-center'
              />
            </Fade>
          </Col>

          <Col className='p-3 m-0 w-100' xl='5' lg='5' md='12' sm='12' xs='12'>
            <Fade direction='up' duration={2000} delay={500} triggerOnce>
              <h2 style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>About me</h2>
            </Fade>
            <Fade direction='up' delay={1000} duration={2500} triggerOnce>
              <p className='' style={{ fontSize: 'clamp(16px,2vw, 20px)' }}>
                With a professional background in music, I have always been
                dedicated to the idea of applying technical ability towards
                creative endeavors.
                <br /> <br />
                As more of our lives take place on the web, I have discovered a
                passion for building and designing enjoyable and engaging spaces
                for people online. The combination of design, technology,
                ingenuity and creativity is what initially drew me to the field
                of software and web development, and I aim to bring that
                marriage of ideas to life in each project I work on.
              </p>
            </Fade>
          </Col>

          <Col xl='2' lg='2' md='0' sm='0' xs='0' />
        </Row>
        <Row className='d-flex justify-content-center'>
          <a href='Zac-Evans-Resume.pdf' target='_blank'>
            <Fade direction='down' delay={2500} duration={2000} triggerOnce>
              <Button
                variant='outlined'
                color='primary'
                style={{ width: '200px', height: '80px', fontSize: '20px' }}
                className='m-4'
              >
                View Resume
              </Button>
            </Fade>
          </a>
          <a href='/projects'>
            <Fade direction='down' delay={3500} duration={2000} triggerOnce>
              <Button
                variant='outlined'
                color='primary'
                style={{ width: '200px', height: '80px', fontSize: '20px' }}
                className='m-4'
              >
                See Projects
              </Button>
            </Fade>
          </a>
        </Row>
      </Container>
    );
  }
}

export default About;
