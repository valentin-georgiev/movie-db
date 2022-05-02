/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "scss")],
		prependData: `@import "styles/variables"; @import "styles/mixins/breakpoints.scss";`,
	},
};
