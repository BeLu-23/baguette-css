import '../css/Property.css';
import CssCode from './CssCode';
import Output from './Output';

interface MoreGeneralPropertyProps {
    generalProperties: {
        property: string;
        description: string[];
        css: string[];
        output: PropertyOutput[];
    }
}

interface PropertyOutput {
    prop: string
    text1: string;
    text2?: string;
  }

const MoreGeneralProperty = ({ generalProperties }: MoreGeneralPropertyProps) => {



    return ( 
        <div id={generalProperties.property} className="property">
            <h2>Property: {generalProperties.property}</h2>

            {generalProperties.description.map((desc, ii) => (
                <div key={ii}>
                    <p dangerouslySetInnerHTML={{__html: desc}}/>
                    <CssCode css={generalProperties.css[ii]} />
                    <Output text={generalProperties.output[ii].text1} textProps={generalProperties.output[ii].prop}/>
                </div>
            ))}
        </div>
     );
}
 
export default MoreGeneralProperty;