import React, { 
	useMemo, 
	useEffect, 
	Component
} from 'react';

import {
	Typography,
	Paper,
	List,
	ListItem,
	ListItemText,
	Divider,
	CircularProgress
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

/** Invariant Violation Bug */

import { 
	getSpaceships 
} from './api'

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
		fontSize: 15
	},
	label: {
		display: 'inline',
	},
	container:{
		borderWidth: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	inline: {
		display: 'inline',
	},
}));

const QuestionFour = (props) => {
	const classes = useStyles();
	const [data, setData] = React.useState([]);

	const [loading, setLoading] = React.useState(false);
	
	const drawShips = () => {
		let items = [];

		data.map((item, i) => {
			console.log('item', item);
			items.push(
				<ListItem alignItems="flex-start" >
					<ListItemText
						primary={
							<React.Fragment>
								<div>
									<Typography
										variant="subtitle2"
										className={classes.header}
									>
										UID:
									</Typography>
									<Typography
										variant="body2"
										className={classes.label}
									>
										{item.uid}
									</Typography>
								</div>
								<div>
									<Typography
										variant="subtitle2"
										className={classes.header}
									>
										Name:
									</Typography>
									<Typography
										variant="body2"
										className={classes.label}
									>
										{item.name}
									</Typography>
								</div>
								<div>
									<Typography
										variant="subtitle2"
										className={classes.header}
									>
										Registry:
									</Typography>
									<Typography
										variant="body2"
										className={classes.label}
									>
										{item.registry ? item.registry : 'N/A'}
									</Typography>
								</div>
								<div>
									<Typography
										variant="subtitle2"
										className={classes.header}
									>
										Class:
									</Typography>
									<Typography
										variant="body2"
										className={classes.label}
									>
										{item.spacecraftClass ? item.spacecraftClass : 'N/A'}
									</Typography>
								</div>
							</React.Fragment>
					} />
						<Divider variant="middle" />
					
				</ListItem>
			);
		});

		return items;
	};

	React.useEffect(() => {
		getSpaceships().then((data) => {
			setData(data);
			setLoading(false);
		});
	}, []);

	if(loading) {
		return (
			<CircularProgress/>
		)
	}

	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Star Trek Ships
			</Typography>
			<div className={classes.container}>
				<Paper>
					<List className={classes.root}>
						{drawShips()}
					</List>
				</Paper>
			</div>
		</div>
	);
}

export default QuestionFour