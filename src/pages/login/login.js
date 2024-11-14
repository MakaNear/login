import loadComponent from "/src/helpers/loadComponent.js";
import { smoothScroll } from "/src/helpers/smoothScroll.js";
import { url } from "/src/helpers/urlConfig.js";
import fetchLogin from "/src/pages/login/fetchLogin.js";

export async function main() {
  const promise = loadComponent("", url.pages.login + "login.html");

  promise
    .then(() => {
      smoothScroll();
      fetchLogin();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
