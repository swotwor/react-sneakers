import React from 'react';

export default function Overlay({ onClickCloseBtn, items, onRemove }) {
	return (
		<div className='overlay'>
			<div className='drawer'>
				<h2 className='d-flex justify-between'>
					Корзина
					<img className='removeBtn cu-p' src='img/btn-remove.svg' alt='Remove' onClick={() => onClickCloseBtn()} />
				</h2>
				{items.length > 0 ? (
					<div className='items'>
						{items.map((item, index) => (
							<div className='cartItem d-flex align-center mb-20' key={index}>
								<img width={70} height={70} src={item.foto} alt='Sneakers' />
								<div className='description'>
									<p className='mb-5'>{item.name}</p>
									<b>{item.price} руб.</b>
								</div>
								<img className='removeBtn++ cu-p' src='img/btn-remove.svg' alt='Remove' onClick={() => onRemove(item.id)} />
							</div>
						))}
					</div>
				) : (
					<div>
						<img className='empty_cart' src='img/empty_cart.jpg' alt='empty_cart' height={200} />
						<p className='empty_cart_title'>В данный момент корзина пустая, добавьте товар, чтоб сделать заказ.</p>
						<button className='greenButton' onClick={() => onClickCloseBtn()}>
							Вернуться к выбору товара
						</button>
					</div>
				)}
				{items.length > 0 ? (
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
				) : null}
			</div>
		</div>
	);
}
