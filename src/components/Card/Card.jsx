import css from './Card.module.scss';

export default function Card({ name, price, foto }) {
	return (
		<div className={css.card}>
			<div className={css.favorite}>
				<img src='img/heart-unliked.svg' alt='Unliked' />
			</div>
			<img width={133} height={112} src={foto} alt='Foto' />
			<p>{name}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button className={css.button} onClick={() => alert(name)}>
					<img width={11} height={11} src='img/plus.svg' alt='Plus' />
				</button>
			</div>
		</div>
	);
}
