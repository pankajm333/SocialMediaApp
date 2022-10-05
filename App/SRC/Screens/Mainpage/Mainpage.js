import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Mainpage = ({ navigation }) => {
    return (
        <View style={containerFull}>
            <StatusBar />
            <TopNavbar />
            <Bottomnavbar />
            <FollowersRandomPost />
        </View>
    )
}

export default Mainpage

const styles = StyleSheet.create({})