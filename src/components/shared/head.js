import Orbiton, { Component } from 'orbiton'

export default class Head extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  Mounted() {
    console.log(document.title)
    document.title = this.props.title
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('SW registered: ', registration);
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
