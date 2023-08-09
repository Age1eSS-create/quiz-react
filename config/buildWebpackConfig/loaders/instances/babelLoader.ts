import { PluginItem } from '@babel/core';

import { BuildOptions } from '../../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function createBabelLoader(options: BuildBabelLoaderProps) {
    const { isTsx } = options;

    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && [
                        {
                            visitor: {
                                Program(path, state) {
                                    const forbidden = state.opts.props || [];

                                    path.traverse({
                                        JSXIdentifier(current) {
                                            const nodeName = current.node.name;

                                            if (forbidden.includes(nodeName)) {
                                                current.parentPath.remove();
                                            }
                                        },
                                    });
                                },
                            },
                        } as PluginItem,
                        {
                            props: ['data-testid'],
                        },
                    ],
                ].filter(Boolean),
            },
        },
    };
}
