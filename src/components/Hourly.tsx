import React from 'react';
import wheather from '../store/wheather';
import LinearIndeterminate from './Loading';
import { msToTime, filterHours } from './utils';
import { HourlyWrap, HourlyListWrap } from './componentsStyles';
import { fToC } from './../components/utils';

const Hourly: React.FC = () => {

    if (!wheather.cityByDailyHourly) {
        return <LinearIndeterminate />
    }

    return (
        <HourlyWrap>
            {
                filterHours(wheather.cityByDailyHourly.data.hourly).map((item: any, index: any) => {
                    return (
                        <HourlyListWrap key={index}>

                            <HourlyListWrap>
                                {
                                    msToTime(item.dt)
                                }
                            </HourlyListWrap>
                            <HourlyListWrap>
                                {
                                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='png' />
                                }
                            </HourlyListWrap>
                            {
                                wheather.celsius ?
                                    <HourlyListWrap>
                                        <h2>
                                            {(wheather.city.main.temp - 273.15).toFixed()}
                                            <span>°C</span>
                                        </h2>
                                    </HourlyListWrap>

                                    :
                                    <HourlyListWrap>
                                        <h2>
                                            {fToC(item.clouds)}
                                            <span>°F</span>
                                        </h2>
                                    </HourlyListWrap>

                            }
                        </HourlyListWrap>

                    )
                })

            }
        </HourlyWrap>
    )
}

export default Hourly;
