//lib call
import { folderPath } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

export const backend = {
  login:
    "https://asia-southeast2-awangga.cloudfunctions.net/jualin/auth/login/form",
};

export const croot = folderPath() + "src/";

export const folder = {
  pages: croot + "pages/",
  helpers: croot + "helpers/",
};

export const url = {
  pages: {
    login: folder.pages + "login/",
  },
};
