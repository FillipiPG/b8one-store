import React from 'react';
import { Heart, Check } from 'react-feather';

export default function Product(props) {
	const productWishlistButtonClass = props.value.isFavorite === true ? 'app-product-wishlist app-product-wishlist-active' : 'app-product-wishlist';
	const productButtonClass = props.value.isAddedToCart === true ? 'app-product-button app-product-button-active' : 'app-product-button';
	const productButtonText = props.value.isAddedToCart === true ? 'Adicionado' : 'Adicionar';

	return (
		<div className="app-product">
			<div className="app-product-figure">
				<img className="app-product-image" src={props.value.image} alt="Teste" />
				<button className={productWishlistButtonClass} onClick={props.addToWishlist}>
					<Heart size={24} />
				</button>
			</div>

			<div className="app-product-content">
				<h3 className="app-product-name">{props.value.name}</h3>

				<div className="app-product-price">
					<span className="app-product-price-text app-product-list-price">{props.value.listPrice}</span>
					<span className="app-product-price-text app-product-sales-price">{props.value.salesPrice}</span>
					<span className="app-product-price-text app-product-price-installments">
						em até <b>{props.value.installments.number}x de {props.value.installments.price}</b> sem juros
					</span>
				</div>
			</div>

			<button className={productButtonClass} onClick={props.addToCart}>
				<Check size={16} />
				{productButtonText}
			</button>
		</div>
	);
};