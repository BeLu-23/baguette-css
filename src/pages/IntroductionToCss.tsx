import Separator from "../components/styling/Separator";
import GerneralPropertyScreen from "./GeneralPropertyScreen";
import '../css/IntroCss.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const IntroductionToCss = () => {

    const {id} = useParams();

const css1 = `
selector {
    property: value;
    property: value;
}
`;
const css2 = `
h1 {
    color: blue;
}
`;
const css3 = `
.myClass {
    color: green;
}
`;
const css4 = `
#myId {
    color: red;
}
`;
const css5 = `
* {
    color: black;
}
`;
const css6 = `
[type="text"] {
    color: purple;
}
`;

    useEffect(() => {
        if (id) {
            document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        }
    })

    return ( 
        <GerneralPropertyScreen header="Introduction to Css">
            <h2 id="whatIsCss">What is Css?</h2>
            <p className="introP">
                CSS (Cascading Style Sheets) is used to style and layout web pages. It allows you to apply styles to HTML elements, such as colors, fonts, and spacing, making your website look attractive and user-friendly.
            </p>
            <p className="introP">With CSS, you can:</p>
            <ul className="introUl">
                <li className="introLi">
                    <strong>Control Layouts</strong>: Organize the layout of web pages to create visually appealing designs and responsive layouts that adapt to different screen sizes.
                </li>
                <li className="introLi">
                    <strong>Enhance Appearance</strong>: Apply colors, fonts, and other stylistic choices to make your website more attractive and engaging.
                </li>
                <li className="introLi">
                    <strong>Separate Content from Design</strong>: Maintain a clear separation between the content (HTML) and the design (CSS), making it easier to manage and update websites.
                </li>
                <li className="introLi">
                    <strong>Reuse Styles</strong>: Define styles once and reuse them across multiple pages, ensuring consistency throughout your site and reducing repetitive code.
                </li>
                <li className="introLi">
                    <strong>Improve Accessibility</strong>: Enhance the accessibility of your website for users with disabilities by providing styles that improve readability and navigation.
                </li>
            </ul>
            <p className="introP">CSS enhances the user experience and provides web developers with powerful tools to create dynamic and aesthetically pleasing websites.</p>

            <Separator />
            <h2 id="creatingCssFile">Creating a CSS File</h2>
            <p className="introP">
                First, create a new file with a `.css` extension. For example, name it `styles.css`. This file will contain all your CSS rules. To create the file, open your text editor or IDE, select 'New File', and save it as `styles.css` in your project directory. This CSS file will be where you define the styles that will be applied to your HTML elements, such as colors, fonts, and layout properties.
            </p>
            <Separator />
            <h2 id="linkingCssHtml">Linking CSS to HTML</h2>
            <p className="introP">
                To link your CSS file to your HTML file, you need to add a <code>&lt;link&gt;</code> tag inside the <code>&lt;head&gt;</code> section of your HTML document. The <code>&lt;link&gt;</code> tag specifies the relationship between the HTML file and the CSS file. Here's how to do it:
            </p>
            <p className="introP">
                Open your HTML file and locate the <code>&lt;head&gt;</code> section. Within the <code>&lt;head&gt;</code> tags, add the following line of code:
            </p>
            <pre className="introPre">
            <code>
            &lt;link rel="stylesheet" href="styles.css"&gt;
            </code>
            </pre>
            <p className="introP">
                The <code>rel="stylesheet"</code> attribute specifies that the linked file is a stylesheet, and the <code>href="styles.css"</code> attribute provides the path to your CSS file. Make sure that the file path in the <code>href</code> attribute correctly points to your CSS file location. Now, any styles defined in `styles.css` will be applied to the HTML elements in your document.
            </p>
            <p className="introP">Here is an example how the full HTML file could looke like:</p>
            <pre className="introPre">
            <code>
                &lt;!DOCTYPE html&gt;<br />
                &lt;html lang="en"&gt;<br />
                &nbsp;  &lt;head&gt;<br />
                &nbsp;&nbsp;    &lt;meta charset="UTF-8"&gt;<br />
                &nbsp;&nbsp;    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br />
                &nbsp;&nbsp;    &lt;title&gt;My Website&lt;/title&gt;<br />
                &nbsp;&nbsp;    &lt;link rel="stylesheet" href="styles.css"&gt;<br />
                &nbsp;  &lt;/head&gt;<br />
                &nbsp;  &lt;body&gt;<br />
                &nbsp;&nbsp;    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;<br />
                &nbsp;&nbsp;    &lt;p&gt;This is a paragraph.&lt;/p&gt;<br />
                &nbsp;  &lt;/body&gt;<br />
                &lt;/html&gt;
                </code>
            </pre>
            <Separator />
            <h2 id="cssSyntax">Css Syntax</h2>
            <p className="introP">
            A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style, and the declaration block contains one or more declarations separated by semicolons. And thats all you need to know about Css Syntax. It's as easy as that.
            </p>
            <pre className="introPre">
                <code>{css1}</code>
            </pre>
            <Separator />
            <h2 id="selectors">Selectors</h2>
            <p className="introP">
                Selectors are a fundamental part of CSS that allow you to target specific HTML elements for styling. They are patterns used to select the elements you want to style. By using selectors, you can apply styles to individual elements, groups of elements, or elements based on their attributes, classes, or IDs. Selectors help you control the appearance of your web page efficiently and precisely.
            </p>
            <h3>Type Selector</h3>
            <p className="introP">Selects all elements of a given type. In this case it's the element of type 'h1'. Just use the type of the element.</p>
            <pre className="introPre">
                <code>{css2}</code>
            </pre>
            <h3>Class Selector</h3>
            <p className="introP">Selects all elements with a given class. Use a period `.` followed by the name of the class.</p>
            <pre className="introPre">
                <code>{css3}</code>
            </pre>
            <h3>ID Selector</h3>
            <p className="introP">Selects a single element with a given ID. Use a hash `#` followed by the ID name.</p>
            <pre className="introPre">
                <code>{css4}</code>
            </pre>
            <h3>Universal Selector</h3>
            <p className="introP">Selects all elements. Use the '*' as shown.</p>
            <pre className="introPre">
                <code>{css5}</code>
            </pre>
            <h3>Attribute Selector</h3>
            <p className="introP">Selects elements with a specific attribute. 'type' is here the name of the html attribute and "text" is the value given to the attribute.</p>
            <pre className="introPre">
                <code>{css6}</code>
            </pre>
            <Separator />
            <h2 id="combiningSelectors">Combining Selectors</h2>
            <p className="introP"></p>
            <h3>Descendent Selector</h3>
            <h3>Child Selector</h3>
            <h3>Adjacent Sibling Selector</h3>
            <h3>General Sibling Selector</h3>
            <Separator />
            <h2 id="summary">Summary</h2>
            <p className="introP">
                CSS is a powerful tool that helps you style your HTML elements. By creating a CSS file, linking it to your HTML, and understanding the basic syntax and selectors, you can start making your web pages look great. Remember to experiment and practice to become more proficient in CSS.
            </p>
        </GerneralPropertyScreen>
     );
}
 
export default IntroductionToCss;