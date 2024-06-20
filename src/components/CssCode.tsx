import '../css/CssCode.css';

interface CssCodeProps {
    css: string;
  }

const CssCode = ({ css }: CssCodeProps) => {
    return (
        <pre>
            <code dangerouslySetInnerHTML={{__html: css}} />
        </pre>
    )
}

export default CssCode;