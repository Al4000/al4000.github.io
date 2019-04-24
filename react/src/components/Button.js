import styled from 'styled-components'

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--mainYellow);
	border-color: ${ props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)") };
	color: ${ props => (props.header ? "var(--mainWhite)" : props.cart ? "var(--mainYellow)" : "var(--lightBlue)") };
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.3s ease-in-out;
	&:hover {
		background: ${ props => (props.header ? "var(--mainWhite)" : props.cart ? "var(--mainYellow)" : "var(--lightBlue)") };
		color: ${ props => (props.header ? "var(--mainYellow)" : "var(--mainWhite)") };
		text-decoration: none;
	}
	&:focus {
		outline: none;
	}
`
