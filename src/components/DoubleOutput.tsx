import '../css/Output.css';

interface DoubleOutputProps {
    output: {
        text1: string;
        text2: string;
    }
    leftProps: string;
    rightProps: string;
}

const DoubleOutput = ({ output, leftProps, rightProps }: DoubleOutputProps) => {
    return (
        <div className="example-container">
            <div className={leftProps}>{output.text1}</div>
            <div className={rightProps}>{output.text2}</div>
        </div>
    )
}

export default DoubleOutput;