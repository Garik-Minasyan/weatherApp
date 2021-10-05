import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Container, Typography } from '@material-ui/core';

const Header: React.FC = () => {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <AccountCircle />
                </Toolbar>
                <Typography style={{ flexGrow: 1 }}>
                    <Link to='/'>
                        WeatherForecast
                    </Link>
                </Typography>
                <Typography>
                    <Link to='searchcity'>
                        SearchCity
                    </Link>
                </Typography>
            </AppBar>
        </Container >
    )
}

export default Header;




