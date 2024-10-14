const fs = require('fs');
const Handlebars = require('handlebars');
const path = require('path');
const fetch = require('node-fetch'); 

const gistUrl = 'https://gist.githubusercontent.com/grosjeanbaptiste/06b06d74ae3ae6d02dc1d6b018e54a75/raw/resume.json';

module.exports = {
  render: async function() {
    try {
      const response = await fetch(gistUrl);
      const resume = await response.json();
  
      const template = fs.readFileSync(path.join(__dirname, 'resume.hbs'), 'utf-8');
      const tpl = Handlebars.compile(template);
  
      const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
  
      return tpl({
        resume: resume,
        css: css
      });
    } catch (error) {
      console.error('Error fetching resume.json from Gist:', error);
      throw error;
    }
  }
};