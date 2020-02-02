import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {makeStyles} from "@material-ui/styles";
import CloudUpload from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import request from "../Libs/request";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 100,
    },
    dropZone: {
        width: '60%',
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        marginBottom: 50,
    },
    typo: {
        width: '60%',
    }
}));

export default function MyDropzone() {
    const classes = useStyles();
    const [data, setData] = React.useState('');

    const onDrop = useCallback(async (acceptedFiles) => {
        let formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        // Send files through formData
        try {
            const response = await request.post(`retro/info`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            setData(response.data);
        } catch {
            console.log('error network');
        }
    }, []);
    const {getRootProps, getInputProps} = useDropzone({onDrop})
    return (
        <div className={classes.container}>
            <div {...getRootProps()} className={classes.dropZone}>
                <input {...getInputProps()} />
                <div className={classes.upload}>
                    <CloudUpload style={{fontSize: '60px'}}/>
                    <Typography variant="subtitle1" align="center">
                        Charger un fichier ici
                    </Typography>
                </div>
            </div>
            <Typography align="left" className={classes.typo}>
                aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dfgdddddddddddddddddddddddddddd
                aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dfgdddddddddddddddddddddddddddd
                aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dfgdddddddddddddddddddddddddddd
            </Typography>
        </div>
    );
}