import { Alert, Button, Linking } from "react-native";


const GGURL = 'google.com';
const YURL = 'abc.com';
const number = '+123456789';

const Linkin = () => {
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't how to open url ${url}`)
    }
  }
  return (
    <>
      <Button title="url" onPress={() => {
        openUrl(YURL)
      }} />
      <Button title="number" onPress={() => {
        openUrl(number)
      }} />
    </>
  )
}
export default Linkin