import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
const axios = require('axios').default;

function App() {
	const [items, setItems] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cardOpened, setCardOpened] = React.useState(false);
	const [cardItems, setCardItems] = React.useState([]);
	const [favoriteItems, setFavoriteCardItems] = React.useState([]);

	React.useEffect(() => {
		axios.get('https://61b79b0364e4a10017d18bc8.mockapi.io/shopItems').then((response) => setItems(response.data));
		axios.get('https://61b79b0364e4a10017d18bc8.mockapi.io/cart').then((response) => setCardItems(response.data));
		axios.get('https://61b79b0364e4a10017d18bc8.mockapi.io/favorites').then((response) => setFavoriteCardItems(response.data));
	}, []);

	const onAddToCard = (obj) => {
		axios.post('https://61b79b0364e4a10017d18bc8.mockapi.io/cart', obj);
		setCardItems((prev) => [...prev, obj]);
	};

	const onAddToFavorite = (obj) => {
		axios.post('https://61b79b0364e4a10017d18bc8.mockapi.io/favorites', obj);
		setFavoriteCardItems((prev) => [...prev, obj]);
	};

	const removeItemInCard = (id) => {
		setCardItems([cardItems.filter((item) => item.id !== id)]);
	};

	const onRemoveItems = (id) => {
		axios.delete(`https://61b79b0364e4a10017d18bc8.mockapi.io/cart/${id}`);
		setCardItems((prev) => prev.filter((item) => item.id !== id));
	};

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value);
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
			<Routes>
				<Route path='/' exact element={
						<Home
							searchValue={searchValue}
							onChangeSearchValue={onChangeSearchValue}
							items={items}
							onAddToFavorite={onAddToFavorite}
							onAddToCard={onAddToCard}
						/>
					}
				></Route>
				<Route path='/favorites' exact element={<Favorites items={favoriteItems}/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
