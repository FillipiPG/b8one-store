import React from 'react';
import Product from '../Product/Product';
import productList from './products.json';

export class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: productList
		};
	}

	addProductToCart(identifier) {
		const newProductList = this.state.productList.slice();
		const isAddedToCart = newProductList[identifier].isAddedToCart

		newProductList[identifier].isAddedToCart = !isAddedToCart

		this.setState({
			productList: newProductList
		})
	}

	addProductToWishlist(identifier) {
		const newProductList = this.state.productList.slice();
		const isFavorite = newProductList[identifier].isFavorite;

		newProductList[identifier].isFavorite = !isFavorite

		this.setState({
			productList: newProductList
		})
	}

	createProduct(product) {
		return (
			<Product 
				key={product.id}
				value={product}
				addToCart={() => this.addProductToCart(product.id)}
				addToWishlist={() => this.addProductToWishlist(product.id)}
			/>
		);
	}

	render() {
		return (
			<div className="app-container">
				<h1 className="app-product-list-title">Produtos</h1>

				<div className="app-row">
					<section className="app-product-list">
						{this.state.productList.map(product => this.createProduct(product))}
					</section>
				</div>
			</div>
		);
	}
}