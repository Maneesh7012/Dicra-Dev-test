import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Header from "../Common/Header";
import image1 from "../../assets/images/partners/undp.png";
import image2 from "../../assets/images/jharkhand.png";
import image3 from "../../assets/images/partners/rockefeller.png";
import image4 from "../../assets/images/partners/icrisat.png";
import image5 from "../../assets/images/partners/jads.png";
import image6 from "../../assets/images/partners/rich.png";
// import image7 from "../../assets/images/partners/tel-agri.png";
import image8 from "../../assets/images/partners/tilburg.png";
import image9 from "../../assets/images/partners/misteo.png";
import { getlayers } from "../../assets/api/apiService";

function AboutJH(props) {
  const [open, setOpen] = useState("");
  const [allLayers, setLayers] = useState([]);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const getLayersdetails = () => {
    getlayers().then((json) => {
      console.log("JSON HERER LAYERS", json)
      let result;
      result = json.data;
      setLayers(result)
      console.log("RESULT ", result)
      // layerList([result]);
      // setCategorylist(Object.keys([result][0]));
    })
  };
  useEffect(() => {
    getLayersdetails();
  }, []);
    return (
      <React.Fragment>
        <div className="page-header">
          <Header />
        </div>
        <div className="container-page">
          <div
            style={{
              marginTop: "100px",
              marginBottom: "50px",
              marginLeft: "45px",
              marginRight: "45px",
              color: "#FFFFFF",
              textAlign: "justify",
            }}
          >
            <div className="about-heading">About Project</div>
            <div className="about-content" style={{marginBottom:"44px"}}>
              Data in Climate Resilient Agriculture (DiCRA) is a collaborative
              digital public good which provides open access to key geospatial
              datasets pertinent to climate resilient agriculture. These
              datasets are curated and validated through collaborative efforts
              of hundreds of data scientists and citizen scientists across the
              world. The pattern detection and data insights emerging from DiCRA
              are aimed towards strengthening evidence-driven policy making for
              climate resilient food systems. DiCRA is guided by the digital
              public good principles of open access, open software, open code
              and open APIs.
            </div>
            <div className="about-sub-heading">Partners</div>
            <div className="partner-content"  style={{marginBottom:"44px"}}>
              The platform is facilitated by Government of Jharkhand and UNDP,
              in collaboration with Zero Huger Lab (Netherlands), JADS
              (Netherlands), ICRISAT, PJTSAU, and RICH. It is part of UNDP’s
              ‘Data for Policy’ initiative supported by Rockefeller Foundation.
            </div>
            <div className="partner-img" style={{marginBottom:"44px"}}>
              <ul class="brands" style={{listStyle:"none", paddingLeft:"0", paddingRight:"0"}}>
                <li class="brands__item">
                  <a href="#">
                    <img src={image1} alt="" />
                  </a>
                </li>
                <li class="brands__item">
                  <a href="#">
                    <img src={image2} alt="" />
                  </a>
                </li>
                <li class="brands__item">
                  <a href="#">
                    <img src={image3} alt="" />
                  </a>
                </li>
                <li class="brands__item">
                  <a href="#">
                    <img src={image4} alt="" />
                  </a>
                </li>
                <li class="brands__item">
                  <a href="#">
                    <img src={image5} alt="" />
                  </a>
                </li>
                <li class="brands__item">
                  <a href="#">
                    <img src={image6} alt="" />
                  </a>
                </li>
                {/* <li class="brands__item">
                  <a href="#">
                    <img src={image7} alt="" />
                  </a>
                </li> */}
                <li class="brands__item">
                  <a href="#">
                    <img src={image8} alt="" />
                  </a>
                </li>
                <li class="brands__item">
                  <a href="#">
                    <img src={image9} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="about-sub-heading">Data Source</div>
            <div>

              <Accordion flush open={open} toggle={toggle}>
                <AccordionItem style={{background: "#091b33"}}>
                  <AccordionHeader targetId="1" className="about-accordion-heading">Normalized Difference Vegetation Index (NDVI)</AccordionHeader>
                  <AccordionBody accordionId="1" className="about-accordion-content">
                  <div className="about-layer">
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Description</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>NDVI quantifies vegetation by measuring the difference between near-infrared (which vegetation strongly reflects) and red light (which vegetation absorbs)</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Source</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>GLAM NDVIDB</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Citation</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>Didan, K. (2015). MOD13A1 MODIS/Terra Vegetation Indices 16-Day L3 Global 500m SIN Grid V006 [Data set]. NASA EOSDIS Land Processes DAAC. Accessed 2022-04-12 from https://doi.org/10.5067/MODIS/MOD13A1.006</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Standards</div>
                  <div className="layer-description">All data distributed by the LP DAAC contain no restrictions on the data reus</div>
                  </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem style={{background: "#091b33"}}>
                  <AccordionHeader targetId="2" className="about-accordion-heading">Soil Moisture</AccordionHeader>
                  <AccordionBody accordionId="2" className="about-accordion-content">
                  <div className="about-layer">
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Description</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>The SMAP L2 Radiometer Half-Orbit 36 km EASE-Grid Soil Moisture, Version 6 product provides estimates of global land surface conditions retrieved by the Soil Moisture Active Passive (SMAP) passive microwave radiometer during 6:00 a.m. descending and 6:00 p.m. ascending half-orbit passes. SMAP L-band brightness temperatures are used to derive soil moisture data, which are then resampled to an Earth-fixed, global, cylindrical 36 km Equal-Area Scalable Earth Grid, Version 2.0 (EASE-Grid 2.0).</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Source</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>NASA</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Citation</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>O'Neill, P. E., S. Chan, E. G. Njoku, T. Jackson, R. Bindlish, and J. Chaubell. 2019. SMAP L2 Radiometer Half-Orbit 36 km EASE-Grid Soil Moisture, Version 6. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. doi: https://doi.org/10.5067/R50VUC07OM4W. [03-04-2022]</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Standards</div>
                  <div className="layer-description">Free to use with Citation</div>
                  </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem style={{background: "#091b33"}}>
                  <AccordionHeader targetId="3" className="about-accordion-heading">Leaf Area Index</AccordionHeader>
                  <AccordionBody accordionId="3" className="about-accordion-content">
                  <div className="about-layer">
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Description</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>Half of the total area of green leafs of the vegetation per unit of ground. This measure is a dimensionless indicator for the thickness of the vegetation cover.</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Source</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>Copernicus Land Monitoring Service</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Citation</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>European Union, Copernicus Land Monitoring Service 2022, European Environment Agency (EEA) f.ex. in 2018: European Union, Copernicus Land Monitoring Service 2018, European Environment Agency (EEA) (Copernicus Service information 2022)</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Standards</div>
                  <div className="layer-description">Any citizen or organisation around the world can access the Copernicus Land Monitoring Service on a free, full and open access basis. There is no restriction on the use, reproduction or redistribution of the information and data.The Copernicus Land Monitoring Service is free to access by any citizen or organisation in the world.</div>
                  </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem style={{background: "#091b33"}}>
                  <AccordionHeader targetId="4" className="about-accordion-heading">Land Surface Temperature (LST)</AccordionHeader>
                  <AccordionBody accordionId="4" className="about-accordion-content">
                  <div className="about-layer">
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Description</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>The radiative skin temperature of the land surface during daytime expressed in degree Celsuis. It plays an important role in the exchange of energy and water between the ground and vegetation.</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Source</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>Google Earth Engine</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Citation</div>
                  <div className="layer-description" style={{marginBottom:"25px"}}>Wan, Z., Hook, S., Hulley, G. (2021). MODIS/Terra Land Surface Temperature/Emissivity Daily L3 Global 1km SIN Grid V061 [Data set]. NASA EOSDIS Land Processes DAAC. Accessed 2022-09-03 from https://doi.org/10.5067/MODIS/MOD11A1.061</div>
                  <div className="layer-heading" style={{marginBottom:"25px"}}>Standards</div>
                  <div className="layer-description">MODIS data and products acquired through the LP DAAC have no restrictions on subsequent use, sale, or redistribution.</div>
                  </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
    
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
export default AboutJH;
