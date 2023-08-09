import type { RuleSetRule } from 'webpack';

import { type BuildOptions } from '../types/config';
import { createBabelLoader } from './instances/babelLoader';
import { createCssLoader } from './instances/cssLoader';
import { createFileLoader } from './instances/fileLoader';
import { createSvgLoader } from './instances/svgLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule {
    const { isDev } = options;

    const fileLoader = createFileLoader();

    const svgLoader = createSvgLoader();

    const codeBabelLoader = createBabelLoader({ ...options, isTsx: false });

    const tsxCodebabelLoader = createBabelLoader({ ...options, isTsx: true });

    const cssLoader = createCssLoader(isDev);

    return {
        rules: [
            fileLoader,
            svgLoader,
            codeBabelLoader,
            tsxCodebabelLoader,
            cssLoader,
        ],
    };
}
