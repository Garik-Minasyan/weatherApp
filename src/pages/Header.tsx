import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap, HWrap, NavWrap, LinkWrap } from './pagesStyles';

const Header: React.FC = () => {
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




