import { NavLink } from 'react-router-dom';
import './not-found-page.css';

export default function NotFoundPage() {
  return (
    <div className='not-found-page'>
      <h1 className='not-found-page__title'>404</h1>
      <p className='not-found-page__text'>Ошибка. Страница не найдена</p>
      <NavLink to='/' className='not-found-page__link'>
        Вернуться к главной странице
      </NavLink>
    </div>
  );
}
