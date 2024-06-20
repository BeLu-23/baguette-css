import '../css/Output.css';

interface OutputProps {
    text: string
    textProps: string;
}

const Output = ({ text, textProps }: OutputProps) => {
    return (
        <div className="example">
            <p className={textProps}>{text}</p>
        </div>
    )
}

export default Output;