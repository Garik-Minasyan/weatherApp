import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import wheather from '../store/wheather';
import { fToC } from '../utils/utils';
import Button from '@material-ui/core/Button';
import LinearIndeterminate from './../components/Loading';
import Hourly from '../components/Hourly';
import Daily from './../components/Daily';
import { GreenSwitch } from '../components/ToggleCelcius';
import {
    WheatherForecastWrap,
    IconWrap,
    ToggleWrap,
    TempCityWrap,
    CoordWrap,
    SeeHourlyWrapp
} from './routesStyles';

const WheatherForecast: React.FC = () => {
    const [seeHourly, setSeeHourly] = useState(false)

    const changeSeeHourly = () => {
        setSeeHourly(prevState => !prevState)
    }

    const changeToggleCelsius = () => {
        wheather.chnageCelsius()
    }

    useEffect(() => {
        if (!wheather.city) {
            wheather.getCityCoordinats("yerevan");
        }
    }, []);

    if (!wheather.city) return <LinearIndeterminate />

    return (
        <>
            <WheatherForecastWrap>
                <IconWrap>
                    <h1>
                        {wheather.city.weather[0].main}
                    </h1>
                    <img src={`https://openweathermap.org/img/wn/${wheather.city.weather[0].icon}@4x.png`} alt='png' />
                </IconWrap>
                <TempCityWrap>
                    {
                        wheather.celsius === true ?
                            <h2>
                                {(wheather.city.main.temp - 273.15).toFixed()}
                                <span>°C</span>
                            </h2>
                            :
                            <h2>
                                {fToC(wheather.city?.clouds.all)}
                                <span>°F</span>
                            </h2>
                    }
                    <h2>
                        {wheather.city?.name} {wheather.city?.sys?.country}
                    </h2>
                    <ToggleWrap>
                        <h4>°C</h4>
                        <GreenSwitch onClick={changeToggleCelsius} defaultChecked />
                        <h4>°F</h4>
                    </ToggleWrap>
                </TempCityWrap>
                <SeeHourlyWrapp>
                    <CoordWrap>
                        <h3>
                            lat :{wheather.city?.coord.lat}
                        </h3>
                        <h3>
                            lon :{wheather.city?.coord.lon}
                        </h3>
                        <h3>{new Date().toLocaleString()}</h3>
                    </CoordWrap>
                    <div>
                        <Button onClick={changeSeeHourly} variant="contained" color="secondary">See by Hours</Button>
                    </div>
                </SeeHourlyWrapp>
            </WheatherForecastWrap>
            {
                seeHourly && (
                    <div>
                        <Hourly />
                        <Daily />
                    </div>
                )
            }
        </>
    )
}

const WheatherForecastObserver = observer(WheatherForecast)

export default WheatherForecastObserver;