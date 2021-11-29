function App() {
	return (
		<div className='wrapper clear'>
			<div className="overlay">
				<div className="drawer">
					<h2>Корзина</h2>
					<div className="cartItem d-flex align-center">
						<img width={70} height={70} src="img/sneakers/1.jpg" alt="Sneakers" />
						<div className='description'>
							<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className='removeBtn' src="img/btn-remove.svg" alt="Remove" />
					</div>
				</div>
			</div>
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
			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src="img/search.svg" alt="Search" />
						<input type="text" placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-row flex-wrap'>
					<div className='card m-15'>
						<div className='favorite'>
							<img src="img/heart-unliked.svg" alt="Unliked" />
						</div>
						<img width={133} height={112} src='img/sneakers/1.jpg' alt='' />
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
