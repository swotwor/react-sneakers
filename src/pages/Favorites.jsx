import React from 'react';
import Card from './../components/Card/index';

export default function Favorites({ items, onAddToFavorite }) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center mb-40 justify-between'>
				Мои закладки
			</div>
			<div className='d-flex flex-row flex-wrap'>
			{items
					.map((item) => (
						<Card
							name={item.name}
							price={item.price}
							id={item.id}
							foto={item.foto}
							favorited={true}
							onFavorite={onAddToFavorite}
						/>
					))}
			</div>
		</div>
	);
}
