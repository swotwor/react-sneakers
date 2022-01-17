import React from 'react';
import Card from '../components/Card';

export default function Home({ searchValue, onChangeSearchValue, items, onAddToFavorite, onAddToCard }) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center mb-40 justify-between'>
				<h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
				<div className='search-block d-flex'>
					<img src='img/search.svg' alt='Search' />
					<input onChange={onChangeSearchValue} value={searchValue} type='text' placeholder='Поиск...' />
				</div>
			</div>
			<div className='d-flex flex-row flex-wrap'>
				{items
					.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
					.map((item) => (
						<Card
							name={item.name}
							price={item.price}
							key={item.id}
							foto={item.foto}
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPlus={(obj) => onAddToCard(obj)}
						/>
					))}
			</div>
		</div>
	);
}
