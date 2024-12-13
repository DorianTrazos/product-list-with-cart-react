import { PRODUCTS } from '../../constants/products';
import Product from '../product/Product';
import { StyledProducts } from './products.styles';

const Products = ({ filterActive, cart, setCart, deleteProductFromCart }) => {
	const sortedProducts = sortProducts(PRODUCTS, filterActive);
	return (
		<StyledProducts>
			{sortedProducts.map(product => {
				const isInCart = cart.some(cartItem => cartItem.id === product.id);
				return (
					<Product
						key={product.id}
						product={product}
						isInCart={isInCart}
						cart={cart}
						setCart={setCart}
						deleteProductFromCart={deleteProductFromCart}
					/>
				);
			})}
		</StyledProducts>
	);
};

const sortProducts = (products, filterActive) => {
	const newProducts = [...products];

	switch (filterActive) {
		case 1:
			return newProducts.sort((a, b) => a.title.localeCompare(b.title));
		case 2:
			return newProducts.sort((a, b) => a.price - b.price);
		default:
			return newProducts;
	}
};

export default Products;
