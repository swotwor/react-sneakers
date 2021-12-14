import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';
const axios = require('axios').default;

// const arr = [];

function App() {
	const [items, setItems] = React.useState([]);
	const [cardOpened, setCardOpened] = React.useState(false);

	React.useEffect(() => {
		axios.get('https://61b79b0364e4a10017d18bc8.mockapi.io/shopItems').then(function (response) {
			setItems(response.data);
		});
	}, []);

	return (
		<div className='wrapper clear'>
			{cardOpened ? <Overlay onClickCloseBtn={() => setCardOpened(!cardOpened)} /> : null}
			<Header onClickCard={() => setCardOpened(!cardOpened)} />
			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='img/search.svg' alt='Search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-row flex-wrap'>
					{items.map((item, index) => (
						<Card
							name={item.name}
							price={item.price}
							key={index}
							foto={item.foto}
							onFavorite={() => console.log('ADD TO FAVORITE')}
							onPlus={() => console.log('ADD TO CARD')}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
