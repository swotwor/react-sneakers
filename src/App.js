import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

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
					<Card />
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/2.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/3.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/4.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/5.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/6.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/7.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/8.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/9.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card m-15'>
						<img width={133} height={112} src='img/sneakers/10.jpg' alt='' />
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='Plus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
