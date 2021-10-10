import React from 'react';
import wheather from '../store/wheather';
import { fToC, filterDaily } from '../utils/utils';
import LinearIndeterminate from './Loading';
import { DailyWrap, DailyListWrap } from './componentsStyles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    bgcolor: '#da5959',
    boxShadow: 24,
    p: 4,
};

const Daily: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    if (!wheather.cityWeatherData) {
        return <LinearIndeterminate />
    }

    return (
        <DailyWrap>
            {
                filterDaily(wheather.cityWeatherData.daily).map((item: any, index: any) => {
                    console.log(item)
                    return (// todo - clearify code
                        <><DailyListWrap onClick={handleOpen} key={index}>
                            <DailyListWrap><h1>{item.date.toString().slice(0, -46)}</h1></DailyListWrap>
                            <DailyListWrap>
                                {<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='png' />}
                            </DailyListWrap>
                            <DailyListWrap><h2>{item.weather[0].main}</h2></DailyListWrap>
                            {wheather.celsius ?
                                <DailyListWrap>
                                    <h2>  {(item.temp.day - 273.15).toFixed()} <span>°C</span></h2>
                                </DailyListWrap>
                                :
                                <DailyListWrap>
                                    <h2> {fToC(item.temp.day - 273.15)}<span>°F</span></h2>
                                </DailyListWrap>}
                            <DailyListWrap>
                                <h2>
                                    <span>Wind Speed: {item.wind_speed}</span>
                                </h2>
                            </DailyListWrap>
                        </DailyListWrap>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
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

