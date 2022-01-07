import Orbiton, { Component } from 'orbiton'
import * as styles from './styles/Card.module.scss'

export default class Card extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className={styles.card}>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
