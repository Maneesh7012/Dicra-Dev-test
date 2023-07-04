import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import {
    FormGroup, Label, Input, Card, CardImg, CardBody,
    CardTitle, CardText, Button, Modal, Row,
    Col,
    ModalHeader,
    ModalBody,
} from "reactstrap";
import { usecases } from "../../assets/api/apiService";
import Imgset from "../../assets/images/usecases/test.png";

import "./style.css"
const UsecaseJH = () => {
    const [useCaseData, setuseCaseData] = useState([]);
    const [alluseCaseData, setAlluseCaseData] = useState([]);
    const [currentUsecase, setcurrentUsecase] = useState([]);
    const [modalShow, setmodalShow] = useState(false);
    useEffect(() => {
        getInit();
    }, []);

    function getInit() {
        usecases().then((json) => {
            console.log("JSON HERER", json)
            setuseCaseData(json.data.items)
            setAlluseCaseData(json.data.items)
        })

    }
    function seemore(data) {
        setcurrentUsecase(data)
        setmodalShow(true)
    }
    function togglemodal() {
        setmodalShow(!modalShow)
    }
    function changetype(type) {
        console.log("TYPE", type)
        if (type == "All") {
            setuseCaseData(alluseCaseData)
        } else {
            let result;
            result = alluseCaseData.reduce(function (r, a) {
                r[a.project_type] = r[a.project_type] || [];
                r[a.project_type].push(a);
                return r;
            }, Object.create(null));
            setuseCaseData(result[type])
        }
    }
    return (
        <div>
            <Header />
            <div className="container-page">
                <div style={{ display: "flex", marginTop: "60px" }}>
                    <FormGroup tag="fieldset" style={{
                        display: "flex", gap: "35px", background: "#143461",
                        "border-radius": "8px",
                        color: "white",
                        padding: "20px",
                        position: "relative",
                        top: "30px",
                        left: "50px"
                    }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" defaultChecked={true} onClick={(e) => { changetype("All") }} /> All
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onClick={(e) => { changetype("Article") }} /> Article
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onClick={(e) => { changetype("Analytics") }} /> Analytics
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onClick={(e) => { changetype("Project") }} /> Projects
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onClick={(e) => { changetype("News") }} /> News
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </div>
                <div style={{ justifyContent: "center", display: "flex", marginTop: 30, gap: "30px", padding: 40, flexWrap: 'wrap', paddingLeft: "0px",
                        paddingRight: "0px" }}>

                    {
                        useCaseData != [] ?
                            useCaseData.map((items, index) => {
                                return (


                                    <Card style={{ width: "30%", justifyContent: "center", display: "flex", alignItems: "center", padding: "20px", background: "#143461", borderRadius: 8 }} key={index}>
                                        <CardImg
                                            width="100px"
                                            height="250px"
                                            src={"https://api-dicra.misteo.co/static/" +
                                                items.image}
                                            alt="GFG Logo" />
                                        <CardBody style={{ color: "white" }}>
                                            <CardTitle tag="h5"> {items.project_name} </CardTitle>
                                            <CardText>{items.short_description}</CardText>

                                        </CardBody>
                                        <div style={{ width: "100%" }}>
                                            <Button style={{
                                                background: "#091B33",
                                                width: "100%",
                                                padding: 12
                                            }}
                                                onClick={(e) => {
                                                    seemore(items);
                                                }}
                                            >View More</Button>
                                        </div>
                                    </Card>
                                )
                            })
                            : <p>
                                No data found</p>}
                </div>
            </div>

            <Modal
                isOpen={modalShow}
                toggle={togglemodal}
                // className={this.props.className}
                size="xl"
                centered
                backdrop="static"
            >
                <ModalHeader toggle={togglemodal}>Use Cases</ModalHeader>
                <ModalBody
                    style={{
                        maxHeight: "calc(100vh - 120px)",
                        overflowY: "auto",
                    }}
                >
                    <div>
                        {" "}
                        <div>
                            <img
                                src={
                                    "https://api-dicra.misteo.co/static/" +
                                    currentUsecase.image
                                }
                                alt="..."
                                className="cover"
                            />
                            <div className="centered">
                                {currentUsecase.project_name}
                            </div>
                        </div>
                        <div className="container">
                            <div className="content-heading">
                                <h3 style={{ padding: "0px", marginBottom: "10px" }}>
                                    {currentUsecase.short_description}
                                </h3>
                            </div>
                            <div className="content-body">
                                <Row style={{ marginBottom: "10px" }}>
                                    <Col
                                        md={12}
                                        style={{ fontWeight: "bold", textAlign: "left" }}
                                    >
                                        <p>
                                            {" "}
                                            Uploaded By : {currentUsecase.username}
                                        </p>
                                    </Col>
                                    <Col md={12} style={{ textAlign: "left" }}>
                                        <a href={() => false} style={{ fontWeight: "bold" }}>URL : </a>{" "}
                                        <a
                                            href={currentUsecase.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {currentUsecase.url}
                                        </a>
                                    </Col>
                                </Row>
                                {currentUsecase.long_description}
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default UsecaseJH;