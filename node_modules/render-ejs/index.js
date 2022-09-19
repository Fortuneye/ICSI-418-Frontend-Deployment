"use strict";

const fs   = require("fs");
const path = require("path");
const ejs  = require("ejs");

exports.render = (json,template,file) => {
  const data = JSON.parse(json);

  ejs.renderFile(template, data, {}, (err, content) => {
    if(err) {
      console.log(err);
    } else {
      mkdirp(path.dirname(file));
      fs.writeFile(file, content, (err) => {
        if(err) {
          console.log(err);
        }
      });
    }
  });
};

const mkdirp = (dir) => {
  if (fs.existsSync(dir)) {
    return;
  }

  const parent_dir = path.dirname(dir);

  if (dir == parent_dir) {
    return;
  }

  if (!fs.existsSync(parent_dir)) {
    mkdirp(parent_dir);
  }

  fs.mkdirSync(dir);
}
