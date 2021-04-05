const fg = require("fast-glob");
const path = require("path");
const fs = require("fs");
module.exports = function () {
  return new Promise(async (resolve, reject) => {
    const iconFolder = path.resolve(__dirname, "../icons/");
    const svgIcons = await fg("**/*.svg", { cwd: iconFolder });
    const iconData = await Promise.all(
      svgIcons.map(async (name) => {
        const namePlain = path.parse(name).name;
        const source = fs.readFileSync(path.resolve(iconFolder, name), {
          encoding: "utf8",
        });
        return { name, source, namePlain };
      })
    );
    resolve(JSON.stringify(iconData));
  });
};