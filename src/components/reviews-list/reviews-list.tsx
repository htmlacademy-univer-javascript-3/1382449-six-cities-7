import { Review as ReviewData } from '../../mocks/reviews';
import Review from '../review/review';

export default function ReviewsList({ reviews }: { reviews: ReviewData[] }): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} review={review} />)}
      </ul>
    </>
  );
}
