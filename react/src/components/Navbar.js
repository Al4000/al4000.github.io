import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to='/react'>
					<img src={ logo } alt="" className="navbar-brand"/>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/react" className="nav-link">
							Products
						</Link>
					</li>
				</ul>
				<Link to="/react/cart" className="ml-auto">
					<ButtonContainer cart header>
						<span className="mr-2">
							<i className="fas fa-cart-plus mb-1" />
						</span>
						My Cart
					</ButtonContainer>
				</Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
	background: var(--lightBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize !important;
	}
`
