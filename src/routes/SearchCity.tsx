import { useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import FormCity from '../components/FormCity';
import { SearchCityWrap } from './routesStyles';
import wheather from '../store/wheather';

const SearchCity: React.FC = () => {
    const [value, setValue] = useState<String>('');

    const changeValue = (e: any) => {
        setValue(e.target.value)
    }

    const addSuccess = () => {
        wheather.getCityCoordinats(value)
        setValue('')
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
                        onClick={addSuccess}
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
