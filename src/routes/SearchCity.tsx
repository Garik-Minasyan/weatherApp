import { useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import FormCity from '../components/FormCity';
import { SearchCityWrap } from './routesStyles';
import wheather from '../store/wheather';
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const SearchCity: React.FC = () => {
    const [value, setValue] = useState<String>('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const changeValue = (e: any) => {
        setValue(e.target.value)
    }

    const addSuccess = () => {
        if (value.length) {
            wheather.getCityCoordinats(value)
            setValue('')

        } else (handleOpen())
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
                        color="secondary">Add City
                    </Button>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Please write the name of the city !!!
                        </Typography>
                    </Box>
                </Modal>
            </SearchCityWrap>
            <FormCity />
        </div>
    )
}

export default SearchCity;
