let folders = [
	'css',
	'js',
	'fonts',
];


if (process.env.FTP_SKIP_IMAGES == 0) {
	folders.push('images');
}