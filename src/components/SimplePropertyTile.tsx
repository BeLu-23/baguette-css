import '../App.css';
import CssCode from './CssCode';
import Output from './Output';

interface SimplePropertyProps {
    property: string;
    description: string;
    css: string;
    text1: string;
    // text2?: string;
}

const SimpleProperty = ({property, description, css, text1}: SimplePropertyProps) => {
    return (
        <div className="property">
          <h2>Property: {property}</h2>
          <p>{description}</p>
          <CssCode css={css} />
          <Output text={text1} />
        </div>
    )
}

export default SimpleProperty;