import '../css/Property.css';
import CssCode from './CssCode';

interface GeneralPropertyProps {
    propertyProps: {
        property: string;
        description: string;
        css: string;
        output: {
            text1: string;
            text2?: string;
        }
    };
    children: React.ReactNode;
}

const GeneralProperty = ({ propertyProps, children }: GeneralPropertyProps) => {



    return ( 
        <div id={propertyProps.property} className="property">
            <h2>Property: {propertyProps.property}</h2>
            <p dangerouslySetInnerHTML={{__html: propertyProps.description}}/>
            <CssCode css={propertyProps.css} />
            {children}
        </div>
     );
}
 
export default GeneralProperty;