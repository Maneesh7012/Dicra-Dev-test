import React, { useEffect, useState } from "react";
import { useLeaflet, GridLayer } from "react-leaflet";
import { isNaN } from "lodash";
import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import chroma from "chroma-js";

export default function GeoRaster({ url }) {
  const { map, layerContainer } = useLeaflet();
  const layerRef = React.useRef(null);
  const [raster, setRaster] = useState();

  useEffect(() => {
    parseGeoraster(url).then((georaster) => {
      console.log("georaster", georaster);
      setRaster(georaster);
    });
  }, [url]);

  useEffect(() => {
    if (raster) {
      const layer = new GeoRasterLayer({
        attribution: "Planet",
        georaster: raster,
        debugLevel: 0,
        resolution: 128,
        pixelValuesToColorFn: (values) => {
          if (values === -9999) {
            return null;
          } else {
          const scale = chroma
            .scale([["#fafa6e",
            "#bdea75",
            "#86d780",
            "#54c18a",
            "#23aa8f",
            "#00918d",
            "#007882",
            "#1f5f70",
            "#2a4858"]])
            .domain([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
          const haveDataForAllBands = values.every(
            (value) => value != undefined && isNaN(value)
          );
          if (haveDataForAllBands) {
            return "#00000000";
          }
          const color = scale(values[0]).hex();

          return color;
        }
      }
      });

      console.log("GeoRaster_layer", layer);

      layerRef.current = layer;
      const container = layerContainer || map;

      container.addLayer(layer);
    }
    return () => {
      if (map && layerRef.current) {
        map.removeLayer(layerRef.current);
      }
    };
  }, [raster, map]);

  return null;
}
