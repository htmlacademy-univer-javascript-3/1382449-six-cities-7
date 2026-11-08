export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  image: string;
  city: string;
  location: { latitude: number; longitude: number };
  isPremium: boolean;
  isFavorite: boolean;
  bedrooms: number;
  maxAdults: number;
  description: string;
};

export const offers: Offer[] = [
  { id: '1', title: 'Beautiful apartment at great location', type: 'Apartment', price: 120, rating: 4.8, image: '/img/apartment-01.jpg', city: 'Amsterdam', location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }, isPremium: true, isFavorite: true, bedrooms: 3, maxAdults: 4, description: 'A bright apartment near the center of Amsterdam.' },
  { id: '2', title: 'Wood and stone place', type: 'Room', price: 80, rating: 4, image: '/img/room.jpg', city: 'Amsterdam', location: { latitude: 52.3609553943508, longitude: 4.85309666406198 }, isPremium: false, isFavorite: true, bedrooms: 1, maxAdults: 2, description: 'A cozy room for a quiet stay.' },
  { id: '3', title: 'Canal View Prinsengracht', type: 'Apartment', price: 132, rating: 4.5, image: '/img/apartment-02.jpg', city: 'Amsterdam', location: { latitude: 52.3909553943508, longitude: 4.929309666406198 }, isPremium: false, isFavorite: false, bedrooms: 2, maxAdults: 4, description: 'An apartment with a view of the canal.' },
  { id: '4', title: 'Nice, cozy apartment', type: 'Apartment', price: 180, rating: 5, image: '/img/apartment-03.jpg', city: 'Amsterdam', location: { latitude: 52.3809553943508, longitude: 4.939309666406198 }, isPremium: true, isFavorite: false, bedrooms: 2, maxAdults: 3, description: 'A comfortable apartment for your city break.' },
];
