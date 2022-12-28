import { useReducer, useRef } from "react";
import { Button, Text, TextInput, View } from "react-native";

const initState = {
  name: "",
  products: []
}
const SET_NAME = 'set_name';
const ADD_ACTION = 'add';
const DELETE_ACTION = 'delete';

const setName = payload => {
  return {
    type: SET_NAME,
    payload
  }
}
const addAction = payload => {
  return {
    type: ADD_ACTION,
    payload
  }
}
const deleteAction = payload => {
  return {
    type: DELETE_ACTION,
    payload
  }
}

const reducer = (state, actions) => {
  console.log("Actions: ", actions);
  console.log("Pre state: ", state);

  let newState;

  switch (actions.type) {
    case SET_NAME:
      newState = {
        ...state,
        name: actions.payload
      }
      break;
    case ADD_ACTION:
      newState = {
        ...state,
        products: [...state.products, actions.payload]
      }
      break;
    case DELETE_ACTION:
      const newJobs = [...state.products];
      newJobs.splice(actions.payload, 1)
      newState = {
        ...state,
        products: newJobs
      }
      break;
    default:
      throw new Error("Invalid action.")
  }

  console.log("New state: ", state)

  return newState

}
const Main = () => {

  const [state, dispatch] = useReducer(reducer, initState);
  const nameRef = useRef();
  // console.log(state)
  const { name, products } = state;
  console.log(products)
  // console.log(setName())
  const handleAdd = () => {
    dispatch(addAction(name))
    dispatch(setName(' '));
    nameRef.current.focus()

  }
  const handleDelete = (index) => {
    dispatch(deleteAction(index))
  }
  // console.log(handleAdd())
  return (
    <View>
      <Text style={{ fontSize: 22 }}>TODO</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, fontSize: 15, padding: 10 }}
        ref={nameRef}
        placeholder="Enter input..."
        value={name}
        onChange={(e) => { dispatch(setName(e.target.value)) }}
      />
      <Button title="Add" color="black" onPress={handleAdd} />
      {products.map(function (product, index) {
        return (
          <View key={index} style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
            <Text style={{ fontSize: 30 }}>{product} </Text>
            <Button title="Delete" color="black" onPress={() => { handleDelete(index) }} />
          </View>
        )
      })}
    </View>
  )
}
export default Main