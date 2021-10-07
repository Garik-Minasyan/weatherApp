import { useState } from 'react';
import Wheather from '../store/wheather';
import { Button, TextField } from "@material-ui/core";
import FormCity from '../components/FormCity';
import { SearchCityWrap } from './routesStyles';

const SearchCity: React.FC = () => {
    const [value, setValue] = useState<String>('');

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
                    style={{ borderColor: 'red' }}
                />
                <div style={{ marginLeft: "5px" }}>
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
