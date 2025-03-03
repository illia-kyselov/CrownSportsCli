import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const NoNotifySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#677990"
                d="M9.887 12.667a2 2 0 0 1-3.774 0h3.774ZM8 1.333A4.667 4.667 0 0 1 12.667 6v2.352c0 .104.024.206.07.298l1.144 2.289A.734.734 0 0 1 13.225 12h-.282l.714.714a.667.667 0 0 1-.943.943L2.344 3.287a.667.667 0 1 1 .942-.943l.928.928a4.66 4.66 0 0 1 3.787-1.938M3.349 5.617 9.73 12H2.775a.734.734 0 0 1-.656-1.061L3.263 8.65a.667.667 0 0 0 .07-.298V6c0-.129.005-.256.016-.382Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h16v16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default NoNotifySVG;
