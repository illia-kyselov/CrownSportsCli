import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CloseSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="m6.9 19-1.4-1.4 5.6-5.6-5.6-5.6L6.9 5l5.6 5.6L18.1 5l1.4 1.4-5.6 5.6 5.6 5.6-1.4 1.4-5.6-5.6L6.9 19Z"
        />
    </Svg>
);
export default CloseSVG;
