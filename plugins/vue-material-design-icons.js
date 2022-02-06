import Vue from 'vue';

import Account from 'vue-material-design-icons/Account.vue';
import Feather from 'vue-material-design-icons/Feather.vue';
import Map from 'vue-material-design-icons/Map.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Email from 'vue-material-design-icons/EmailOutline.vue';
import Web from 'vue-material-design-icons/Web.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Heart from 'vue-material-design-icons/CardsHeart.vue';
import Eye from 'vue-material-design-icons/Eye.vue';
import Dowload from 'vue-material-design-icons/ArrowCollapseDown.vue';

export default function materialIcons() {
  Vue.component('AccountMdi', Account);
  Vue.component('FeatherMdi', Feather);
  Vue.component('MapMdi', Map);
  Vue.component('PhoneMdi', Phone);
  Vue.component('EmailMdi', Email);
  Vue.component('WebMdi', Web);
  Vue.component('FacebookMdi', Facebook);
  Vue.component('TwitterMdi', Twitter);
  Vue.component('InstagramMdi', Instagram);
  Vue.component('GithubMdi', Github);
  Vue.component('CardsHeartMdi', Heart);
  Vue.component('EyeMdi', Eye);
  Vue.component('ArrowCollapseDownMdi', Dowload);
}


