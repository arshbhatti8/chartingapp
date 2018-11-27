import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PieChart from './piechart';

const styles = theme => ({
    root: {
        flexGrow:1,
        marginTop:75
    },
    paper: {
        margin:'auto',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:1000,
        height:500
    },
});

class homepage extends Component {


render(){
    const { classes } = this.props;
        return(
            <Grid
                container
                className={classes.root}
                spacing={24}>
                <Grid item sm={12}>
                    <Paper className={classes.paper}>
                        <PieChart/>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

homepage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(homepage);
