import '@polymer/polymer/polymer-legacy.js';
import './iron-doc-viewer-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="iron-doc-viewer-styles">
      :host {
        display: flex;
      }

      iframe {
        flex-grow: 1;
        height: 100%;
        border: none;
      }
    </style>

    <h1>[[title]]</h1>

    <iframe src\$="[[srcPrefix]][[demo.url]]"></iframe>
`,

  is: 'iron-doc-demo',

  properties: {
    demo: Object,

    srcPrefix: {
      type: String,
      value: ''
    },

    title: {
      computed: '_computeTitle(demo)',
      notify: true
    }
  },

  _computeTitle: function(demo) {
    return 'Demo ' + (demo.description || demo.url);
  }
});
