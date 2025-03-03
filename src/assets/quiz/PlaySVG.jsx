import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const PlaySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={44}
        height={45}
        fill="none"
        {...props}
    >
        <Path fill="#fff" d="M16 14h14v18H16z" />
        <Path
            fill="url(#a)"
            d="M22 4.167a18.333 18.333 0 1 0 0 36.667 18.333 18.333 0 0 0 0-36.667ZM18.333 30.75v-16.5l11 8.25-11 8.25Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={40.333}
                x2={3.667}
                y1={22.5}
                y2={22.5}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#E1C285" />
                <Stop offset={1} stopColor="#9F7E3D" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default PlaySVG;
