import '../App.css';
import CssCode from './CssCode';
import DoubleOutput from './DoubleOutput';

interface PropertyProps {
    propertyProps: {
        property: string;
        description: string;
        css: string;
        output: {
            text1: string;
            text2: string;
        }
    }
}

const Property = ({propertyProps}: PropertyProps) => {
    return (
        <div className="property">
          <h2>Property: {propertyProps.property}</h2>
          <p>{propertyProps.description}</p>
          <CssCode css={propertyProps.css} />
          <DoubleOutput text1={propertyProps.output.text1} text2={propertyProps.output.text2} />
        </div>
    )
}

export default Property;