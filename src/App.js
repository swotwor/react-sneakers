import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';
const axios = require('axios').default;

function App() {
	const [items, setItems] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cardOpened, setCardOpened] = React.useState(false);
	const [cardItems, setCardItems] = React.useState([]);

	React.useEffect(() => {
		axios.get('https://61b79b0364e4a10017d18bc8.mockapi.io/shopItems').then((response) => setItems(response.data));
		axios.get('https://61b79b0364e4a10017d18bc8.mockapi.io/cart').then((response) => setCardItems(response.data));
	}, []);

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value);
	};

	const onAddToCard = (obj) => {
		axios.post('https://61b79b0364e4a10017d18bc8.mockapi.io/cart', obj);
		setCardItems((prev) => [...prev, obj]);
	};

	const removeItemInCard = (id) => {
		setCardItems([cardItems.filter((item) => item.id !== id)]);
	};

	const onRemoveItems = (id) => {
		// axios.delete(`https://61b79b0364e4a10017d18bc8.mockapi.io/cart/${id}`);
		setCardItems((prev) => prev.filter(item => item.id !== id));
	};

	return (
		<div className='wrapper clear'>
			{cardOpened ? (
				<Overlay
					items={cardItems}
					onClickCloseBtn={() => setCardOpened(!cardOpened)}
					removeItemInCard={() => removeItemInCard()}
					onRemove={onRemoveItems}
				/>
			) : null}
			<Header onClickCard={() => setCardOpened(!cardOpened)} />
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
								onFavorite={() => console.log('ADD TO FAVORITE')}
								onPlus={(obj) => onAddToCard(obj)}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
