import { connect } from 'react-redux' /*connect to store*/
import App from '../components/App/App'; /*import component in which we want to path state and action*/



export default connect()(App);