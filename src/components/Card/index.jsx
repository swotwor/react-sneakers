import React from 'react';
import css from './Card.module.scss';

export default function Card({ name, price, foto, key, onFavorite, onPlus, favorited }) {
	const [state, setState] = React.useState(false);
	const [stateFavorite, setStateFavorite] = React.useState(favorited);

	const changeAdd = () => {
		onPlus({name, price, foto});
		setState(!state);
	};

	const changeFavorite = () => {
		onFavorite({name, price, foto, key});
		setStateFavorite(!stateFavorite);
	};

	return (
		<div className={css.card}>
			<div className={css.favorite}>
				<img onClick={changeFavorite} src={stateFavorite ? 'img/heart-liked.svg' : 'img/heart-unliked.svg'} alt='Unliked' />
			</div>
			<img width={133} height={112} src={foto} alt='Foto' />
			<p>{name}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					className={css.addButton}
					onClick={changeAdd}
					src={state ? 'img/plus.svg' : 'img/unplus.svg '} alt='Plus' />
			</div>
		</div>
	);
}
