import { createGlobalStyle } from "styled-components";
import RobotoWoffRegular from "./Roboto/roboto-v27-latin-regular.woff";
import RobotoWoff2Regular from "./Roboto/roboto-v27-latin-regular.woff2";
import RobotoTTFRegular from "./Roboto/roboto-v27-latin-regular.ttf";
import RobotoEOTRegular from "./Roboto/roboto-v27-latin-regular.eot";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: ${RobotoEOTRegular}; /* IE9 Compat Modes */
    src: local(''),
        ${RobotoWoff2Regular} format('woff2'), /* Super Modern Browsers */
        ${RobotoWoffRegular} format('woff'), /* Modern Browsers */
        ${RobotoTTFRegular} format('truetype'), /* Safari, Android, iOS */
}
`;

export default FontStyles;