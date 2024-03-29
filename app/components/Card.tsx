import * as React from 'react';
import * as PropTypes from 'prop-types';
import ThemeContext from '../contexts/theme';

interface CardProps {
	header: string;
	subheader?: string;
	avatar: string;
	href: string;
	name: string;
	children: React.ReactNode;
}

/**
 * Renders card for repo or user
 *
 * @class      Card
 * @return     {React.ReactNode}
 */
const Card: React.FC<CardProps> = ({
	header,
	subheader,
	avatar,
	href,
	name,
	children,
}: CardProps) => {
	const theme = React.useContext(ThemeContext);

	return (
		<div className={`card bg-${theme}`}>
			<h4 className="header-lg center-text">{header}</h4>
			<img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
			{subheader && <h4 className="center-text">{subheader}</h4>}
			<h2 className="center-text">
				<a className="link" href={href}>
					{name}
				</a>
			</h2>
			{children}
		</div>
	);
};

Card.propTypes = {
	header: PropTypes.string.isRequired,
	subheader: PropTypes.string,
	avatar: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Card;
