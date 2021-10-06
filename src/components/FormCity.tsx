import React from 'react';
import wheather from '../store/wheather';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrap =styled.ul`
    width: 200px;
    list-style: none;
    margin-left: 45%;
    margin-top: 30px;
    padding: 20px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #F50057;
        color: white
    }
    a {
    text-decoration: none;
    padding: 10px 10px;
    font-size: 25px;
    color: #111522;
    &:hover {
        color: white
    }
    }
`

const FormCity: React.FC = () => {
    return (
        <div>
            {
                wheather.cityList && wheather.cityList.map(item => {
                    return (
                        <LinkWrap key={item}>
                            <Link onClick={() => wheather.enterToCityLink(item)} to='/'>{item}</Link>
                        </LinkWrap>
                    )
                })
            }
        </div>
    )
}

export default FormCity;