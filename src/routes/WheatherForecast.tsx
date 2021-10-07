import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import wheather from '../store/wheather';
import { convertToF } from '../components/utils';
import { alpha, styled } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import {
    WheatherForecastWrap,
    IconWrap,
    ToggleWrap,
    TempCityWrap,
    CoordWrap
}
    from './routesStyles';

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));

const WheatherForecast: React.FC = () => {
    const [toggle, setToggle] = useState(true);

    const changeToggle = () => {
        setToggle(prev => !prev)
    }

    useEffect(() => {
        if (!wheather.city) {
            wheather.getCityCoordinats("yerevan");
        }
    }, []);

    if (!wheather.city) return <>loading...</>

    return (
        <WheatherForecastWrap>
            <div>
                <IconWrap>
                    <h1>
                        {wheather.city.weather[0].main}
                    </h1>
                    <img src={`https://openweathermap.org/img/wn/${wheather.city.weather[0].icon}@2x.png`} alt='png' />
                </IconWrap>
                <TempCityWrap>
                    {
                        toggle ?
                            <h2>
                                {Math.ceil(Number(wheather.city?.clouds.all))}
                                <span>°C</span>
                            </h2>
                            :
                            <h2>
                                {convertToF(wheather.city?.clouds.all)}
                                <span>°F</span>
                            </h2>
                    }
                    <h2>
                        {wheather.city?.name} {wheather.city?.sys?.country}
                    </h2>
                    <ToggleWrap>
                        <h4>°F</h4>
                        <GreenSwitch onClick={changeToggle} defaultChecked />
                        <h4>°C</h4>
                    </ToggleWrap>
                </TempCityWrap>
                <CoordWrap>
                    <h3>
                        lat :{wheather.city?.coord.lat}
                    </h3>
                    <h3>
                        lon :{wheather.city?.coord.lon}
                    </h3>
                    <h3>{new Date().toLocaleString()}</h3>
                </CoordWrap>
            </div>
        </WheatherForecastWrap>
    )
}

const WheatherForecastObserver = observer(WheatherForecast)

export default WheatherForecastObserver;