const fs = require('fs-extra');

const publishDirectory = 'publish';
const libsDirectory = 'libs';
const distDirectory = 'dist';
const packages = ['angular', 'react', 'core'];

// Delete existing publish directory
if (fs.existsSync(publishDirectory)) {
  fs.rmdirSync(publishDirectory, { recursive: true });
}

// Make publish directory
fs.mkdirSync(publishDirectory);

// Move artifacts
const artifactsSource = `${distDirectory}/${libsDirectory}`;
const artifactsDestination = `${publishDirectory}`;
fs.copy(artifactsSource, artifactsDestination, function () {
  for (const package of packages) {
    copyPackageJson(package);
  }
});

// Copy package json
const copyPackageJson = (package) => {
  const fileName = 'package.json';
  fs.copyFile(
    `${libsDirectory}/${package}/${fileName}`,
    `${publishDirectory}/${package}/${fileName}`
  );
};
