import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const TimeSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="url(#a)"
            d="M12.5 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10Zm0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13.5 11.586V7a1 1 0 0 0-1-1Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={22.5}
                x2={2.5}
                y1={12}
                y2={12}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#E1C285" />
                <Stop offset={1} stopColor="#9F7E3D" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default TimeSVG;
