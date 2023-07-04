import React, { Component } from "react";
import Colorscale from "../Common/Colorpicker/ColorScale";
import ColorscalePicker from "../Common/Colorpicker/ColorScalePicker";
import { DEFAULT_SCALE } from "../Common/Colorpicker/constant";
import { clone } from "ramda";
import { Row, Col} from "reactstrap";
import { BiPalette, BiX } from "react-icons/bi";

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.toggleColorscalePicker = this.toggleColorscalePicker.bind(this);
    this.recolorData = this.recolorData.bind(this);

    this.state = {
      showColorscalePicker: false,
      colorscale: DEFAULT_SCALE,
      data: [],
      isActive: true,
    };
  }

  recolorData = (dataToRecolor) => {
    const data = clone(dataToRecolor);
    return data;
  };

  onChange = colorscale => {
    const data = this.recolorData(
      this.state.data,
      colorscale,
    );

    this.setState({
      data: data,
      colorscale: colorscale
    });
  };

  toggleColorscalePicker = () => {
    this.setState({ showColorscalePicker: !this.state.showColorscalePicker });
  };
  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    let toggleButtonStyle = {};
    if (this.state.showColorscalePicker) {
      toggleButtonStyle = { borderColor: "#A2B1C6" };
    }
    const isActive = this.state.isActive;
    return (
      <div className="App">
        <div
          onClick={this.toggleColorscalePicker}
          className="toggleButton"
          style={toggleButtonStyle}
        >
          <Row>
            <Col md={10}>
            <Row>
            <Col>
            <Colorscale
            colorscale={this.state.colorscale}
            onClick={() => {}}
            width={200}
          />
            </Col>
          </Row>
          <Row>
            <Col className="legend-low">
            Low
            </Col>
            <Col className="legend-high">
            High
            </Col>
          </Row>
            </Col>
            <Col>
            {isActive ? (
                  <BiPalette
                    className="palette-icon"
                    onClick={this.handleToggle}
                  />
                ) : (
                  <BiX
                    className="palette-icon-close"
                    onClick={this.handleToggle}
                  />
                )}
            </Col>
          </Row>
        </div>
        {this.state.showColorscalePicker && (
          <ColorscalePicker
            onChange={this.onChange}
            colorscale={this.state.colorscale}
            width={300}
            disableSwatchControls
          />
        )}
      </div>
    );
  }
}

export default ColorPicker;