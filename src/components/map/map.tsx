import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer, Offers} from '../../types/offer.ts';
import {City} from '../../types/city.ts';
import {useMap} from '../hooks/use-map.tsx';

type MapProps = {
  City: City;
  Offers: Offers;
  SelectedOffer: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map(props: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, props.City);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      props.Offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.LatLng.lat,
          lng: offer.LatLng.lng,
        });
        marker
          .setIcon(
            props.SelectedOffer !== undefined && offer.Id === props.SelectedOffer.Id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, props.Offers, props.SelectedOffer]);
  return <section className="cities__map map" ref={mapRef}></section>;
}
