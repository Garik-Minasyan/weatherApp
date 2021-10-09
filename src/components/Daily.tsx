import React from 'react';
import wheather from '../store/wheather';
import { fToC, toDays, filterDaily } from './../components/utils';
import LinearIndeterminate from './Loading';
import { DailyWrap, DailyListWrap } from './componentsStyles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

const style = {
    position: 'absolute' as 'absolute',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: '#B20003',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Daily: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    if (!wheather.cityByDailyHourly) {
        return <LinearIndeterminate />
    }

    return (
        <DailyWrap>
            {
                filterDaily(wheather.cityByDailyHourly.data.daily).map((item: any, index: any) => {
                    return (
                        <><DailyListWrap onClick={handleOpen} key={index}>

                            <DailyListWrap>
                                <h1>
                                    {toDays(item.dt)}
                                </h1>
                            </DailyListWrap>
                            <DailyListWrap>
                                {<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='png' />}
                            </DailyListWrap>
                            <DailyListWrap>
                                <h2>
                                    {item.weather[0].main}
                                </h2>
                            </DailyListWrap>
                            {wheather.celsius ?
                                <DailyListWrap>
                                    <h2>
                                        {(item.temp.day - 273.15).toFixed()}
                                        <span>°C</span>
                                    </h2>
                                </DailyListWrap>
                                :
                                <DailyListWrap>
                                    <h2>
                                        {fToC(item.temp.day - 273.15)}
                                        <span>°F</span>
                                    </h2>
                                </DailyListWrap>}
                            <DailyListWrap>
                                <h2>
                                    <span>Wind Speed: {item.wind_speed}</span>
                                </h2>
                            </DailyListWrap>
                        </DailyListWrap>
                            <Modal
                                aria-labelledby="unstyled-modal-title"
                                aria-describedby="unstyled-modal-description"
                                open={open}
                                onClose={handleClose}
                            >
                                <Box sx={style}>
                                    {wheather.celsius ?
                                        <div>
                                            <h2>
                                                day: {(item.feels_like.day - 273.15).toFixed()}
                                                <span>°C</span>
                                            </h2>
                                            <h2>
                                                eve:  {(item.feels_like.eve - 273.15).toFixed()}
                                                <span>°C</span>
                                            </h2>
                                            <h2>
                                                morn:  {(item.feels_like.morn - 273.15).toFixed()}
                                                <span>°C</span>
                                            </h2>
                                            <h2>
                                                night:  {(item.feels_like.night - 273.15).toFixed()}
                                                <span>°C</span>
                                            </h2>
                                        </div>
                                        :
                                        <div>
                                            <h2>
                                                day: {fToC(item.feels_like.day - 273.15)}
                                                <span>°F</span>
                                            </h2>
                                            <h2>
                                                eve:  {fToC(item.feels_like.eve - 273.15)}
                                                <span>°F</span>
                                            </h2>
                                            <h2>
                                                morn:  {fToC(item.feels_like.morn - 273.15)}
                                                <span>°F</span>
                                            </h2>
                                            <h2>
                                                night  {fToC(item.feels_like.night - 273.15)}
                                                <span>°F</span>
                                            </h2>
                                        </div>}
                                </Box>
                            </Modal></>
                    )
                })

            }
        </DailyWrap>

    )
};

export default Daily;

