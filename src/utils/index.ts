/* eslint-disable camelcase */
import {
    RawToken,
    RawTokenValue,
    Raw_Token_border,
    Raw_Token_boxShadow,
    Raw_Token_typography,
    TokenType
} from '../graphqlTypes';
import {
    SingleBorderToken,
    SingleBoxShadowToken,
    SingleToken,
    SingleTypographyToken,
    TokenTypes
} from '@tokens-studio/types';
import { removeNullProperties } from './removeNullProps';

export interface ResolvedToken {
    name: string;
    type: TokenTypes;
    value: RawTokenValue;
    description?: string;
    extensions?: string;
}

const parseValue = (value: string | undefined | null) => {
    if (!value) {
        return undefined;
    }

    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};

export const rawTokenToSingleToken = (
    token: RawToken | ResolvedToken
): SingleToken => {
    if (!token || !token.type) {
        throw new Error(`Invalid token "${token}"`);
    }

    switch (token.type) {
        case TokenType.boxShadow: {
            const boxShadowToken = token.value as Raw_Token_boxShadow;
            return {
                type: TokenTypes.BOX_SHADOW,
                name: token?.name,
                description: token?.description,
                value:
                    boxShadowToken?.value ||
                    removeNullProperties(boxShadowToken?.boxShadow)
            } as SingleBoxShadowToken;
        }
        case TokenType.border: {
            const borderToken = token.value as Raw_Token_border;
            return {
                type: TokenTypes.BORDER,
                name: token?.name,
                description: token?.description,
                value:
                    borderToken?.value ||
                    removeNullProperties(borderToken?.border)
            } as SingleBorderToken;
        }
        case TokenType.typography: {
            const typographyToken = token.value as Raw_Token_typography;
            return {
                type: TokenTypes.TYPOGRAPHY,
                name: token?.name,
                description: token?.description,
                value:
                    typographyToken?.value ||
                    removeNullProperties(typographyToken?.typography)
            } as SingleTypographyToken;
        }
        default:
            return {
                type: token?.type as unknown as TokenTypes,
                name: token?.name,
                description: token?.description,
                value: parseValue(token?.value?.value),
                $extensions: JSON.parse(token?.extensions || 'null')
            } as SingleToken;
    }
};
