import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  page_container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5D5FF",
  },
  page_container_dark: {
    flex: 1,
    backgroundColor: "#260064",
  },
  page_container_white: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  viewContainer: {
    overflow: "visible", // or 'scroll' or 'hidden', depending on your requirement
  },

  input_field: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    marginBottom: 30,
    fontSize: 20,
  },

  search_button_container: {
    elevation: 8,
    backgroundColor: "#260064",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  search_button_text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  modal_button_container: {
    elevation: 8,
    backgroundColor: "#260064",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
  },
  confirm_button_container: {
    elevation: 8,
    backgroundColor: "#6100FF",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  modal_button_text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  header_modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  header_modal_text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginTop: 40,
    marginBottom: 10,
  },
});
