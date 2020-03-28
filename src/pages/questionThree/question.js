import React from 'react'
import Typography from "@material-ui/core/Typography";
import Solution from './images/solution.png'
import { CardMedia } from '@material-ui/core';
const question = ()=>{
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Three
			</Typography>
			<Typography variant="h5" gutterBottom>
				List on the fritz
			</Typography>
			<Typography variant="body1" gutterBottom>
				This task revolves around a bug in the render method of a basic component.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Your task if you choose to accept it, is to resolve this bug (displayed on the right and in the console) .
			</Typography>
			<Typography variant="body1" gutterBottom>
				As with all the questions in this tech test, you may or may not wish to refactor some of the code.
			</Typography>
			<Typography variant="h6" gutterBottom>
				Below is what the final solution should look like. (GUID'S will vary)
			</Typography>
			<CardMedia
				image={Solution}
				style={{
					width: '100%',
					height: 500,
					backgroundSize: 'contain',
				}}
				title="The Solution"
			/>
		</div>
	)
};

export default 	question