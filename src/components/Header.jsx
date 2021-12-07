import React from 'react';

export default function Header() {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='hederLeft d-flex align-center'>
				<img width={40} height={40} src='img/logo.png' alt='Logo' className='mr-15' />
				<div className='headerInfo'>
					<h3 className='text-uppercase'>React Sneakers</h3>
					<p className='opacity-5'>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='d-flex'>
				<li className='mr-30 d-flex align-center'>
					<img width={18} height={18} src='img/cart.svg' alt='' />
					<span className='pl-10'>1205 руб.</span>
				</li>
				<li>
					<img src='img/user.svg' alt='' />
				</li>
			</ul>
		</header>
	);
}
