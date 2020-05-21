import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
    return (
        <div style={{position:'static',
            bottom:'10px',
            width: '100%',
            height: '10%'}}>
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