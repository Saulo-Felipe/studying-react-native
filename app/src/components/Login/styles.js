import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#333",
    flex: 1,
  }, 
  content: {
    padding: 20,
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center"
  },
  imageContainer: {
    width: "100%",
    height: "20%",
  },
  logoImg: {
    width: "100%",
    height: "100%",
  },
  inputsContainer: {
  },
  passwordInputContainer: {
    flexDirection: "row",
  },
  inputPassword: {
    flex: 1,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  showPasswordIcon: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "center"
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    color: "rgba(255, 255, 255, 0.7)"
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 15,
    padding: 5,
    borderRadius: 5,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: "#F58634",
    padding: 9,
    marginTop: 18,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center"
  },
  errorMsgText: (message) => ({
    color: "#ff0000",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 8,
    borderRadius: 5,
    marginTop: 15,
    display: message == "none" ? message : "flex"
  }),
});