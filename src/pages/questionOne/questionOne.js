import React, { useMemo, useEffect, Component} from 'react';
import Button from '@material-ui/core/Button';

const QuestionOne = () => {
	const [counter, setCounter] = React.useState(0);
	const incrementCounter = () => {
		let newState = counter + 1;
		setCounter(newState);
	};

	return (
		<div style={{marginTop: 48}}>
			<Button variant="contained" onClick={() => incrementCounter()}  >
				I've been clicked: {counter} times
			</Button>
		</div>
	)

}

export default QuestionOne