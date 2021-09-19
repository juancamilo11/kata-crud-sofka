import React, { useContext } from 'react';

const HOST_API = "http://localhost:8080/api";

const initialState = {
  list: []
};

const Store = createContext(initialState)

const List = () => {

  const {dispatch, state} = useContext(Store);

  return <div>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nombre</td>
          <td>¿Esta completada?</td>
        </tr>
      </thead>
      <tbody>
        {state.list.map((todo) => {
          return <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.name}</td>
          <td>{todo.isCompleted}</td>  
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

function App() {
  return <div></div>
}

export default App;