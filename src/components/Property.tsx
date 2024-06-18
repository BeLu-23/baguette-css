import '../App.css';
import CssCode from './CssCode';
import DoubleOutput from './DoubleOutput';

interface PropertyProps {
    property: string;
    description: string;
    css: string;
    text1: string;
    text2: string;
}

const Property = ({property, description, css, text1, text2}: PropertyProps) => {
    return (
        <div className="property">
          <h2>Property: {property}</h2>
          <p>{description}</p>
          <CssCode css={css} />
          <DoubleOutput text1={text1} text2={text2} />
        </div>
    )
}

export default Property;