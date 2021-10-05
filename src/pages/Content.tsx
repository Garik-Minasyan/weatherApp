import { Route, Switch } from 'react-router-dom';
import WeatherForecast from "../routes/WeatherForecast";
import SearchCity from "../routes/SearchCity";

const Content: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <WeatherForecast />
                </Route>
                <Route exact path='/searchcity'>
                    <SearchCity />
                </Route>
            </Switch>
        </div>
    )

}

export default Content;



