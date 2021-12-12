import Card from './components/Card/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

const arr = [
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		foto: 'img/sneakers/1.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: 12999,
		foto: 'img/sneakers/2.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid',
		price: 8499,
		foto: 'img/sneakers/3.jpg',
	},
	{
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8999,
		foto: 'img/sneakers/4.jpg',
	},
	{
		name: 'Мужские Кроссовки Under Armour Curry 8',
		price: 15199,
		foto: 'img/sneakers/5.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Kyrie 7',
		price: 11299,
		foto: 'img/sneakers/6.jpg',
	},
	{
		name: 'Мужские Кроссовки Jordan Air Jordan 11',
		price: 10799,
		foto: 'img/sneakers/7.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike LeBron XVIII',
		price: 16499,
		foto: 'img/sneakers/8.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Lebron XVIII Low',
		price: 13999,
		foto: 'img/sneakers/9.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		foto: 'img/sneakers/10.jpg',
	},
];

function App() {
	return (
		<div className='wrapper clear'>
			<Overlay />
			<Header />
			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='img/search.svg' alt='Search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-row flex-wrap'>
					{arr.map((item, index) => (
						<Card name={item.name} price={item.price} key={index} foto={item.foto} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
