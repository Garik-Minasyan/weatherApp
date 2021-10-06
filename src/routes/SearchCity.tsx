import { useState } from 'react';
import Wheather from '../store/wheather';
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import FormCity from '../components/FormCity';

const SearchCityWrap = styled.div`
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

const SearchCity: React.FC = () => {
    const [value,setValue] = useState<String>('');

    const changeValue = (e: any) => {
        setValue(e.target.value)
    }

    const addCity = () => {
        if (value.length) {
            Wheather.addCityList(value)
            setValue('')
        }
    }
  
    return (
        <div>
        <SearchCityWrap>
            <TextField 
                onChange={changeValue}
                value={value}
                size="medium"
                id="outlined-basic"
                label="Search City"
                variant="outlined"
                style={{borderColor:'red'}}
            />
            <div style={{marginLeft:"5px"}}>
                <Button
                    onClick={addCity}
                    variant="contained" 
                    size="large"
                    color="secondary">Success
                </Button>
            </div>
      
        </SearchCityWrap>
        <FormCity />
        </div>
    )
    
}

export default SearchCity;
