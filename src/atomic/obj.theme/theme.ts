import {BaseColor, BaseTheme} from './theme.interface';

const commonColors = {
    grayXLight: '#B3B3B3',
    grayLight: '#989898',
    gray: '#8F8F8F',
    grayDark: '#7D7D7D',
    grayXDark: '#252628',
    white: '#FFFFFF',
    black: '#212121',

    alpha: '80',
};

const messageColors = {
    greenLight: '#DAF1E3',
    green: '#37955B',
    greenDark: '#153822',
    ochreLight: '#FEF3CD',
    ochre: '#C99D03',
    ochreDark: '#4B3B01',
    wineRedLight: '#F8D3D7',
    wineRed: '#B21A2A',
    wineRedDark: '#430A10',
};

const themeColor = {
    skyBlueLight: '#b3c5ff',
    skyBlue: '#8aa6ff',
    skyBluDark: '#1a50ff',

    lavenderLight: '#eae6fe',
    lavender: '#b2a3fd',
    lavenderDark: '#6d50fb',

    bananaYellow: '#FFD446',
};

const color: BaseColor = {
    ...commonColors,

    grayXDarkTransparent: commonColors.grayXDark + 'a0',

    primary: themeColor.skyBlue,
    secondary: themeColor.lavender,
    callToAction: themeColor.bananaYellow,

    success: messageColors.green,
    alert: messageColors.wineRed,
    warning: messageColors.ochre,
    accessory: commonColors.black,

    neutral: commonColors.grayDark,
    disabled: commonColors.gray,
    background: commonColors.grayXLight,

    alpha: commonColors.alpha,
};

export const commonTheme: BaseTheme = {
    theme: 'common',
    border: {
        radius: '4px',
        radiusLarge: '8px',
        width: '1px',
        color: commonColors.grayLight,
    },
    color,
    button: {
        height: 48,
        smallHeight: 40,
        iconSize: 20,
    },
    fieldHeight: 50,
    animationDuration: 200,
    fontFamily: {
        primary: {
            bold: 'HelveticaNeue-Bold',
            medium: 'HelveticaNeue-Medium',
            regular: 'HelveticaNeue',
            italic: 'HelveticaNeue-Italic',
        },
        secondary: {
            regular: 'GillSans',
        },
    },
    fontSize: {
        xxSmall: '9px',
        xSmall: '12px',
        small: '14px',
        medium: '16px',
        large: '20px',
        xLarge: '24px',
    },
    iconSize: {
        small: 16,
        medium: 24,
        large: 32,
        xLarge: 44,
    },
    opacity: {
        active: 0.6,
        disabled: 0.5,
    },
    spacing: {
        xSmall: 4,
        small: 8,
        medium: 16,
        large: 20,
        xLarge: 24,
        gutter: 16,
        halfGutter: 8,
    },
};
