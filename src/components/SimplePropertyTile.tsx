import '../App.css';
import CssCode from './CssCode';
import Output from './Output';

interface SimplePropertyProps {
    propertyProps: {
        property: string;
        description: string;
        css: string;
        output: {
            text1: string;
            text2?: string;
        }
    }
}

const SimpleProperty = ({propertyProps}: SimplePropertyProps) => {
    return (
        <div className="property">
          <h2>Property: {propertyProps.property}</h2>
          <p>{propertyProps.description}</p>
          <CssCode css={propertyProps.css} />
          <Output text={propertyProps.output.text1} />
        </div>
    )
}

export default SimpleProperty;