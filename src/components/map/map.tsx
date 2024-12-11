import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../consts.ts';
import {City} from '../../types/city.ts';
import {Offer, Offers} from '../../types/offer.ts';
import {Icon, layerGroup, Marker} from 'leaflet';
import {useEffect, useRef} from 'react';
import useMap from '../hooks/use-map.tsx';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker(offer.LatLng);

        marker
          .setIcon(
            selectedOffer !== undefined && offer.Name === selectedOffer.Name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
