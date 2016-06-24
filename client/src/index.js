import ReactOnRails from 'react-on-rails';

// Require all modules
import HelloWorld from './modules/HelloWorld';
import HelloWorldApp from './modules/HelloWorldRedux';

// Register each module with ReactOnRails
ReactOnRails.register({
  HelloWorld,
  HelloWorldApp
});
