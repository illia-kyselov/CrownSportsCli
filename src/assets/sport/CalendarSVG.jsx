import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CalendarSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M21.333 2.667a1.334 1.334 0 0 1 1.324 1.177l.01.156v1.333H24a4 4 0 0 1 3.993 3.765l.007.235v16a4 4 0 0 1-3.765 3.994l-.235.006H8a4 4 0 0 1-3.993-3.765L4 25.333v-16A4 4 0 0 1 7.765 5.34L8 5.333h1.333V4a1.333 1.333 0 0 1 2.658-.156L12 4v1.333h8V4a1.334 1.334 0 0 1 1.333-1.333Zm4 9.333H6.667v12.833c0 .94.514 1.715 1.177 1.822l.156.011h16c.684 0 1.248-.706 1.324-1.62l.01-.213V12Z"
        />
        <Path
            fill="#fff"
            d="M16 16a1.333 1.333 0 0 1 1.324 1.177l.01.156v4a1.333 1.333 0 0 1-2.658.156l-.01-.156v-2.666a1.334 1.334 0 0 1-.155-2.658l.156-.009H16Z"
        />
    </Svg>
);
export default CalendarSVG;
