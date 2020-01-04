import * as React from 'react';
import * as PropTypes from 'prop-types';

const styles = {
	content: {
		fontSize: '35px',
		position: 'absolute' as 'absolute',
		left: '0',
		right: '0',
		marginTop: '20px',
		textAlign: 'center' as 'center',
	},
};

interface LoadingProps extends React.Props<Loading> {
	text?: string;
	speed?: number;
}

interface LoadingState {
	content: string;
}

/**
 * Displays loading text for use when fetching data from an API
 *
 * @class      Loading
 */
export default class Loading extends React.Component<
	LoadingProps,
	LoadingState
> {
	interval: number;

	static propTypes = {
		text: PropTypes.string.isRequired,
		speed: PropTypes.number.isRequired,
	};

	static defaultProps = {
		text: 'Loading',
		speed: 300,
	};

	state = {
		content: this.props.text,
	};

	componentDidMount(): void {
		const { speed, text } = this.props;

		this.interval = window.setInterval((): void => {
			this.state.content === text + '...'
				? this.setState({ content: text })
				: this.setState(
						({ content }: LoadingState): LoadingState => ({
							content: content + '.',
						})
				  );
		}, speed);
	}

	componentWillUnmount(): void {
		window.clearInterval(this.interval);
	}

	render(): JSX.Element {
		return <p style={styles.content}>{this.state.content}</p>;
	}
}
