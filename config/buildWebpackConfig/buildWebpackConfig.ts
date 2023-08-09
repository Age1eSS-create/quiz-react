import type { Configuration } from 'webpack';

import { buildDevServer } from './devServer/buildDevServer';
import { buildLoaders } from './loaders/buildLoaders';
import { buildPlugins } from './plugins/buildPlugins';
import { buildResolvers } from './resolvers/buildResolvers';
import { type BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        entry: paths.entry,
        module: buildLoaders(options),
        resolve: buildResolvers(options),
        output: {
            path: paths.build,
            filename: '[name].[contenthash:8].js',
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
    };
}
