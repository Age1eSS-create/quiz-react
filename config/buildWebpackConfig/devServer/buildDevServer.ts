import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { type BuildOptions } from '../types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
