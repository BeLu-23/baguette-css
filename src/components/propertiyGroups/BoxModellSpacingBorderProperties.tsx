import GerneralPropertyScreen from "../../pages/GeneralPropertyScreen";
import { tileStrings } from "../../utility/contentStrings";
import DoubleOutput from "../DoubleOutput";
import GeneralProperty from "../GeneralProperty";
import FCDiv from "../styling/FCDiv";

const BoxModellSpacingBorderProperties = () => {
    return ( 
        <GerneralPropertyScreen header='Color & Background Properties' >
            <FCDiv>
                <GeneralProperty propertyProps={tileStrings.border}>
                    <DoubleOutput output={tileStrings.border.output} leftProps='example-box' rightProps='example-box with-border'/>
                </GeneralProperty>
            </FCDiv>
        </GerneralPropertyScreen>
     );
}
 
export default BoxModellSpacingBorderProperties;