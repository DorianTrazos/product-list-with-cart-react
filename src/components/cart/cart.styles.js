import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCart = styled.aside`
	width: 100%;
	padding: 24px;
	background-color: ${COLORS.white};
`;

const StyledCartTitle = styled.h2`
	color: ${COLORS.red};
	font-size: 24px;
	font-weight: 700;
`;

const StyledTotalOrderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledTotalOrder = styled.span`
	color: ${COLORS.darkRed};
	font-weight: 700;
	font-size: 24px;
`;
export {
	StyledCart,
	StyledCartTitle,
	StyledTotalOrder,
	StyledTotalOrderContainer
};
