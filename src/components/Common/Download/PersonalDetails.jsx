import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";
import { Form, Label, Input, FormText } from "reactstrap";
import Captcha from "demos-react-captcha";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      download: true,
    };
    this.onChangeCaptcha = this.onChangeCaptcha.bind(this);
  }
  onChangeCaptcha(value) {
    if (value === true) {
      this.setState({
        download: false,
      });
    } else {
      this.setState({
        download: true,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="download-section-personal"
          style={{ marginTop: "10px" }}
        >
          <div className="downloads-content">
            <Form style={{ display: "block", border: "none" }}>
              <FormGroup>
                <Input
                  type="name"
                  name="name"
                  id="examplename"
                  placeholder="Name"
                  style={{
                    background: "rgba(60, 60, 60, 0.3)",
                    backdropFilter: "blur(112px)",
                    borderRadius: "5px",
                    border: "none",
                    // height: "56px",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#979797",
                    "mix-blend-mode": "normal",
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  style={{
                    background: "rgba(60, 60, 60, 0.3)",
                    backdropFilter: "blur(112px)",
                    borderRadius: "5px",
                    border: "none",
                    // height: "56px",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#979797",
                    "mix-blend-mode": "normal",
                  }}
                />
              </FormGroup>
              <br />
              <FormGroup tag="fieldset">
                <legend
                  style={{
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "25px",
                    /* identical to box height */
                    color: "#FFFFFF",
                  }}
                >
                  Usage Type
                </legend>

                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                        lineHeight: "20px",
                        color: "#C1C1C1",
                      }}
                    />{" "}
                    Commercial
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                        lineHeight: "20px",
                        color: "#C1C1C1",
                      }}
                    />
                    Non - Commercial
                  </Label>
                </FormGroup>
              </FormGroup>
              <br />
              <FormGroup>
                <Label
                  for="exampleSelect"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "25px",
                    /* identical to box height */
                    color: "#FFFFFF",
                  }}
                >
                  Purpose
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  className="download-select"
                  style={{
                    // width: "375px",
                    backdropFilter: "blur(112px)",
                    borderRadius: "5px",
                    border: "none",
                    // height: "57px",
                    color: "#ffffff",
                    border: "none",
                    padding: "10px",
                    fontWeight: "600",
                    fontSize: "12px",
                    // lineHeight: "23px",

                    color: "#FFFFFF",
                  }}
                >
                  <option>R&D</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  style={{
                    background: " rgba(201, 201, 201, 0.3)",
                    backdropFilter: "blur(112px)",
                    /* Note: backdrop-filter has minimal browser support */
                    border: "none",
                    borderRadius: "5px",
                    height: "162px",
                    fontSize: "12px"
                  }}
                />
              </FormGroup>
              <FormGroup>
                <div className="captcha">
                  <Captcha
                    onChange={this.onChangeCaptcha}
                    placeholder="Enter captcha"
                    required
                  />
                </div>
              </FormGroup>
              <br />
              <Button
                type="submit"
                className="btn-downloads"
                disabled={this.state.download}
              >
                Download
              </Button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PersonalDetails;
