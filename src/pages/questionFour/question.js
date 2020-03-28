import React from 'react'
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";
import kobayashiMaru from "./images/kobayashiMaru.jpg";

const question = ()=>{
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Four
			</Typography>
			<Typography variant="h5" gutterBottom>
				Invariant Violation Kobayashi Maru
			</Typography>
			<Typography variant="body1" gutterBottom>
				This page should display a list of a small number of ships from the star trek universe
			</Typography>
			<Typography variant="body1" gutterBottom>
				Your task is to resolve the bug within the list of ships
			</Typography>
			<CardMedia
				image={kobayashiMaru}
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