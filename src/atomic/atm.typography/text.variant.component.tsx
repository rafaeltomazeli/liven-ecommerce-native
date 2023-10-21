import {ThemeProps} from '@atomic/obj.theme';

type TextVariantType = 'alert' | 'success' | 'disabled' | 'white';

export interface TextProps {
    variant?: TextVariantType;
    center?: boolean;
}

export const TextVariant: (
    props: ThemeProps,
) => Record<TextVariantType, string> = props => ({
    success: props.theme?.color.success || 'green',
    alert: props.theme?.color.alert || 'red',
    disabled: props.theme?.color.gray || 'light-gray',
    white: props.theme?.color.white || 'white',
});
