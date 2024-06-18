import '../App.css';
import { tileStrings } from '../utility/contentStrings';
import Property from './Property';
import SimpleProperty from './SimplePropertyTile';


const PropertyTile = () => {
    return (

        <div className="container">

            //TODO übergebe ganzes Objekt anstatt alle props einzeln
            
            <SimpleProperty
                property={tileStrings.color.property} 
                description={tileStrings.color.description} 
                css={tileStrings.color.css} 
                text1={tileStrings.color.output.text1} 
            />
            <Property
                property={tileStrings.border.property} 
                description={tileStrings.border.description} 
                css={tileStrings.border.css} 
                text1={tileStrings.border.output.text1} 
                text2={tileStrings.border.output.text2} 
            />
        </div>
    )
}

export default PropertyTile;