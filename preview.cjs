const fs = require('fs');
const ts = require('typescript');
require.extensions['.tsx'] = require.extensions['.ts'] = function(m, filename) {
  const raw = fs.readFileSync(filename, 'utf8');
  const js = ts.transpileModule(raw, {compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText;
  m._compile(js, filename);
};
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('./app/page.tsx').default;
const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Home));
fs.writeFileSync('/mnt/data/timeline-isa-mejorado/preview.html', `<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="./app/globals.css"></head><body>${html}</body></html>`);
console.log('generated',html.length,'bytes');
