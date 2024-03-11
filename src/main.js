import './assets/style.css';

import { createApp } from 'vue'

import App from './App.vue'
import AdvantageVue from './components/Advantage.vue';
import AgencyVue from './components/Agency.vue';
import CoreFeatureVue from './components/CoreFeature.vue';
import NewLetterVue from './components/NewLetter.vue';
import OurProjectVue from './components/OurProject.vue';
import ClientSayVue from './components/ClientSay.vue'
import BlogVue from './components/Blog.vue';
import NavMenuVue from './components/NavMenu.vue'

const app = createApp(App);
app.component("advantage",AdvantageVue);
app.component("agency", AgencyVue);
app.component("core-feature", CoreFeatureVue);
app.component("new-letter", NewLetterVue);
app.component("our-project", OurProjectVue);
app.component("client-say", ClientSayVue);
app.component("blog", BlogVue);
app.component("nav-menu", NavMenuVue);

app.mount("#app")


