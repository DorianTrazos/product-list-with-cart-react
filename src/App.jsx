import { useState } from 'react';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Products from './components/products/Products';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [filterActive, setFilterActive] = useState(0);
	const [cart, setCart] = useState([]);
	return (
		<>
			<GlobalStyles />
			<Header filterActive={filterActive} setFilterActive={setFilterActive} />
			<Products
				filterActive={filterActive}
				cart={cart}
				setCart={setCart}
				deleteProductFromCart={deleteProductFromCart}
			/>
			<Cart
				cart={cart}
				setCart={setCart}
				deleteProductFromCart={deleteProductFromCart}
			/>
		</>
	);
};

const deleteProductFromCart = (productId, cart, setCart) => {
	const updatedCart = cart.filter(cartItem => cartItem.id !== productId);
	setCart(updatedCart);
};

export default App;
