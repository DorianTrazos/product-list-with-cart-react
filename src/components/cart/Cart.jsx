import CartProduct from '../cart-product/CartProduct';
import {
	StyledCart,
	StyledCartTitle,
	StyledTotalOrder,
	StyledTotalOrderContainer
} from './cart.styles';

const Cart = ({ cart, setCart, deleteProductFromCart }) => {
	const totalProductsInCart = cart.reduce(
		(acc, product) => product.quantity + acc,
		0
	);

	const totalOrder = cart.reduce(
		(acc, product) => product.price * product.quantity + acc,
		0
	);

	return (
		<StyledCart>
			<StyledCartTitle>
				Your Cart (<span>{totalProductsInCart}</span>)
			</StyledCartTitle>
			{cart.length === 0 && (
				<div>
					<img
						src='./assets/images/illustration-empty-cart.svg'
						alt='empty cart image'
					/>
					<p>Your added items will appear here</p>
				</div>
			)}
			{cart.length > 0 && (
				<>
					<div>
						{cart.map(cartItem => (
							<CartProduct
								key={cartItem.id}
								cartItem={cartItem}
								cart={cart}
								setCart={setCart}
								deleteProductFromCart={deleteProductFromCart}
							/>
						))}
					</div>

					<StyledTotalOrderContainer>
						<span>Total Order</span>
						<StyledTotalOrder>${totalOrder.toFixed(2)}</StyledTotalOrder>
					</StyledTotalOrderContainer>
				</>
			)}
		</StyledCart>
	);
};

export default Cart;
