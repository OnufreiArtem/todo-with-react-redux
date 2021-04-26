import React from 'react';
import styled from 'styled-components';

import Todo from './components/Todo/Todo'

const AppLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`

function App() {
  return (
    <AppLayout>
      <Todo />
    </AppLayout>
  );
}

export default App;
