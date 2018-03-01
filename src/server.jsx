import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { App } from './shared/app';

const app = express();

app.use(express.static('build'));

function getFileContent(fileName) {
  const templatePath = path.resolve(process.cwd(), fileName);

  if (!fs.existsSync(templatePath)) {
    console.error(`Can not read the ${fileName} file`); // eslint-disable-line no-console
  }

  return fs.readFileSync(templatePath, 'utf8');
}

const template = getFileContent('build/index.html');

app.get('*', (req, res) => {
  const body = renderToString((
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  ));

  res.send(template.replace('<!--APP-->', `${body}`));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening'); // eslint-disable-line no-console
});
