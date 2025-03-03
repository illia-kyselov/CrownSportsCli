import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const WebSiteSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={52}
        height={52}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M26 4C13.85 4 4 13.85 4 26s9.85 22 22 22 22-9.85 22-22S38.15 4 26 4ZM14.309 15.06h23.38v21.88H14.31V15.06Zm2.882 2.859v16.164H34.81V17.919H17.19Zm1.922 2.061H32.84v7.168H19.112V19.98Zm0 8.41H23v3.889h-3.889V28.39Zm4.919 0h3.889v3.889h-3.89V28.39Zm4.919 0h3.89v3.889h-3.89V28.39Z"
        />
    </Svg>
);
export default WebSiteSVG;
