import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
    return (
        <div id='Contact'>
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
                Group 2
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </div>
    );
}