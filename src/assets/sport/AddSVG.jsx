import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const AddSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Rect width={32} height={32} fill="#fff" rx={6} />
        <Path
            fill="url(#a)"
            d="M25.333 17.333h-8v8h-2.666v-8h-8v-2.666h8v-8h2.666v8h8v2.666Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={25.333}
                x2={6.667}
                y1={16}
                y2={16}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#E1C285" />
                <Stop offset={1} stopColor="#9F7E3D" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default AddSVG;
