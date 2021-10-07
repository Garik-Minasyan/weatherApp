import React from 'react';
import wheather from '../store/wheather';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { LinkWrap } from './componentsStyles';


const FormCity: React.FC = () => {

    return (
        <div>
            {wheather.cityList.map((item, index) => (
                <LinkWrap key={item.name}>
                    <Link onClick={() => wheather.enterToCityLink(index)} to='/'>{item.name}</Link>
                </LinkWrap>
            ))}
        </div>
    )
}
const FormCityObserver = observer(FormCity)


export default FormCityObserver;