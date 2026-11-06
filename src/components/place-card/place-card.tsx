import { Link } from 'react-router-dom';
import { Offer } from '../../mocks/offers';

type PlaceCardProps = {
  offer: Offer;
  variant?: 'cities' | 'favorites' | 'near-places';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function PlaceCard({ offer, variant = 'cities', onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  return (
    <article className={`${variant}__card place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.image} width={variant === 'favorites' ? 150 : 260} height={variant === 'favorites' ? 110 : 200} alt={offer.title} />
        </Link>
      </div>
      <div className={`${variant === 'favorites' ? 'favorites__card-info ' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price"><b className="place-card__price-value">&euro;{offer.price}</b><span className="place-card__price-text">&#47;&nbsp;night</span></div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active ' : ''}button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark" /></svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating"><div className="place-card__stars rating__stars"><span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span><span className="visually-hidden">Rating</span></div></div>
        <h2 className="place-card__name"><Link to={`/offer/${offer.id}`}>{offer.title}</Link></h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
