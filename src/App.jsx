import './App.css';
import { Fragment } from 'react';
import {Container, Col, Row} from "react-bootstrap"
import IMAGES from './assets/img/images';
import Image from './components/img';
import Button from './components/button';

function App() {
  return (
    <Fragment>
      <Container className='sec-body' as={'section'} fluid>
        <Row className='flex-row justify-content-center'>
        <Col className='col-lg-6 '>
          <div className='d-block'>
            <div className='d-flex flex-row justify-content-center'>
            <Image src={IMAGES.bordered_img} 
              className="rounded-circle custom-img" 
              width={'200'} 
              height={'200'}/>
            </div>
            <div className='d-block text-center line'>
              <h1 className='fw-bold text-font py-4'>About Company</h1>
              <p className='fs-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at 
                lacusat augue aliquet posuere. Aliquam fringilla elementum varius.
                Nunclobortis nisl in nibh commodo, quis placerat nisi feugiat.
              </p>
              <p className='fs-7'>Image from <a className='freepik'>Freepik</a></p>
            </div>

            <div className='d-flex flex-row justify-content-center mt-5'>
              <Button type="button" 
              className="btn custom-btn-1 rounded-pill w-30 py-4 fs-4 fw-bold me-3" 
              name={'Book a call'}/>
              <Button type="button"
              className="btn custom-btn-2 rounded-pill w-30 py-3 fs-4 fw-bold ms-3"
              name={'Our Works'}/>
            </div>
          </div>
        </Col>
        </Row>
      </Container>
      <Container className='sec-footer' as={'section'} fluid>
        <footer>
            <p className='text-center text-white fs-5 pt-2'>
              <a className='custom-link'>Website Template</a> created with <a className='custom-link'>Website Builder Software</a></p>
        </footer>
      </Container>
    </Fragment>
  );
}

export default App;
