import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ onClickCard }) {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='hederLeft d-flex align-center'>
					<img width={40} height={40} src='img/logo.png' alt='Logo' className='mr-15' />
					<div className='headerInfo'>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className='opacity-5'>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex'>
				<li className='mr-30 d-flex align-center cu-p' onClick={() => onClickCard()}>
					<img width={18} height={18} src='img/cart.svg' alt='' />
					<span className='pl-10'>1205 руб.</span>
				</li>
				<li>
					<Link to='/favorites'>
						<img className='icon_favorite' src='img/favorite.png' alt='favorite' />
					</Link>
				</li>
				<li>
					<img className='icon_user' src='img/user.svg' alt='user' />
				</li>
			</ul>
		</header>
	);
}
