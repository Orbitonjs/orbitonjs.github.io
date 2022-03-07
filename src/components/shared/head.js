import Orbiton, { Component } from 'orbiton';
import docsearch from '@docsearch/js';

import '@docsearch/css';






export default class Head extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  Mounted() {
    // Set document title
    document.title = this.props.title
    // Register Service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('SW registered: ', registration);
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
    // Themeing
    if (localStorage.getItem("theme") !== null) {
      const theme = localStorage.getItem("theme")
      if (theme === "dark") {
        document.body.toggleAttribute("dark-theme")
      }
    } else {
      try {
        const darkTheme = window.matchMedia("(prefers-color-scheme: dark)")
        if (darkTheme.matches) {
          document.body.toggleAttribute("dark-theme")
        }
      } catch (error) {
        //
      }
    }

    // Docsearch
    try {


      docsearch({
        appId: '27A363TJDY',
        apiKey: '79a92848adba4c7a969a1a4550078ad5',
        indexName: 'orbiton-js',
        container: '#docsearch',
        placeholder: "Search the Docs",
        debug: false // Set debug to true if you want to inspect the modal
      });
    }
    catch (err) { }
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
