import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.div`
    height: 200px;
    background-color: white;
    display: flex;
    justify-content: center;
`
const LinkWrap =styled.div`
    list-style: none;
    padding: 20px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.16);
    margin-left: 20px;
    &:hover {
        background-color: #F50057
    }
    a {
    text-decoration: none;
    padding: 10px 10px;
    font-size: 20px;
    color: #111522;
    }
`

const NavWrap = styled.div`
    margin-right: 15px;
    display: flex;
`
const HWrap = styled.h1`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const Header: React.FC =  () => {
    return (
            <HeaderWrap>
                <div>
                <HWrap>Weather App</HWrap>
                <NavWrap>
                    <LinkWrap>
                        <Link to='/'>
                            WeatherForecast
                        </Link>
                    </LinkWrap>
                    <LinkWrap>
                        <Link to='searchcity'>
                            SearchCity
                        </Link>
                    </LinkWrap>
                </NavWrap>
             
                </div>
            </HeaderWrap>          
    )
}

export default Header;




