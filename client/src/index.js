import ReactOnRails from 'react-on-rails';

// Require all modules
import HelloWorld from './modules/HelloWorld';
import HelloWorldApp from './modules/HelloWorldRedux';

// Register each module so it'a available for the react_component helper
ReactOnRails.register({
  HelloWorld,
  HelloWorldApp
});
