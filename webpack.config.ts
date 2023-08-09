import * as path from 'path';

import { buildWebpackConfig } from './config/buildWebpackConfig/buildWebpackConfig';
import { type BuildEnv, type BuildMode, type BuildPaths } from './config/buildWebpackConfig/types/config';

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || 'development';
    const port = env.port || 3000;
    const url = env.url || '';

    const apiUrl = `${url}/api`;

    const isDev = mode === 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        buildAssets: path.resolve(__dirname, 'build', 'assets'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        assets: path.resolve(__dirname, 'src', 'shared', 'assets'),
    };

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        url,
        apiUrl,
    });
};
