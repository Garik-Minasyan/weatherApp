import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import wheather from '../store/wheather';
import styled from 'styled-components';


const WheatherForecastWrap = styled.div`
    width: 500px;
    height: 300px;
    border: 1px solid #d0d0d1;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    margin-left: 38%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WheatherForecast: React.FC = () => {
    // const [wheatherCity, setWeatherCity] = useState<any[]>([]);

    useEffect(() => {
        wheather.enterToCityLink("yerevan");
    }, []);

    return (
        <WheatherForecastWrap>
            {wheather.city && wheather.city.map(item => {
                console.log(item)
                return (
                    <div key={item.name}>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt='png' />
                        <h1>
                            {item.weather[0].main}
                        </h1>
                        <h1>
                            {Math.ceil(Number(item?.main.temp))}
                            <span>°C</span>
                        </h1>
                        <h3>
                            {item?.name} {item?.sys?.country}
                        </h3>
                    </div>
                )
            })}
        </WheatherForecastWrap>
    )
}

const WheatherForecastObserver = observer(WheatherForecast)

export default WheatherForecastObserver;