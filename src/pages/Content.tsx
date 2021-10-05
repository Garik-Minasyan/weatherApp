import WeatherForecast from "../routes/WeatherForecast";
import SearchCity from "../routes/SearchCity";

const Content: React.FC = () => {
    return (
        <div>
            <WeatherForecast />
            <SearchCity />
        </div>
    )
    
}

export default Content;



