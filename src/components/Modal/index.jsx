import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal as NewModal } from '@material-ui/core/';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const classes = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: 'white',
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export default function Modal(props) {
	return (
		<div>
			<NewModal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={props.open}
				onClose={props.onClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				style={{ marginLeft: '30%', marginRight: '30%', marginTop: '5%' }}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={props.open}>
					<div style={{ backgroundColor: 'white', padding: 10 }}>
						<h2 id="transition-modal-title">{props.title}</h2>
						{props.children}
						{/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
					</div>
				</Fade>
			</NewModal>
		</div>
	);
}
