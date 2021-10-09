import styled from "styled-components";

export const LinkWrap = styled.ul`
    width: 200px;
    list-style: none;
    margin-left: 45%;
    margin-top: 30px;
    padding: 20px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-radius: 10px;
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

export const HourlyWrap = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
`
export const HourlyListWrap = styled.div`
   padding: 1px;
   margin: 5px;
   text-align: center;
   background-color: #88adad;
`
export const DailyWrap = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const DailyListWrap = styled.div`
    padding: 20px;
    margin: 5px;
    text-align: center;
    background-color: grey;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: grey;
`