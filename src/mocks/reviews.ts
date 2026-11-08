export type Review = {
  id: string;
  offerId: string;
  user: { name: string; avatar: string };
  rating: number;
  comment: string;
  date: string;
};

export const reviews: Review[] = [
  { id: '1', offerId: '1', user: { name: 'Max', avatar: '/img/avatar-max.jpg' }, rating: 4, comment: 'A quiet and cozy apartment in a great location. We enjoyed our stay.', date: '2019-04-24' },
  { id: '2', offerId: '1', user: { name: 'Angelina', avatar: '/img/avatar-angelina.jpg' }, rating: 5, comment: 'A lovely place with everything we needed for our trip.', date: '2020-06-15' },
  { id: '3', offerId: '2', user: { name: 'Max', avatar: '/img/avatar-max.jpg' }, rating: 4, comment: 'A comfortable room in a quiet neighborhood.', date: '2021-09-12' },
  { id: '4', offerId: '3', user: { name: 'Angelina', avatar: '/img/avatar-angelina.jpg' }, rating: 5, comment: 'The canal view was wonderful and the apartment was clean.', date: '2022-05-10' },
  { id: '5', offerId: '4', user: { name: 'Max', avatar: '/img/avatar-max.jpg' }, rating: 5, comment: 'A great apartment for a short stay in Amsterdam.', date: '2023-07-20' },
];
