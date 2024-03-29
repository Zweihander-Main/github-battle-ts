import * as React from 'react';
import * as PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

const styles: Record<string, React.CSSProperties> = {
	container: {
		position: 'relative',
		display: 'flex',
	},
	tooltip: {
		boxSizing: 'border-box',
		position: 'absolute',
		width: '160px',
		bottom: '100%',
		left: '50%',
		marginLeft: '-80px',
		borderRadius: '3px',
		backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
		padding: '7px',
		marginBottom: '5px',
		color: '#fff',
		textAlign: 'center',
		fontSize: '14px',
	},
};

interface TooltipProps {
	text: string;
	children?: React.ReactNode;
}

/**
 * Renders a tooltip with information over component
 *
 * @class      Tooltip (name)
 */
const Tooltip: React.FC<TooltipProps> = ({ text, children }: TooltipProps) => {
	const [hovering, attrs] = useHover();

	return (
		<div style={styles.container} {...attrs}>
			{hovering === true && <div style={styles.tooltip}>{text}</div>}
			{children}
		</div>
	);
};

Tooltip.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Tooltip;
