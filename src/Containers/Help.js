import React, {useCallback, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import {makeStyles} from "@material-ui/styles";
import CloudUpload from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import request from "../Libs/request";

const useStyles = makeStyles(theme => ({
    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 100,
    },
    typo: {
        width: '60%',
    }
}));

export default function Help() {
    const classes = useStyles();
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        call();
    }, []);

    const call = async () =>
    {
        try {
            const response = await request.get(`retro/help`);
            setData(response.data ? response.data : '');
        } catch {
            console.log('error network');
        ;}
    }

    return (
        <div className={classes.container}>
            <Typography align="left" className={classes.typo}>
                {data}
            </Typography>
        </div>
    );
}