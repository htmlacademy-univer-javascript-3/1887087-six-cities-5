import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer.ts';
import {City} from '../../types/city.ts';
import {useMap} from '../hooks/use-map.tsx';
import {SingleOffer} from '../../types/single-offer.ts';

type MapProps = {
  City: City;
  Offers: (Offer | SingleOffer) [];
  ActiveOffer: Offer | SingleOffer | null;
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

export function Map(props: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, props.City);
  useEffect(() => {
    let isMounted = true;

    if (!isMounted) {
      return () => {
        isMounted = false;
      };
    }

    if (map) {
      const markerLayer = layerGroup().addTo(map);
      props.Offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            props.ActiveOffer !== null && offer.id === props.ActiveOffer.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
        isMounted = false;
      };
    }
  }, [map, props.Offers, props.ActiveOffer]);
  return <section className="cities__map map" style={{height: '500px'}} ref={mapRef}></section>;
}
