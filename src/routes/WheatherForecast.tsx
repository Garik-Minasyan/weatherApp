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
    // const [wheatherCity, setWeatherCity] = useState<any[]>([]);
    const [toggle, setToggle] = useState(true);

    const changeToggle = () => {
        setToggle(prev => !prev)
    }
    console.log(toggle)

    useEffect(() => {
        wheather.enterToCityLink("yerevan");
    }, []);

    return (
        <WheatherForecastWrap>
            {wheather.city && wheather.city.map(item => {
                return (
                    <div key={item.name}>
                        <IconWrap>
                            <h1>
                                {item.weather[0].main}
                            </h1>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='png' />
                        </IconWrap>
                        <TempCityWrap>
                            {
                                toggle ?
                                    <h2>
                                        {Math.ceil(Number(item?.clouds.all))}
                                        <span>°C</span>
                                    </h2>
                                    :
                                    <h2>
                                        {convertToF(item?.clouds.all)}
                                        <span>°F</span>
                                    </h2>
                            }
                            <h2>
                                {item?.name} {item?.sys?.country}
                            </h2>
                            <ToggleWrap>
                                <h4>°F</h4>
                                <GreenSwitch onClick={changeToggle} defaultChecked />
                                <h4>°C</h4>
                            </ToggleWrap>
                        </TempCityWrap>
                        <CoordWrap>
                            <h3>
                                lat :{item?.coord.lat}
                            </h3>
                            <h3>
                                lon :{item?.coord.lon}
                            </h3>
                            <h3>{new Date().toString().replace("GMT+0400 (Armenia Standard Time)", '')}</h3>
                        </CoordWrap>
                    </div>
                )
            })}
        </WheatherForecastWrap>
    )
}

const WheatherForecastObserver = observer(WheatherForecast)

export default WheatherForecastObserver;