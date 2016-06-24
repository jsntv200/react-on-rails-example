import ReactOnRails from 'react-on-rails';
import HelloWorld from './modules/HelloWorld';
import HelloWorldApp from './modules/HelloWorldRedux';

// Register each component with ReactOnRails
ReactOnRails.register({ HelloWorld, HelloWorldApp });
