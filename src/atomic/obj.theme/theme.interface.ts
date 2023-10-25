interface BaseBorder {
    radius: string;
    radiusLarge: string;
    width: string;
    color: string;
}

export interface BaseColor {
    primary: string;
    secondary: string;
    neutral: string;
    callToAction: string;
    success: string;
    alert: string;
    warning: string;
    accessory: string;

    disabled: string;
    background: string;

    grayXLight: string;
    grayLight: string;
    gray: string;
    grayDark: string;
    grayXDark: string;
    grayXDarkTransparent: string;

    white: string;
    black: string;

    alpha: string;
}

interface BaseFontSize {
    xxSmall: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
}

interface BaseFontFamily {
    primary: {
        regular: string;
        medium: string;
        bold: string;
        italic: string;
    };
    secondary: {
        regular: string;
    };
}

interface BaseIconSize {
    small: number;
    medium: number;
    large: number;
    xLarge: number;
}

interface BaseOpacity {
    active: number;
    disabled: number;
}

interface BaseSpacing {
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    gutter: number;
    halfGutter: number;
}

interface BaseButton {
    height: number;
    smallHeight: number;
    iconSize: number;
}

export interface BaseTheme {
    theme: string;
    color: BaseColor;
    border: BaseBorder;
    button: BaseButton;
    fieldHeight: number;
    fontFamily: BaseFontFamily;
    fontSize: BaseFontSize;
    iconSize: BaseIconSize;
    opacity: BaseOpacity;
    spacing: BaseSpacing;
}

export interface ThemeProps {
    theme?: BaseTheme;
}
