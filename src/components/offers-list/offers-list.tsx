import { useState } from 'react';
import { Offer } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  variant?: 'cities' | 'favorites' | 'near-places';
};

export default function OffersList({ offers, variant = 'cities' }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className={variant === 'favorites' ? 'favorites__places' : `${variant}__${variant === 'cities' ? 'places-list' : 'list'} places__list${variant === 'cities' ? ' tabs__content' : ''}`} data-active-offer-id={activeOfferId ?? undefined}>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} variant={variant} onMouseEnter={() => setActiveOfferId(offer.id)} onMouseLeave={() => setActiveOfferId(null)} />)}
    </div>
  );
}
