import { Route, Switch } from 'react-router-dom';
import SearchCity from "../routes/SearchCity";
import WheatherForecastObserver from '../routes/WheatherForecast';

const Content: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Switch>
                <Route exact path='/'>
                    <WheatherForecastObserver />
                </Route>
                <Route path='/searchcity'>
                    <SearchCity />
                </Route>
            </Switch>
        </div>
    )

}

export default Content;



