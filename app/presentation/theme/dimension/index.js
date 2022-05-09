import {PixelRatio} from 'react-native';

const spacingSize = {
    Min: 1 / PixelRatio.get(),
    Tiny: 4,
    Small: 8,
    Medium: 16,
    Large: 20,
    Huge: 24,
};

const fontSize = {
    Tiny: 10,
    Small: 12,
    Medium: 14,
    Large: 18,
    Huge: 24,
};

export default {
    Spacing: spacingSize,
    Font: fontSize,
}
