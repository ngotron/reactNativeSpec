import { useMemo, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

/*
1. useMemo tránh thực hiện lại một logic ko cần thiết => Sử dụng trong một hook 

2. Memo Tránh render lại một component không cần thiết => Higher Order Component (HOC)

*/
const Main = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const nameRef = useRef()
  const handleSubmit = () => {
    setProducts([...products, { name, price: parseInt(price) }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }
  const total = useMemo(() => {
    console.log("Tinh toan lai...")
    const result = products.reduce(function (result, prod) {
      return result + prod.price
    }, 0)
    return result
  }, [products])


  return (
    <View>
      <TextInput ref={nameRef} style={styles.input} placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
      <TextInput style={styles.input} placeholder="Price..." value={price} onChange={(e) => setPrice(e.target.value)} />
      <Button onPress={handleSubmit} title="Submit" color="black" />
      <Text style={{ fontSize: 22 }}>Total: {total} </Text>
      <View>
        {products.map(function (pro, index) {
          return (<Text style={{ fontSize: 22 }} key={index}>{pro.name} - {pro.price}</Text>)
        })}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    marginBottom: 5
  }
})
export default Main
