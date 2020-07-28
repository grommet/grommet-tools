import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const grommetToolsTheme = deepMerge(grommet, {
  global: {
    edgeSize: {
      marginXL: '200px',
      animationBox: '380px',
      none: '0px',
    },
    size: {
      none: '0px',
    },
    colors: {
      gradient:
        'linear-gradient(111.57deg, #FFF06C -6.47%, #FFCF50 22.58%, #FFA650 49.44%, #FFD8D8 77.04%, #49E2FF 106.08%, #75FFCE 132.95%)',
      DesignerYellow: '#FDEF74',
      ThemerOrange: '#F9D36E',
      ImagerOrange: '#F4AD68',
      PublisherPink: '#FFD8D8',
      SlidesBlue: '#ABEFFC',
      TabularGreen: '#9BFAD8',
      noCodeBackground: 'rgba(0,0,0,0.06)',
      YellowBackground: '#FDF074',
      altGrey: '#999999',
      darkGrey: '#666666',
      headingGrey: '#444444',
      lightGrey: 'rgba(0, 0, 0, 0.04)',
      background: {
        light: '#ffffff',
        dark: '#000000',
      },
    },
  },
  icon: {
    size: {
      customSmall: '36px',
      customLarge: '60px',
    },
  },
});
