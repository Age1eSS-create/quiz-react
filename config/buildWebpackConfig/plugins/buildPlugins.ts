import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
    DefinePlugin, HotModuleReplacementPlugin,
    ProgressPlugin, type WebpackPluginInstance } from 'webpack';

import { type BuildOptions } from '../types/config';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const { paths, isDev, url, apiUrl } = options;

    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash:10].css',
            chunkFilename: 'css/style.[contenthash:10].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __URL__: JSON.stringify(url),
            __API__: JSON.stringify(apiUrl),
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.favicon, to: paths.build },
                { from: paths.assets, to: paths.buildAssets },
            ],
        }),
        new HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ];
}
