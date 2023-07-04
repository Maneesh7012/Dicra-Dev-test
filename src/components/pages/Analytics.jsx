import React from "react";
import "./style.css";
import Header from "../Common/Header";
class Analytics extends React.Component {
  constructor() {
    super();
    this.state = {
    //  loader : true
  }
}
// hideLoader = () => {
//   this.setState({
//     loader: false
//   });
// };

  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <Header />
        </div>
        <div className="container-page">
          <div style={{marginTop: "5%"}}>
                <div className="iframe-container">
                 
                  <iframe
                    className="google-analytics"
                    title="Analytics"
                    width="100%"
                    height={2000}
                    src="https://datastudio.google.com/embed/reporting/2aef4516-1c78-4a08-84d8-00eed13cd07b/page/1M"
                    frameBorder={0}
                    style={{ border: "0" }}
                    allowFullScreen
                    // onLoad={this.hideLoader}
                  ></iframe>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Analytics;
