import {  makeAutoObservable } from 'mobx';
import {API_KEY_NAME}  from '../api/api';
import { JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal } from 'react';

const url = `https://api.openweathermap.org/data/2.5/weather?q=erevan&appid=${API_KEY_NAME}`;

class Wheather {
    city: any[] = []
    cityList: any[] =[]
    static city: string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray | ReactPortal | null | undefined;
    static getCity: any;
    static addCityList: void;
    constructor() {
        makeAutoObservable(this)
    }

    getCity(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => this.city = [...this.city, data])
        this.city = []
    }

    addCityList(list: String){
        this.cityList.push(list)
    }

    enterToCityLink(value:String) {
        console.log(value)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY_NAME}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => this.city = [...this.city, data])
        this.city = []
    }
}

export default new Wheather();
