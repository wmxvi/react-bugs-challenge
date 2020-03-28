import React from 'react'
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import {CardMedia} from "@material-ui/core";
import Solution from "./images/solution.png";

const question = () =>{
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Two
			</Typography>
			<Typography variant="h5" gutterBottom>
				Api Call
			</Typography>
			<Typography variant="body1" gutterBottom>
				If you started this application with 'yarn start' a json server should now be running on port 3001
			</Typography>
			<Typography variant="body1" gutterBottom>
				The Api can be found here:
				<Link href="http://localhost:3001/example" target="_blank" >
					http://localhost:3001/example
				</Link>
			</Typography>
			<Typography variant="body1" gutterBottom>
				Your task if you choose to accept it, is to resolve this bug (displayed on the right and in the console) so that the card component displays the data from the API.
			</Typography>
			<Typography variant="body1" gutterBottom>
				As with all the questions in this tech test, you may or may not wish to refactor some of the code.
			</Typography>
			<Typography variant="h6" gutterBottom>
				Below is what the final solution should look like.
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