import styled from "styled-components";

export const LinkWrap = styled.ul`
    width: 200px;
    list-style: none;
    margin-top: 30px;
    padding: 20px 20px;
    margin-left: 140px;
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
    justify-content: center;
`
export const HourlyListWrap = styled.div`
   padding: 15px;
   margin: 5px;
   text-align: center;
   background-color: #88adad;
   border-radius: 10px;
`
export const DailyWrap = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    
`
export const DailyListWrap = styled.div`
    padding: 20px;
    margin: 15px;
    text-align: center;
    display: flex;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    flex-wrap: wrap;
    align-items: center;
`

export const DailyToHours = styled.div`
    padding: 20px;
    margin: 15px;
    text-align: center;
    justify-content: center;
    background-color: #88adad;
    display: flex;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    flex-wrap: wrap;
    align-items: center;
    h2 {
        margin-left: 20px;
    }
`