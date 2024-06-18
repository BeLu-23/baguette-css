import "../App.css"

interface CssCodeProps {
    css: string;
  }

const CssCode = ({ css }: CssCodeProps) => {
    return (
        <pre>
            <code>
              {css}
            </code>
        </pre>
    )
}

export default CssCode;