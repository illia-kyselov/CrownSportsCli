import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const NotifySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            fill="url(#a)"
            d="M8 1.333A4.667 4.667 0 0 0 3.333 6v2.352a.667.667 0 0 1-.07.298L2.12 10.94A.733.733 0 0 0 2.775 12h10.45a.734.734 0 0 0 .656-1.061L12.737 8.65a.666.666 0 0 1-.07-.298V6A4.667 4.667 0 0 0 8 1.333ZM8 14a2 2 0 0 1-1.887-1.333h3.774A2 2 0 0 1 8 14Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={13.959}
                x2={2.041}
                y1={7.667}
                y2={7.667}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#E1C285" />
                <Stop offset={1} stopColor="#9F7E3D" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default NotifySVG;
