import { SvgXml } from 'react-native-svg';

const MenuSVG = () => {
  const svgXml = `
    <svg width="47" height="47" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_365_3026)">
        <path d="M5.5 33H38.5V29.3333H5.5V33ZM5.5 23.8333H38.5V20.1667H5.5V23.8333ZM5.5 11V14.6667H38.5V11H5.5Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_365_3026">
          <rect width="47" height="47" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `;

  return <SvgXml xml={svgXml} />;
};

export default MenuSVG;
