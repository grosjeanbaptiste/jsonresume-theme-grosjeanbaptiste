const fs = require('fs');
const Handlebars = require('handlebars');
Handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});
const path = require('path');

module.exports = {
  render: function(resume) {
    const template = fs.readFileSync(path.join(__dirname, 'resume.hbs'), 'utf-8');
    const tpl = Handlebars.compile(template);

    const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');

    return tpl({
      resume: resume,
      css: css
    });
  }
};