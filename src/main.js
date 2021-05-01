import Vue from "vue";
import App from "./App.vue";


document.addEventListener("DOMContentLoaded", function () {  
  new Vue({
    render: h => h(App)
  }).$mount('#app');
});

window.onload = () => {
  const userPrefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const bodyElement = document.querySelector('body');
  const darkModeButton = document.querySelector('#toggleDarkMode');
  if (window.localStorage) {
    const theme = localStorage.getItem('covid19-asi-sayilari-site-theme');
    if (theme) {
      bodyElement.className = theme;
    } else {
      bodyElement.className = userPrefersDarkScheme ? "dark" : "light";  
    }
  } else {
    bodyElement.className = userPrefersDarkScheme ? "dark" : "light";
  }
  darkModeButton.addEventListener('click', () => {
    if (window.localStorage) {
      localStorage.setItem('covid19-asi-sayilari-site-theme', bodyElement.className === 'dark' ? 'light' : 'dark');
    }
    bodyElement.className  = bodyElement.className === 'dark' ? 'light' : 'dark'
  })
}