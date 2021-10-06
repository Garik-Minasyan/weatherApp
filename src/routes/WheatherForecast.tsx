import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Wheather from '../store/wheather';
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
    // const [wheather,setWeather] = useState<any[]>([]);

    useEffect(() => {
        Wheather.getCity();
    }, []);

    return (
        <WheatherForecastWrap>
           {Wheather.city &&  Wheather.city.map(item => {
               return (
                   <div key={item.name}>
                       {
                           item.name
                       }
                   </div>
               )
           })}
        </WheatherForecastWrap>
    )
}

const WheatherForecastObserver = observer(WheatherForecast)

export default WheatherForecastObserver;