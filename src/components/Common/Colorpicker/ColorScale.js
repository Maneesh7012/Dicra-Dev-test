import React, {Component} from 'react';
import {DEFAULT_SCALE} from './constant';

export default class Colorscale extends Component {
  render() {
    const scale = this.props.colorscale ? this.props.colorscale : DEFAULT_SCALE;

    return (
      <div style={{width: '100%'}} className="colorscale-container">
        {this.props.label ? (
          <div
            className="colorscale-label"
            style={{
              fontWeight: 600,
              fontSize: '12px',
              color: '#CCDEEE',
              display: 'inline-block',
              width: '25%',
              textAlign: 'start',
            }}
          >
            {this.props.label}
          </div>
        ) : null}
        <div
          className="colorscale-palette-container"
          style={{
            display: 'inline-block',
            textAlign: 'start',
            width: this.props.label ? '75%' : '100%',
          }}
        >
          <div
            className="colorscale-block"
            style={{
              fontSize: '0px',
              display: 'inline-block',
              width: '100%',
            }}
            onClick={() => this.props.onClick(scale, this.props.start, this.props.rot)}
          >
            {scale.map((x, i) => (
              <div
                key={i}
                className="colorscale-swatch"
                style={{
                  backgroundColor: x,
                  width: '' + 100.0 / scale.length + '%',
                  height: '20px',
                  margin: '0 auto',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}