import '@polymer/polymer/polymer-legacy.js';
import '@polymer/marked-element/marked-element.js';
import '@polymer/prism-element/prism-highlighter.js';
import '@polymer/prism-element/prism-theme-default.js';
import './iron-doc-api.js';
import './iron-doc-function.js';
import './iron-doc-property.js';
import { IronDocViewerBehavior } from './iron-doc-viewer-behavior.js';
import './iron-doc-viewer-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="iron-doc-viewer-styles prism-theme-default">
      :host {
        @apply --iron-doc-docs;
      }
    </style>

    <prism-highlighter></prism-highlighter>

    <h1>Behavior [[descriptor.name]]</h1>
    <p hidden\$="[[!descriptor.summary]]">[[descriptor.summary]]</p>

    <div>Path: <code>[[descriptor.path]]</code></div>

    <div hidden\$="[[!descriptor.mixins]]">Mixins:
      <span>
        <template is="dom-repeat" items="[[descriptor.mixins]]" sort="_compareDescriptors"><!--
       --><span hidden\$="[[!index]]">, </span>
          <a class="name deeplink mixin" href\$="[[baseHref]]/mixins/[[item]]">[[item]]</a><!--
     --></template>
      </span>
    </div>

    <section id="description" hidden\$="[[!descriptor.description]]" anchor-id\$="[[fragmentPrefix]]description">
      <h2>
        <a href\$="#[[fragmentPrefix]]description" class="deeplink">Description</a>
      </h2>

      <marked-element sanitize="" markdown="[[descriptor.description]]">
        <div slot="markdown-html" class="markdown-html"></div>
      </marked-element>
    </section>

    <iron-doc-api descriptor="[[descriptor]]" fragment-prefix="[[fragmentPrefix]]">
    </iron-doc-api>
`,

  is: 'iron-doc-behavior',
  behaviors: [IronDocViewerBehavior],

  properties: {
    title: {
      computed: '_computeTitle(descriptor)',
      notify: true
    }
  },

  _computeTitle: function(descriptor) {
    return descriptor && 'Behavior ' + descriptor.name;
  }
});
