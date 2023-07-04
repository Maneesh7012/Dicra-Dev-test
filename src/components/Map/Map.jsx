import React from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import {
  Map,
  TileLayer,
  ZoomControl,
  withLeaflet,
  FeatureGroup,
  Marker,
  GeoJSON,
} from 'react-leaflet';
// import GeoRaster from "./RGBGeoRaster";
import DISTRICTBOUNDS from "../../assets/Shapefiles/TS_District.json";
import MANDALBOUNDS from "../../assets/Shapefiles/TS_Mandal.json";
import Raster from "./raster.tif"
import MSCogRaster from "./MSCogRaster";
import axios from "axios";
const options = [
  { label: "Raster", value: "Raster" },
  { label: "Vector", value: "Vector" },
];
const MAP_STYLES = {
  position: "relative",
  width: "100%",
  height: "100vh",
};
class LeafletMap extends React.Component {
  constructor() {
    super();
    this.state = {
      latnew: 18.1124,
      longnew: 79.0193,
      mapZoom: 7.5,
      baseMap:
        "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      attribution: "",
      visible: false,
      baseMapselected: "Dark",
      currentbounds: DISTRICTBOUNDS,
      MapKey: 1,
      rasterUrl: "https://dicradevtiles.azureedge.net/dicra-dev/parameters/2/RASTER_TILE/raster_tile.tif",
    };
  }
  componentDidMount() {
    this.map = this.mapInstance.leafletElement;
  }


  render() {
    return (
      <div className="App">
        
        <Map
          maxZoom={18}
          minZoom={2}
          zoomSnap={0.25}
          zoomDelta={0.25}
          style={MAP_STYLES}
          zoom={this.state.mapZoom}
          center={[this.state.latnew, this.state.longnew]}
          ref={e => { this.mapInstance = e }}
          zoomControl={false}
        >
          <ZoomControl position="bottomright" className="btn-zoomcontrol" />
          <TileLayer
            attribution={this.state.attribution}
            url={this.state.baseMap}
          />
           <MSCogRaster
              url={this.state.rasterUrl}
            />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
