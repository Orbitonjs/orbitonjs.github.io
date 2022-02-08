import Orbiton, { Component } from 'orbiton'

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
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
