import React from 'react';
declare const StyledInput: import("@stitches/react/types/styled-component").StyledComponent<"input", {}, {
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, import("@stitches/react/types/css-util").CSS<{
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, {
    colors: {
        background: string;
        title: string;
        text: string;
        'brand-primary-up': string;
        'brand-primary-pure': string;
        'brand-primary-deep': string;
        'brand-highlight-02': string;
        'brand-highlight-03': string;
        'brand-highlight-04': string;
        'neutral-light-pure': string;
        'neutral-light-deep': string;
        'neutral-dark-down': string;
        'status-error': string;
    };
    space: {
        '0': string;
        px: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        '14': string;
        '15': string;
        '16': string;
        '17': string;
        '18': string;
        '19': string;
        '20': string;
        full: string;
        auto: string;
    };
    fonts: {
        heading: string;
        primary: string;
    };
    borderWidths: {
        thin: string;
        medium: string;
        thick: string;
        heavy: string;
    };
    fontSizes: {
        10: string;
        12: string;
        14: string;
        16: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    radii: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
    opacity: {
        default: string;
        semiOpaque: string;
        intense: string;
        medium: string;
        light: string;
        semiTransparent: string;
        transparent: string;
    };
    zIndices: {
        overlay: number;
        modal: number;
    };
    shadows: {
        inputNormal: string;
    };
}, {
    width: "space";
    height: "space";
    opacity: "opacity";
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    py: (value: {
        readonly [$$ScaleValue]: "space";
    }) => {
        paddingTop: {
            readonly [$$ScaleValue]: "space";
        };
        paddingBottom: {
            readonly [$$ScaleValue]: "space";
        };
    };
    px: (value: {
        readonly [$$ScaleValue]: "space";
    }) => {
        paddingLeft: {
            readonly [$$ScaleValue]: "space";
        };
        paddingRight: {
            readonly [$$ScaleValue]: "space";
        };
    };
    my: (value: {
        readonly [$$ScaleValue]: "space";
    }) => {
        marginTop: {
            readonly [$$ScaleValue]: "space";
        };
        marginBottom: {
            readonly [$$ScaleValue]: "space";
        };
    };
    mx: (value: {
        readonly [$$ScaleValue]: "space";
    }) => {
        marginLeft: {
            readonly [$$ScaleValue]: "space";
        };
        marginRight: {
            readonly [$$ScaleValue]: "space";
        };
    };
}>>;
export declare type TextFieldProps = React.ComponentProps<typeof StyledInput> & {};
export declare const TextField: ({ ...props }: TextFieldProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map