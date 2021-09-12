import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

// Translation provided by Vuetify (javascript)
import ja from '../assets/ja_extended';
import en from '../assets/en_extended';
import de from '../assets/de_extended';

var userLang = navigator.language || navigator.userLanguage || 'de';

if (userLang.includes("de")) {
  userLang = "de";
} else if (userLang.includes("en")) {
  userLang = "en";
} else if (userLang.includes("ja")) {
  userLang == "ja";
} else {
  userLang = "en";
}

export default new Vuetify({
    theme: { dark: true },
    lang: {
        locales: {ja, en, de},
        current: userLang
    }
});
