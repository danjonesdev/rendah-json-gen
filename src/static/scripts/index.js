/**
 * The module `Example` is specific to the Front documentation,
 * others can be added or removed if required
 */
import jsonGen from './modules/jsonGen';

class App {
  constructor() {
    this.gaId = 'UA-123456-78';
    this.hostname = 'domain.com';
    this.modules = [jsonGen];

    document.documentElement.className = 'js';

    // init all necessary modules
    this.modules.forEach(module => {
      module.init();
    });

    // uncomment to load ga
    // this.loadAnalytics();
  }

  loadAnalytics() {
    if (!this.gaId) {
      throw new Error('App missing gaId');
    }

    /* eslint-disable */
    if (
      window.location.hostname === this.hostname ||
      window.location.hostname === `www.${this.hostname}`
    ) {
      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        (i[r] =
          i[r] ||
          function() {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        'script',
        'https://www.google-analytics.com/analytics.js',
        'ga'
      );

      ga('create', this.gaId, 'auto');
      ga('send', 'pageview');
    }
    /* eslint-enable */
  }
}

window.addEventListener('load', () => new App());
