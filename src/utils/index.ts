/* eslint-disable camelcase */
import {
    RawToken,
    RawTokenValue,
    Raw_Token_border,
    Raw_Token_boxShadow,
    Raw_Token_typography,
    ResolvedToken,
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

export interface ReifiedResolvedToken {
    name: string;
    type: TokenTypes;
    value: RawTokenValue;
    description?: string;
    $extensions?: string;
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

    const extend = {
        name: token?.name,
        description: token?.description,
        $extensions: JSON.parse((token as RawToken).extensions || 'null')
    };

    switch (token.type) {
        case TokenType.boxShadow: {
            const boxShadowToken = token.value as Raw_Token_boxShadow;
            return {
                type: TokenTypes.BOX_SHADOW,

                value:
                    boxShadowToken?.value ||
                    removeNullProperties(boxShadowToken?.boxShadow),
                ...extend
            } as SingleBoxShadowToken;
        }
        case TokenType.border: {
            const borderToken = token.value as Raw_Token_border;
            return {
                type: TokenTypes.BORDER,
                value:
                    borderToken?.value ||
                    removeNullProperties(borderToken?.border),
                ...extend
            } as SingleBorderToken;
        }
        case TokenType.typography: {
            const typographyToken = token.value as Raw_Token_typography;
            return {
                type: TokenTypes.TYPOGRAPHY,
                value:
                    typographyToken?.value ||
                    removeNullProperties(typographyToken?.typography),
                ...extend
            } as SingleTypographyToken;
        }
        default:
            return {
                type: token?.type as unknown as TokenTypes,
                value: parseValue(token?.value?.value),
                ...extend
            } as SingleToken;
    }
};
