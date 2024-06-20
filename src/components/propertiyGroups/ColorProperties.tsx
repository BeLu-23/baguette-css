import { tileStrings } from '../../utility/contentStrings';
import GeneralProperty from '../GeneralProperty';
import Output from '../Output';
import FCDiv from '../styling/FCDiv';
import GerneralPropertyScreen from '../../pages/GeneralPropertyScreen';
import DoubleOutput from '../DoubleOutput';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ColorProperties = () => {

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        }
    })

    return ( 
        <GerneralPropertyScreen header='Color & Background Properties' >
            <FCDiv>
                <GeneralProperty propertyProps={tileStrings.color}>
                    <Output text={tileStrings.color.output.text1} textProps='colorRed' />
                </GeneralProperty>
                <GeneralProperty propertyProps={tileStrings.border}>
                    <DoubleOutput output={tileStrings.border.output} leftProps='example-box' rightProps='example-box with-border'/>
                </GeneralProperty>
                <GeneralProperty propertyProps={tileStrings.border1}>
                    <Output text={tileStrings.color.output.text1} textProps='colorRed' />
                </GeneralProperty>
                <GeneralProperty propertyProps={tileStrings.border2}>
                    <DoubleOutput output={tileStrings.border.output} leftProps='example-box' rightProps='example-box with-border'/>
                </GeneralProperty>
            </FCDiv>
        </GerneralPropertyScreen>
     );
}

export default ColorProperties;