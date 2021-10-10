import { makeAutoObservable } from 'mobx';
import { API_KEY_NAME } from '../api/api';
import { getDateFromSeconds } from '../utils/utils';

class Wheather {
    city: any
    cityWeatherData: any = null
    cityList: any[] = []
    celsius: false | true | undefined

    constructor() {
        makeAutoObservable(this)
    }

    chnageCelsius() {
        this.celsius = !this.celsius
    }

    addCityList(list: String) {
        this.cityList.push(list)
    }

    getCityCoordinats(value: String) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY_NAME}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.city = { ...data }
                this.cityList = [...this.cityList, data]
            })
    }

    enterToCityLink(index: number) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.cityList[index].coord.lat}&lon=${this.cityList[index].coord.lon}&exclude&appid=${API_KEY_NAME}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.cityWeatherData = { // TODO - add reusable mapping function
                    ...data, // TODO - take only needed properties, set TS type for this object
                    hourly: data.hourly.map((item: any) => ({
                        ...item,
                        date: getDateFromSeconds(item.dt, data.timezone_offset),
                    })),
                    daily: data.daily.map((item: any) => ({
                        ...item,
                        date: getDateFromSeconds(item.dt, data.timezone_offset),
                    })),
                };
                this.city = this.cityList[index]
            })
    }
}

export default new Wheather();


