import { tileStrings } from '../../utility/contentStrings';
import GeneralProperty from '../GeneralProperty';
import Output from '../Output';
import FCDiv from '../styling/FCDiv';
import GerneralPropertyScreen from '../../pages/GeneralPropertyScreen';
// import DoubleOutput from '../DoubleOutput';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MoreGeneralProperty from '../MoreGeneralProperty';

const ColorProperties = () => {

    const { id } = useParams();

    // generalProperties: {
    //     property: string;
    //     description: string[];
    //     css: string[];
    //     output: PropertyOutput[];
    // }

    const genProperties = {
        property: 'color',
        description: [
            'desc1',
            'desc2',
            'desc3'
        ],
        css: [
            'css1',
            'css2',
            'css3'
        ],
        output: [
            {
                prop: 'color',
                text1: 'THIS IS COLOR 1',
                text2: ''
            },
            {
                prop: 'color',
                text1: 'THIS IS COLOR 2',
                text2: ''
            },
            {
                prop: 'color',
                text1: 'THIS IS COLOR 3',
                text2: ''
            }

        ]
    }

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
                <MoreGeneralProperty generalProperties={genProperties} />
                {/* <GeneralProperty propertyProps={tileStrings.border}>
                    <DoubleOutput output={tileStrings.border.output} leftProps='example-box' rightProps='example-box with-border'/>
                </GeneralProperty>
                <GeneralProperty propertyProps={tileStrings.border1}>
                    <Output text={tileStrings.color.output.text1} textProps='colorRed' />
                </GeneralProperty>
                <GeneralProperty propertyProps={tileStrings.border2}>
                    <DoubleOutput output={tileStrings.border.output} leftProps='example-box' rightProps='example-box with-border'/>
                </GeneralProperty> */}
            </FCDiv>
        </GerneralPropertyScreen>
     );
}

export default ColorProperties;