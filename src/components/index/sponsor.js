import Orbiton from 'orbiton';
import { Favorite, Star } from '../shared/Icons.jsx';
import * as styles from './styles/sponsor.module.scss';

export class Actions extends Orbiton.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className={styles.calltoaction}>
        <div>
          <h2>Show your love to Orbiton JS</h2>
        </div>
        <div className={styles.cover} >
          <div className={styles.card}>
            <div className={styles.icon}>
              <a href="https://github.com/Orbitonjs/orbiton" target="_blank" rel="noopener noreferrer">
                <Star />
              </a>
            </div>
            <div className="icon">Star the project on Github</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <a href="/">
                <Favorite />
              </a>
            </div>
            <div className="icon">Sponsor This Project</div>
          </div>
        </div>
      </div>
    )
  }
}
