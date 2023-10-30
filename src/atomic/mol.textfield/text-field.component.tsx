import * as React from 'react';
import {
    Animated,
    Easing,
    TextInput,
    TextInputSubmitEditingEventData,
    AccessibilityRole,
} from 'react-native';

import {
    TextFieldBorderStyled,
    TextFieldLoadingStyled,
    TextFieldLoadingWrapperStyled,
    TextFieldStyled,
    TextFieldStyledProps,
    TextFieldWrapperStyled,
} from './text-field.component.style';
import {TEST_IDS} from '../../app/utils/test.constants';

const POS_EMPTY = 1;
const POS_FILLED = 0;

export interface TextFieldCommonProps extends TextFieldStyledProps {
    initialValue?: string;
    onValueChange?: (value: string) => void;
    onSubmit: (text: string) => string;
    placeholder?: string;
    loading?: boolean;
    editable?: boolean;
    autoFocus?: boolean;
    testID?: string;
    onFocusChange?: (hasFocus: boolean) => void;
    children?: React.ReactNode;

    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessibilityRole?: AccessibilityRole;
}

export interface BaseTextFieldProps extends TextFieldCommonProps {
    minHeight?: number;
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}

export interface TextFieldState {
    focus: boolean;
    height: number;
    value: string;
}

export const TextField = React.forwardRef<TextInput, BaseTextFieldProps>(
    (props, ref) => {
        const [focus, setFocus] = React.useState(false);
        const [value, setValue] = React.useState(props.initialValue);

        const positionAnimValue = React.useRef<Animated.Value>(null);

        const {
            children,
            editable,
            placeholder,
            onSubmit,
            onValueChange,
            onFocusChange,
            accessibilityLabel,
            accessibilityHint,
            accessibilityRole,
            loading,
        } = props;

        const handleChangeText = (text: string) => {
            onValueChange?.(text);
            setValue(text);
        };

        const handleFocus = (toggleFocus: boolean) => () => {
            setFocus(toggleFocus);
            animate(toggleFocus);

            onFocusChange?.(toggleFocus);
        };

        const handleSubmit = (event: TextInputSubmitEditingEventData) => {
            onSubmit(event.text);
        };

        const animate = (toggleFocus: boolean) => {
            positionAnimValue.current &&
                Animated.timing(positionAnimValue.current, {
                    toValue: toggleFocus ? POS_FILLED : POS_EMPTY,
                    duration: 200,
                    easing: Easing.inOut(Easing.cubic),
                    useNativeDriver: false,
                }).start();
        };

        const position = positionAnimValue.current
            ? positionAnimValue.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '50%'],
              })
            : '50%';

        const sharedProps = {
            focus,
            onBlur: handleFocus(false),
            onFocus: handleFocus(true),
            placeholder: placeholder,
            editable: !loading && editable,
            ref,
        };

        return (
            <TextFieldWrapperStyled editable={editable} focus={focus}>
                <TextFieldStyled
                    {...sharedProps}
                    defaultValue={value}
                    onChangeText={handleChangeText}
                    onSubmitEditing={keyPressEvent =>
                        handleSubmit(keyPressEvent.nativeEvent)
                    }
                    accessibilityRole={accessibilityRole}
                    accessibilityHint={accessibilityHint}
                    accessibilityLabel={accessibilityLabel}
                    accessibilityState={{disabled: true}}
                />

                {!loading && children}

                <TextFieldBorderStyled
                    style={{left: position, right: position}}
                />
                {loading && (
                    <TextFieldLoadingWrapperStyled
                        accessibilityState={{
                            disabled: !editable,
                        }}
                        testID={TEST_IDS.LOADING}>
                        <TextFieldLoadingStyled />
                    </TextFieldLoadingWrapperStyled>
                )}
            </TextFieldWrapperStyled>
        );
    },
);

TextField.defaultProps = {
    editable: true,
    minHeight: 0,
};
