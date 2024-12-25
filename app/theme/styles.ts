import { TextStyle, ViewStyle } from "react-native"
import { spacing } from "./spacing"
import { t } from "i18next"
import { colors } from "./colors"

/* Use this file to define styles that are used in multiple places in your app. */
export const $styles = {
  row: { flexDirection: "row" } as ViewStyle,
  flex1: { flex: 1 } as ViewStyle,
  flexWrap: { flexWrap: "wrap" } as ViewStyle,

  container: {
    paddingTop: spacing.lg + spacing.xl,
    paddingHorizontal: spacing.lg,
  } as ViewStyle,

  container2: {
    // paddingTop: spacing.lg + spacing.xl,
    // paddingHorizontal: spacing.lg,

    // backgroundColor: 'white'
    flex: 1,
  } as ViewStyle,

  toggleInner: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  } as ViewStyle,

  bodyContainer: {
    paddingHorizontal: spacing.md,
    flex: 1
  },

  calendarPickButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  } as ViewStyle,

  filterButton: {
    justifyContent: "space-between",
  } as ViewStyle,

  calendarText: {
    fontSize: 14,
    marginLeft: 10,
  },

  itemContainer: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  } as ViewStyle,

  listContainer: {
    paddingTop: 10,
    paddingBottom: 100,
  },

  imageStatus: {
    width: 30,
    height: 30,
  },

  statusTxt: {
    fontSize: 12,
    textAlign: "center",
  } as TextStyle,

  statusContainer: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 80,
    marginTop: 2,
  } as ViewStyle,

  infoColumn: {
    flex: 1,
  },

  idText: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.aquaPrimary,
  } as TextStyle,

  warrantText: {
    color: "#2F80ED",
  },

  modalContainer: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,

    elevation: 5,
  } as ViewStyle,

  modalFilterContainer: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    alignItems: "center",
  } as ViewStyle,

  filterBtn: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    paddingLeft: 10,
    width: '100%'
  } as ViewStyle,

  topbar: {
    width: 30,
    height: 3,
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
    marginBottom: 10,
  }
}
