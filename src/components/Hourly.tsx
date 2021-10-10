import React from 'react';
import wheather from '../store/wheather';
import LinearIndeterminate from './Loading';
import { filterDate } from '../utils/utils';
import { HourlyWrap, HourlyListWrap } from './componentsStyles';
import { fToC } from '../utils/utils';

const Hourly: React.FC = () => {

    if (!wheather.cityWeatherData) {
        return <LinearIndeterminate />
    }
    return (
        <HourlyWrap>
            {
                filterDate(wheather.cityWeatherData.hourly).map((item: any, index: any) => {
                    return (
                        <HourlyListWrap key={index}>
                            <HourlyListWrap>{item.date.toString().slice(15, -41)}</HourlyListWrap>
                            <HourlyListWrap>
                                {
                                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='png' />
                                }
                            </HourlyListWrap>
                            {
                                wheather.celsius ?
                                    <HourlyListWrap>
                                        <h2>
                                            {(item.temp - 273.15).toFixed()}
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
