const fs = require('fs-extra');

function copy(type) {
  const source = `dist/libs/${type}`;
  const destination = `publish/${type}`;

  fs.copy(source, destination, function (err) {
    if (err) return console.error(err);
  });
}

copy('angular');
copy('react');
