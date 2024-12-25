import { FC, useState } from "react"
import { FlatList, Image, Modal, StatusBar, TouchableOpacity, View } from "react-native"
import { Icon, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { $styles, colors } from "../theme"
import { useAppTheme } from "@/utils/useAppTheme"
import React from "react"
import DateTimePicker from "react-native-ui-datepicker"
import dayjs from "dayjs"
import { se } from "date-fns/locale"

const headerAqua = require("../../assets/images/aqua/header.png")
const success = require("../../assets/images/aqua/success.png")
const waitingIcon = require("../../assets/images/aqua/waiting.png")
const notFoundIcon = require("../../assets/images/aqua/not-found.png")

const data = [
  {
    id: "1234729174912",
    warrantId: "JG6AFE",
    name: "Máy lạnh - AQUA - KRV9WNZ INDOOR",
    client: "CÔ LAN - 0926764789",
    status: "SUCCESS",
  },
  {
    id: "1234729174943",
    warrantId: "JG6AFE",
    name: "Máy lạnh - AQUA - KRV9WNZ INDOOR",
    client: "CÔ LAN - 0926764789",
    status: "WAITING",
  },
  {
    id: "1234729174954",
    warrantId: "JG6AFE",
    name: "Máy lạnh - AQUA - KRV9WNZ INDOOR",
    client: "CÔ LAN - 0926764789",
    status: "SUCCESS",
  },
  {
    id: "1234729174920",
    warrantId: "JG6AFE",
    name: "Máy lạnh - AQUA - KRV9WNZ INDOORRRRR",
    client: "CÔ LAN - 0926764789",
    status: "NOT_FOUND",
  },
  {
    id: "1234729174934",
    warrantId: "JG6AFE",
    name: "Máy lạnh - AQUA - KRV9WNZ INDOOR",
    client: "CÔ LAN - 0926764789",
    status: "SUCCESS",
  },
  {
    id: "1234729174927",
    warrantId: "JG6AFE",
    name: "Máy lạnh - AQUA - KRV9WNZ INDOOR",
    client: "CÔ LAN - 0926764789",
    status: "SUCCESS",
  },
  {
    id: "1234729174964",
    warrantId: "JG6AFE",
    name: "Máy lạnh - AQUA - KRV9WNZ INDOOR",
    client: "CÔ LAN - 0926764789",
    status: "WAITING",
  },
]

const data_filter = [
  {
    status: "ALL",
  },
  {
    status: "WAITING",
  },
  {
    status: "SUCCESS",
  },
  {
    status: "NOT_FOUND",
  },
]

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    const [dataList, setDataList] = useState(data)
    const [isOpenCalendar, setIsOpenCalendar] = useState(false)
    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const [startDate, setStartDate] = useState(() => {
      const date = new Date()
      date.setDate(date.getDate() - 7)
      return date.toISOString()
    })
    const [endDate, setEndDate] = useState(new Date().toISOString())
    const [statusFilter, setStatusFilter] = useState("ALL")

    const onOpenCalendar = () => setIsOpenCalendar(true)

    const onOpenFilter = () => setIsOpenFilter(true)

    const statusImage: any = (status: string) => {
      switch (status) {
        case "SUCCESS":
          return success
        case "WAITING":
          return waitingIcon
        case "NOT_FOUND":
          return notFoundIcon
        default:
          return notFoundIcon
      }
    }

    const statusText = (status: string) => {
      switch (status) {
        case "ALL":
          return "Tất cả"
        case "SUCCESS":
          return "ĐKBH Thành công"
        case "WAITING":
          return "ĐKBH chờ xử lý"
        case "NOT_FOUND":
          return "Không tìm thấy số máy"
        default:
          return "Không tìm thấy số máy"
      }
    }

    const statusColor = (status: string) => {
      switch (status) {
        case "SUCCESS":
          return "#27AE60"
        case "WAITING":
          return "#F2994A"
        case "NOT_FOUND":
          return "#EB5757"
        default:
          return "#EB5757"
      }
    }

    const renderList = ({ item, index }: any) => {
      return (
        <View key={`keyItem${index} ${item.id}`} style={$styles.itemContainer}>
          <View style={$styles.statusContainer}>
            <Image
              style={$styles.imageStatus}
              source={statusImage(item.status)}
              resizeMode="contain"
            />
            <Text style={[$styles.statusTxt, { color: statusColor(item.status) }]}>
              {statusText(item.status)}
            </Text>
          </View>
          <View style={$styles.infoColumn}>
            <Text style={$styles.idText}>{item.id}</Text>
            <Text style={$styles.warrantText}>Mã BH: {item.warrantId}</Text>
            <Text>{item.name}</Text>
            <Text>{item.client}</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={$styles.container2}>
        <StatusBar barStyle="light-content" />
        <Image style={{ width: "100%", height: 140 }} resizeMode="stretch" source={headerAqua} />
        <View style={$styles.bodyContainer}>
          <TouchableOpacity style={$styles.calendarPickButton} onPress={onOpenCalendar}>
            <Icon icon="calendar" size={20} color={colors.tint} />
            <Text
              style={$styles.calendarText}
            >{`${dayjs(startDate).format("DD/MM/YYYY")} - ${dayjs(endDate).format("DD/MM/YYYY")}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[$styles.calendarPickButton, $styles.filterButton]}
            onPress={onOpenFilter}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon icon="search" size={20} color={colors.tint} />
              <Text style={$styles.calendarText}>{statusText(statusFilter)}</Text>
            </View>
            <Icon icon="downArrow" size={20} />
          </TouchableOpacity>

          <FlatList
            data={dataList}
            extraData={dataList}
            renderItem={renderList}
            contentContainerStyle={$styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <Modal
          visible={isOpenCalendar}
          animationType="slide"
          transparent
          onRequestClose={() => setIsOpenCalendar(false)}
        >
          <View style={$styles.modalContainer}>
            <DateTimePicker
              mode="range"
              startDate={startDate}
              endDate={endDate}
              onChange={({ startDate, endDate }: any) => {
                setStartDate(startDate)
                setEndDate(endDate)
              }}
            />
            <TouchableOpacity onPress={() => setIsOpenCalendar(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          visible={isOpenFilter}
          animationType="slide"
          transparent
          onRequestClose={() => setIsOpenFilter(false)}
        >
          <View style={$styles.modalFilterContainer}>
            <View style={$styles.topbar} />
            {data_filter.map((item, index) => {
              const chooseFilter = () => {
                setStatusFilter(item.status)
                setIsOpenFilter(false)

                switch(item.status) {
                  case "ALL":
                    setDataList(data)
                    break
                  case "SUCCESS":
                    setDataList(data.filter((item) => item.status === "SUCCESS"))
                    break
                  case "WAITING":
                    setDataList(data.filter((item) => item.status === "WAITING"))
                    break
                  case "NOT_FOUND":
                    setDataList(data.filter((item) => item.status === "NOT_FOUND"))
                    break
                  default:
                    setDataList(data)
                }
              }
              return (
                <TouchableOpacity key={index} onPress={chooseFilter} style={[$styles.filterBtn, index == 0 && {borderTopLeftRadius: 10, borderTopRightRadius: 10}]}>
                  <Text>{statusText(item.status)}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </Modal>
      </View>
    )
  }
