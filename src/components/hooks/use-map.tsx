import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../../types/city';

export function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (mapRef.current !== null && !isRenderedRef.current) {
        const instance = new Map(mapRef.current, {
          center: {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          zoom: 10,
        });
        const layer = new TileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        );
        instance.addLayer(layer);
        setMap(instance);
        isRenderedRef.current = true;
      }
    }
    return () => {
      isMounted = false;
    };

  }, [mapRef, city]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (map) {
        map.setView(
          [city.location.latitude, city.location.longitude],
          city.location.zoom
        );
      }
    }
    return () => {
      isMounted = false;
    };
  }, [map, city]);

  return map;
}
