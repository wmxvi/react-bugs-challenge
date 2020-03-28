import React from 'react'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo
		})
	}


	render() {
		if (this.state.errorInfo) {
			// Error path
			return (
				<div style={{display: 'flex', flexDirection:'row', flex: 1}}>
					<div style={{flex: 1, margin: 24, textAlign: 'left'}}>
						{this.props.question()}
					</div>
					<div style={{display: 'flex', flexDirection:'column', alignItems:'center', flex: 1}}>
						<h2>Something went wrong.</h2>
						<div style={{ whiteSpace: 'pre-wrap', maxWidth: 400, textAlign:'left', alignSelf:'center'}}>
							{this.state.error && this.state.error.toString()}
							<br />
							{this.state.errorInfo.componentStack}
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

const defaultQuestion = () =>{
	return (
		<div>
			Please add a question to the test
		</div>
	)
}
ErrorBoundary.defaultProps = {
	question: defaultQuestion
}
export default ErrorBoundary