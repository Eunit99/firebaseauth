import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigBar = ({ url, page }) => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<p className="font-32 font-500">Firebase Auth</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Link to={url} className='font-18 fw-bold text-primary'>{page}</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavigBar