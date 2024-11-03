story.js: sprezzatura.ink.json
	echo -n 'var storyContent = ' > story.js
	cat sprezzatura.ink.json >> story.js

sprezzatura.ink.json: sprezzatura.ink
	inklecate sprezzatura.ink
