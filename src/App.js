import React from 'react';
import Home from './Containers/Home';
import './App.css';
import Typography from '@material-ui/core/Typography';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Typography>
                    Retro Project
                </Typography>
            </header>
            <Home/>
        </div>
    );
}

export default App;
