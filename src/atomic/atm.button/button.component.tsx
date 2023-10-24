import * as React from 'react';

import {ImageSourcePropType} from 'react-native';

import {
    ButtonColorProps,
    ButtonContentStyled,
    ButtonSpinnerStyled,
    ButtonSpinnerWrapperStyled,
    ButtonStyled,
    ButtonStyledProps,
    ButtonTextStyled,
    ButtonThumbStyled,
    ButtonTouchableOpacityStyled,
} from './button.component.style';
import {TEST_IDS} from '../../app/utils/test.constants';

interface ButtonProps extends ButtonStyledProps {
    onTap?: () => void;
    text?: string;
    image?: ImageSourcePropType;
    testID?: string;
    accessibilityHint?: string;
}

type ButtonBaseProps = ButtonColorProps & ButtonProps;

export const ButtonBase: React.FC<ButtonBaseProps> = props => {
    const {
        variant,
        outlined,
        disabled,
        loading,
        expanded,
        testID,
        text,
        accessibilityHint,
    } = props;

    return (
        <ButtonStyled expanded={expanded} disabled={disabled} loading={loading}>
            <ButtonTouchableOpacityStyled
                onPress={props.onTap}
                disabled={loading || disabled}
                variant={variant}
                outlined={outlined}
                expanded={expanded}
                testID={testID}
                accessibilityLabel={text}
                accessibilityHint={accessibilityHint}>
                <ButtonContentStyled loading={loading}>
                    {props.image && (
                        <ButtonThumbStyled
                            source={props.image}
                            variant={variant}
                            outlined={outlined}
                        />
                    )}
                    {props.text && (
                        <ButtonTextStyled variant={variant} outlined={outlined}>
                            {props.text}
                        </ButtonTextStyled>
                    )}
                </ButtonContentStyled>
                {loading && (
                    <ButtonSpinnerWrapperStyled
                        testID={TEST_IDS.LOADING}
                        accessibilityState={{busy: true}}>
                        <ButtonSpinnerStyled
                            buttonVariant={variant}
                            outlined={outlined}
                        />
                    </ButtonSpinnerWrapperStyled>
                )}
            </ButtonTouchableOpacityStyled>
        </ButtonStyled>
    );
};

export const Button = {
    Primary: (props: ButtonProps) => (
        <ButtonBase variant="primary" expanded {...props} />
    ),
    Secondary: (props: ButtonProps) => (
        <ButtonBase variant="secondary" outlined expanded {...props} />
    ),
    Alert: (props: ButtonProps) => (
        <ButtonBase variant="alert" expanded {...props} />
    ),
    AlertOutline: (props: ButtonProps) => (
        <ButtonBase variant="alert" outlined expanded {...props} />
    ),
    Success: (props: ButtonProps) => (
        <ButtonBase variant="success" expanded {...props} />
    ),
    CallToAction: (props: ButtonProps) => (
        <ButtonBase variant="callToAction" expanded {...props} />
    ),
};
