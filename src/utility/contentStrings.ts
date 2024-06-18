// export const cssStrings = {
//     pColorRed: 'p { color: red; }',
//     border: '.example-box.with-border { border: 2px solid #333; }',
// }

// export const outputStrings = {
//     pColorRed: 'This text is red.',
//     borderNo: 'No Border',
//     borderYes: 'With Border',
// }

// export const propertyStrings = {
//     color: 'color',
//     border: 'border',
// }

// export const descriptionStrings = {
//     pColorRed: 'Sets the color of the text.',
//     border: 'Compares an element with and without the border property.',
// }

export const tileStrings = {
    color: {
        property: 'color',
        description: 'Sets the color of the text.',
        css: 'p { color: red; }',
        output: {
            text1: 'This text is red.',
            text2: undefined,
        }
    },
    border: {
        property: 'border',
        description: 'Compares an element with and without the border property.',
        css: '.example-box.with-border { border: 2px solid #333; }',
        output: {
            text1: 'No Border',
            text2: 'With Border',
        }
    },
}