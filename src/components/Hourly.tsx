import React from 'react';
import wheather from '../store/wheather';
import LinearIndeterminate from './Loading';
import { msToTime, filterHours } from './utils';
import { HourlyWrap, HourlyListWrap } from './componentsStyles';

const Hourly: React.FC = () => {

    if (!wheather.cityByDailyHourly) {
        return <LinearIndeterminate />
    }


    return (
        <HourlyWrap>
            {
                filterHours(wheather.cityByDailyHourly.data.hourly).map((item: any) => {
                    return (
                        <div>

                            <HourlyListWrap>
                                {
                                    msToTime(item.dt)
                                }
                            </HourlyListWrap>
                            <HourlyListWrap>
                                {
                                    `${item.clouds}°C`
                                }
                            </HourlyListWrap>
                        </div>

                    )
                })

            }
        </HourlyWrap>
    )
}

export default Hourly;
