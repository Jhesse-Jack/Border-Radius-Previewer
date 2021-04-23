import React from 'react';
import './navbar.scss';

const NavBar = () => {
	return (
		<header id="header" style={Styles.header} className="header">
			<nav className="left">
				<div className="logo">
					<span>Border Radius Previewer</span>
				</div>
			</nav>
		</header>
	);
};

const Styles = {
    header: {
        margin: '0%',
        padding: '0%',
        border: '0',
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline',
        display: 'block',
    }
};

export default NavBar;
