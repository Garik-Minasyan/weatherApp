import styled from 'styled-components';

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: center;
    color: white;
`
export const LinkWrap = styled.div`
    list-style: none;
    padding: 20px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.16);
    margin-left: 20px;
    border-radius: 10px;
    &:hover {
        background-color: #F50057
    }
    a {
    text-decoration: none;
    padding: 10px 10px;
    font-size: 20px;
    color: #111522;
    }
`

export const NavWrap = styled.div`
    margin-right: 15px;
    display: flex;
`
export const HWrap = styled.h1`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`