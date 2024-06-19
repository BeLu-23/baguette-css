import '../App.css';
import { tileStrings } from '../utility/contentStrings';
import Property from './Property';
import SimpleProperty from './SimplePropertyTile';


const PropertyTile = () => {
    return (

        <div className="container">
            <SimpleProperty propertyProps={tileStrings.color} />
            <Property propertyProps={tileStrings.border} />
        </div>
    )
}

export default PropertyTile;