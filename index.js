import ReactDOM from 'react-dom';
import Routes from './src/common/components/Routes/Routes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(Routes, document.getElementById('content'));
