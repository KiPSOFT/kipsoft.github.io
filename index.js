function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("counter", async () => {
    const template = `<div>
                    <p class="container">{{ date }}</p>
                    <p class="container">{{ vaccineCount }}</p>
                    <p class="container smalltext">Son güncellenme zamanı: {{ lastUpdate }}</p>
                   </div>`;
    try {
      const result = await fetch("data.json");
      const data = await result.json();
      const today = new Date().toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "2-digit",
        day: "numeric",
      });
      const val = {
        date: today,
        vaccineCount: numberWithCommas(
          data[today].lastTotal - data[today].firstTotal
        ),
        lastUpdate: data[today].lastUpdate ? data[today].lastUpdate : '23:59:59'
      };
      return {
        template,
        data: (_) => {
          return val;
        },
      };
    } catch (err) {
      console.log(err);
    }
  });
  new Vue({
    el: "#app",
  });
});

window.onload = () => {
  const userPrefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const bodyElement = document.querySelector('body');
  const darkModeButton = document.querySelector('#toggleDarkMode');
  bodyElement.className = userPrefersDarkScheme ? "dark" : "light"
  darkModeButton.addEventListener('click', () => {
    bodyElement.className  = bodyElement.className === 'dark' ? 'light' : 'dark'
  })
}