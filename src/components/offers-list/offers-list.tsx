import { Offer } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  variant?: 'cities' | 'favorites' | 'near-places';
  onActiveOfferChange?: (id: string | null) => void;
};

export default function OffersList({ offers, variant = 'cities', onActiveOfferChange }: OffersListProps): JSX.Element {
  return (
    <div className={variant === 'favorites' ? 'favorites__places' : `${variant}__${variant === 'cities' ? 'places-list' : 'list'} places__list${variant === 'cities' ? ' tabs__content' : ''}`}>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} variant={variant} onMouseEnter={() => onActiveOfferChange?.(offer.id)} onMouseLeave={() => onActiveOfferChange?.(null)} />)}
    </div>
  );
}
