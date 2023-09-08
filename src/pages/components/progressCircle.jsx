function ProgressCircle({ value, color1, color2, progress, size, borderSize, fontSize }) {
    const circleSize = size || 230; // Default size if not provided
    const strokeWidth = borderSize || 30; // Default border size if not provided
    const radius = (circleSize - strokeWidth) / 2;
    const dashArray = (2 * Math.PI * radius).toFixed(2);

    const progressValue = Math.min(Math.max(0, progress), 100);
    const dashOffset = ((100 - progressValue) / 100 * dashArray).toFixed(2);

    const circleStyle1 = {
        stroke: color1 || '#FF983A',
        strokeDasharray: dashArray,
    };

    const circleStyle2 = {
        stroke: color2 || '#59E8B5',
        strokeDasharray: dashArray,
        strokeDashoffset: dashOffset,
        strokeLinecap: 'round', // Add this line for rounded ends
    };

    const textStyle = {
        fontSize: fontSize || '16px', // Default font size if not provided
    };

    // Calculate the position of the text to center it in the circle
    const textX = circleSize / 2;
    const textY = circleSize / 2 + parseFloat(textStyle.fontSize) / 3; // Adjust for vertical centering

    return (

        <svg width={circleSize} height={circleSize} className="progress-circle">
            <g transform={`translate(${circleSize / 2} ${circleSize / 2})`}>
                <circle cx="0" cy="0" fill="none" r={radius} strokeWidth={strokeWidth} style={circleStyle1}></circle>
                <circle cx="0" cy="0" fill="none" r={radius} strokeWidth={strokeWidth} transform="rotate(-90)" style={circleStyle2}></circle>
            </g>
            <text textAnchor="middle" x={textX} y={textY} style={textStyle}>
                <tspan>{value}</tspan>
            </text>
        </svg>
    );
};
export default ProgressCircle;
