import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const DeleteSVG = (props) => (
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
            d="M11 25c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 9 23V10H8V8h5V7h6v1h5v2h-1v13c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 21 25H11Zm2-4h2v-9h-2v9Zm4 0h2v-9h-2v9Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={24}
                x2={8}
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
export default DeleteSVG;
