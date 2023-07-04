import React, { useEffect, useState } from "react";
import { useLeaflet } from "react-leaflet";
import { isNaN } from "lodash";
import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import chroma from "chroma-js";
import geoblaze from 'geoblaze';
export default function GeoRaster({ url, min = -1, max = 1 }) {
    const { map, layerContainer } = useLeaflet();
    const layerRef = React.useRef(null);
    const [raster, setRaster] = useState();

    useEffect(() => {
        parseGeoraster(url).then((georaster) => {
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
                    const scale = chroma
                        .scale(["#B31C08", "#E6E60B", "#1FB308"])
                        .domain([0, 1]);

                    const haveDataForAllBands = values.every(
                        (value) => value != false || isNaN(value)
                    );

                    if (!haveDataForAllBands) {
                        return "#00000000";
                    }

                    const color = scale(values[0]).hex();

                    return color;
                }
            });
            map.on("mousemove", function (evt) {
                // console.log("EVT", evt)
            })

            map.on('click', async (e) => {

                const latlng = [e.latlng.lng, e.latlng.lat];
                const results = await geoblaze.identify(raster, latlng);
                console.log("VALUER", results)

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
    }, [raster, map, layerContainer]);

    useEffect(() => {
        if (layerRef.current) {
            layerRef.current.options.pixelValuesToColorFn = (values) => {
                const scale = chroma
                    .scale(["#B31C08", "#E6E60B", "#1FB308"])
                    .domain([min, max]);

                const haveDataForAllBands = values.every(
                    (value) => value != false || isNaN(value)
                );

                if (!haveDataForAllBands) {
                    return "#00000000";
                }

                const color = scale(values[0]).hex();

                return color;
            };
            layerRef.current.redraw();
        }
    }, [min, max, layerRef.current]);

    return null;
}