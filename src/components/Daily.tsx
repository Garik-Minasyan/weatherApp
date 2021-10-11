import React from 'react';
import wheather from '../store/wheather';
import { fToC, filterDaily } from '../utils/utils';
import LinearIndeterminate from './Loading';
import { DailyWrap, DailyListWrap, DailyToHours } from './componentsStyles';

const Daily: React.FC = () => {
    if (!wheather.cityWeatherData) {
        return <LinearIndeterminate />
    }

    return (
        <DailyWrap>
            {
                filterDaily(wheather.cityWeatherData.daily).map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <DailyListWrap >
                                <DailyListWrap><h1>{item.date.toString().slice(0, -46)}</h1></DailyListWrap>
                                <DailyListWrap>
                                    {<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='png' />}
                                </DailyListWrap>
                                <DailyListWrap><h2>{item.weather[0].main}</h2></DailyListWrap>
                                {wheather.celsius
                                    ?
                                    <DailyListWrap><h2>  {(item.temp.day - 273.15).toFixed()} <span>°C</span></h2> </DailyListWrap>
                                    :
                                    <DailyListWrap> <h2> {fToC(item.temp.day - 273.15)}<span>°F</span></h2></DailyListWrap>}
                                <DailyListWrap> <h2><span>Wind Speed: {item.wind_speed}</span></h2></DailyListWrap>
                            </DailyListWrap>
                            <div>
                                {wheather.celsius ?
                                    <DailyToHours>
                                        <h2>day: {(item.feels_like.day - 273.15).toFixed()}°C</h2>
                                        <h2> eve: {(item.feels_like.eve - 273.15).toFixed()} °C</h2>
                                        <h2> morn: {(item.feels_like.morn - 273.15).toFixed()}°C</h2>
                                        <h2> night: {(item.feels_like.night - 273.15).toFixed()}°C</h2>
                                    </DailyToHours>
                                    :
                                    <DailyToHours>
                                        <h2> day: {fToC(item.feels_like.day - 273.15)}°F</h2>
                                        <h2> eve:  {fToC(item.feels_like.eve - 273.15)}°F</h2>
                                        <h2>morn:  {fToC(item.feels_like.morn - 273.15)}°F</h2>
                                        <h2> night  {fToC(item.feels_like.night - 273.15)}°F</h2>
                                    </DailyToHours>}
                            </div>
                        </div>
                    )
                })
            }
        </DailyWrap>
    )
};

export default Daily;
