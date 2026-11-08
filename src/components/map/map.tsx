import { useEffect, useRef } from 'react';
import { icon, layerGroup, Map as LeafletMap, marker, tileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../mocks/offers';

type MapProps = {
  offers: Offer[];
  activeOfferId: string | null;
  latitude: number;
  longitude: number;
  zoom: number;
};

const defaultIcon = icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeIcon = icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

export default function Map({ offers, activeOfferId, latitude, longitude, zoom }: MapProps): JSX.Element {
  const mapElement = useRef<HTMLElement | null>(null);
  const map = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapElement.current) {
      return;
    }

    const leafletMap = new LeafletMap(mapElement.current, {
      center: [latitude, longitude],
      zoom,
    });

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(leafletMap);

    map.current = leafletMap;

    return () => {
      leafletMap.remove();
      map.current = null;
    };
  }, [latitude, longitude, zoom]);

  useEffect(() => {
    if (!map.current) {
      return;
    }

    const markers = layerGroup().addTo(map.current);

    offers.forEach((offer) => {
      marker([offer.location.latitude, offer.location.longitude], {
        icon: offer.id === activeOfferId ? activeIcon : defaultIcon,
        title: offer.title,
      }).addTo(markers);
    });

    return () => {
      markers.remove();
    };
  }, [offers, activeOfferId, latitude, longitude, zoom]);

  return <section className="cities__map map" ref={mapElement} />;
}
