import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Card, Typography, CardContent } from '@material-ui/core';

export default function Box(props) {
	return (
		<Paper>
			<Card>
				<CardContent>
					<center>
						<Typography color="textSecondary" variant="h4" component="h2">
							{props.title}
						</Typography>
						<Typography color="textSecondary" variant="h5">
							{props.count}
						</Typography>
					</center>
				</CardContent>
			</Card>
		</Paper>
	);
}
