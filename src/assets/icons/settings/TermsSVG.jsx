import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const TermsSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={52}
        height={52}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M30 22h11L30 11v11ZM12 8h20l12 12v20a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12c0-2.22 1.78-4 4-4Zm0 18v4h28v-4H12Zm0 8v4h18v-4H12Z"
        />
    </Svg>
);
export default TermsSVG;
