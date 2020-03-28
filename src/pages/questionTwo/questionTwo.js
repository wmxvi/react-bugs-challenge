import React, { 
	useMemo, 
	useEffect, 
	Component
} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import { 
	getCardDetails 
} from './api'

import styles from './styles'

const QuestionTwo = (props) => {
	const [data, setData] = React.useState({
		id: 0,
		title: null,
		imgSrc: null,
		body: '',
		loading: true,
	});


	React.useEffect(() => {
		getCardDetails().then((data) => {
			data.loading = false;
			setData(data);
		});
	});

	const { classes } = props;
	const { title, imgSrc, body, loading } = data;

	if(loading){
		return (
			<div className={classes.spinner}>
				<CircularProgress/>
			</div>
		)
	}

	return(
		<div className={classes.container}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					image={imgSrc}
					title={title}
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<div
						className={classes.body}
						dangerouslySetInnerHTML={{__html:body}}
					/>
				</CardContent>
			</Card>
		</div>
	)
	
}

export default withStyles(styles)(QuestionTwo);
