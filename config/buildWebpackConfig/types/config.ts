export type BuildMode = 'development' | 'production';

export type BuildPaths = {
	entry: string;
	build: string;
	buildAssets: string;
	html: string;
	src: string;
	favicon: string;
	assets: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	url: string;
	apiUrl: string;
};

export type BuildEnv = {
	mode: BuildMode;
	port: number;
	url?: string;
	wsUrl?: string;
};
