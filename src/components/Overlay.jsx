import React from 'react'

export default function Overlay() {
	return (
		<div className='overlay' style={{ display: 'none' }}>
				<div className='drawer'>
					<h2 className='d-flex justify-between'>
						Корзина
						<img className='removeBtn cu-p' src='img/btn-remove.svg' alt='Remove' />
					</h2>
					<div className='items'>
						<div className='cartItem d-flex align-center mb-20'>
							<img width={70} height={70} src='img/sneakers/1.jpg' alt='Sneakers' />
							<div className='description'>
								<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img className='removeBtn' src='img/btn-remove.svg' alt='Remove' />
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<img width={70} height={70} src='img/sneakers/1.jpg' alt='Sneakers' />
							<div className='description'>
								<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img className='removeBtn' src='img/btn-remove.svg' alt='Remove' />
						</div>
					</div>
					<div className='cartTotalBlock'>
						<ul>
							<li className='d-flex justify-between mb-20 mt-20'>
								<span>Итого: </span>
								<div></div>
								<b>21 498 руб. </b>
							</li>
							<li className='d-flex justify-between'>
								<span>Налог 5%: </span>
								<div></div>
								<b>1074 руб. </b>
							</li>
						</ul>
						<button className='greenButton'>
							Оформить заказ <img src='img/arrow.svg' alt='Arrow' />
						</button>
					</div>
				</div>
			</div>
	)
}
