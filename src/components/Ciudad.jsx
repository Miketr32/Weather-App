import { useParams } from 'react-router-dom';
import './Ciudad.css'

export default function Ciudad({onFilter, onClose}) {

    const {ciudadId} = useParams();

    const city = onFilter(ciudadId);
    if(city){
    return(
        <div className='ciudad'>
            <div className='container'>
                <h2>{city.name}</h2>
                <div className='info'>
                    <div><strong>Temperatura:</strong> {city.temp} °C</div>
                    <div><strong>Clima:</strong> {city.weather}</div>
                    <div><strong>Viento:</strong> {city.wind} km/h</div>
                    <div><strong>Cantidad de nubes:</strong> {city.clouds}</div>
                    <div><strong>Presion atmosferica:</strong> {city.pressure}</div>
                    <div><strong>Humedad relativa:</strong> {city.humidity} %</div>
                    <div><strong>Latitud:</strong> {city.latitud}°</div>
                    <div><strong>Longitud:</strong> {city.longitud}°</div>
                    <div><img src={city.flag} alt='bandera'/></div>
                </div>
            </div>
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
    )
    } else {
        return <h2>No hay ciudad para mostrar</h2>
    }
}
