const fs = require('fs-extra');
const { join } = require('path');

const start = async () => {
	const args = process.argv;

	if (args.length < 3) {
		console.error('please provide project name like this: npm run create-project YOUR-TITLE');
		return;
	}

	const title = args[2].trim();

	const titleFormatted = title.toLocaleLowerCase();

	const TEMPLATE_FOLDER = join(__dirname, 'src', 'res', 'project-template');
	console.log(TEMPLATE_FOLDER);
	const date = new Date();

	const y = date.getFullYear().toString().slice(2);
	const m = (date.getMonth() + 1).toString().padStart(2, '0');
	const projectName = `${y}${m}-${titleFormatted}`;
	console.log(`🐥 creating new post: ${projectName}`);

	/* await fs.mkdir(join(__dirname, 'src', 'routes', 'articles', projectName)); */
	const assetFolder = join(__dirname, 'static', projectName);
	const articlePath = join(__dirname, 'src', 'routes', 'articles', `${projectName}.svx`);
	console.log(`📦 creating asset folder at: ${assetFolder}`);

	try {
		await fs.mkdir(assetFolder);
		await fs.copyFile(join(TEMPLATE_FOLDER, 'cover.jpeg'), join(assetFolder, 'cover.jpeg'));
	} catch (e) {
		console.error(`ERROR! directory ${assetFolder} already exists!`);
		return;
	}

	try {
		const templateFile = (
			await fs.readFile(join(__dirname, 'src', 'res', 'project-template', 'POST-TEMPLATE.svx'), {
				encoding: 'utf-8'
			})
		)
			.replace('$POST_FOLDER', projectName)
			.replaceAll('$POST_TITLE', title.replaceAll('-', ' '));

		await fs.writeFile(articlePath, templateFile);
	} catch (e) {
		console.error(`ERROR! directory ${assetFolder} already exists!`);
		return;
	}

	console.log('🥳 done!');
};

start();
