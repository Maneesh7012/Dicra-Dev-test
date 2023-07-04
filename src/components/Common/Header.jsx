import './Header.css';
import { Fragment } from 'react';
import { Row, Col } from "reactstrap";
import Telangana from "../../assets/images/telangana.png"
import Undp from "../../assets/images/undp-logo-blue.svg";
const Header = () => {


  return (
    <Fragment>
        <div className="header">
       
      <div className="topnav-left">
          <Row style={{marginTop:"5px"}}>
            <Col className="dicra">
              DiCRA
            </Col>
          </Row>
          <div className="heading">Data in Climate Resilient Agriculture</div>
        </div>
        <div className="topnav-right">
          <Row>
            <Col className="telangana-logo">
              <img src={Telangana} width={50} height={50} alt="Telengana" />
            </Col>
            <Col className="undp-logo">
              <img src={Undp} width={25} height={50} alt="Undp" />
            </Col>
          </Row>
        </div>
        </div>
    </Fragment>
  );
};

export default Header;
