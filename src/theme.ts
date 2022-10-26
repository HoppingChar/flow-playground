export default {
  colors: {
    primary: '#00ff76',
    darkPrimary: '#2bb169',
    background: '#F6F7F9',
    text: '#2F353F',
    muted: '#6a6a6a',
    grey: '#DDDDDD',
    darkGrey: '#909090',
    greyBorder: '#D8D8D8',
    purple: '#f694ff',
    border: 'rgb(240, 240, 240)',
    borderDark: 'rgb(222, 222, 222)',
    shadowColor: 'rgb(222, 222, 222)',
    warning: '#ffcc00',
    error: '#f44336',
    blue: '#0000ff',
    heading: '#919191',
    badgeResource: '#0093AF',
    badgeCapability: '#3DDC84',
    badgeNull: '#8C92AC',
    // TODO: Consolidate color names after we import more v2 colors
    alternateButtonBorder: '#DEE2E9',
    alternateButtonBackground: '#F6F7F9',
    modes: {
      dark: {
        alternateButtonBorder: '#2F353F',
        alternateButtonBackground: '#161616',
      },
    },
  },
  fonts: {
    body: 'Interstate, system-ui, sans-serif',
    heading: 'Interstate, system-ui, sans-serif',
    monospace: "Menlo, Monaco, 'Courier New', monospace",
  },
  forms: {
    subtle: {
      padding: 0,
      border: 'none',
      color: 'purple',
      marginRight: '0.5rem',
      textOverflow: 'ellipsis',
    },
  },
  buttons: {
    primary: {
      border: 'none',
      borderRadius: '8px',
      backgroundColor: 'primary',
      fontFamily: 'body',
      fontWeight: 500,
      color: 'text',
      margin: 0,
      paddingX: '1rem',
      paddingY: '0.75rem',
      fontSize: 4,
      '&:active': {
        backgroundColor: '#10EF77',
      },
    },
    disabled: {
      border: 'none',
      backgroundColor: 'grey',
      borderRadius: '8px',
      borderWidth: 3,
      fontFamily: 'body',
      fontWeight: 500,
      color: 'text',
      margin: 0,
      paddingX: '1rem',
      paddingY: '0.75rem',
      fontSize: 4,
    },
    secondary: {
      border: 'none',
      background: 'none',
      fontFamily: 'body',
      color: 'text',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      fontWeight: 500,
      paddingX: '0.65rem',
      paddingY: '0.5rem',
      borderRadius: '5px',
      '&:hover': {
        background: 'rgb(245, 245, 245)',
      },
    },
    alternate: {
      border: '1px solid alternateButtonBorder',
      backgroundColor: 'alternateButtonBackground',
      '&:hover': {
        opacity: '0.75',
      },
    },
  },
  links: {
    buttonSecondary: {
      border: 'none',
      background: 'none',
      fontFamily: 'body',
      color: 'text',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      fontWeight: 500,
      paddingX: '0.65rem',
      paddingY: '0.5rem',
      borderRadius: '5px',
      '&:hover': {
        background: 'rgb(245, 245, 245)',
      },
    },
  },
  fontWeights: {
    thin: 200,
    body: 400,
    medium: 500,
    heading: 700,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '3.75rem',
    '4.5rem',
    '6rem',
    '8rem',
  ],
  space: [
    '0',
    '0.125rem',
    '0.25rem',
    '0.375rem',
    '0.5rem',
    '0.625rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.25rem',
    '2.5rem',
    '2.75rem',
    '3rem',
    '3.5rem',
    '4rem',
    '5rem',
    '6rem',
    '7rem',
    '8rem',
    '9rem',
    '10rem',
    '11rem',
    '12rem',
    '13rem',
    '14rem',
    '15rem',
    '16rem',
    '18rem',
    '20rem',
    '24rem',
  ],
  radii: [4, 8, '1rem', '2rem', '4rem'],
  borderWidths: [1, 4],
  shadows: [
    '9px 9px 10px #d9c5d6, -9px -9px 10px whitesmoke',
    '5px 5px 10px #d6e3e6, -5px -5px 10px #ffffff',
    '2px 2px 5px #d6e3e6, -2px -2px 5px #ffffff',
  ],
  borders: ['2px solid rgb(240, 240, 240)'],
  boxes: {
    borderBox: {
      position: 'relative',
      background: 'white',
      overflow: 'hidden',
      borderRadius: 2,
      boxShadow: 2,
      border: 0,
      transition: 'box-shadow 0.2s',
      '&:hover': {
        boxShadow: 1,
      },
    },
  },
  text: {
    icon: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 3,
      ':hover': {
        cursor: 'pointer',
      },
      svg: {
        marginRight: '0.2rem',
      },
    },
  },
};
