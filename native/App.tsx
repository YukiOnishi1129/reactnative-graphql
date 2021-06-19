/**
 * App.tsx
 */
import React from 'react'; /* providers */
import { GraphQLApolloProvider } from '@Provider/GraphQLApolloProvider';
/* contexts */
import { AppContextProvider } from '@Context/AppContext';
/* routes */
import { AppNavigator } from '@Route/index';

/**
 * App
 * @returns
 */
const App = (): JSX.Element => {
  return (
    <AppContextProvider>
      <GraphQLApolloProvider>
        <AppNavigator />
      </GraphQLApolloProvider>
    </AppContextProvider>
  );
};

export default App;
