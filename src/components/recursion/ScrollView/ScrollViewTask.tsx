import React,{FC} from 'react'
import { SafeAreaView, ScrollView, Text,View } from 'react-native'
import { ItemType,DATA } from '../type'
import {ViewCover}from '../Items.styled'

 const Recursive:FC<ItemType>  = ({title,child} :ItemType) => {
    return (
        <View>
        <SafeAreaView>
        <ScrollView>
            <Text>{title}</Text>

            <Text>{(child?? []).map((item:ItemType,key:any) => <Recursive {...item} key={key}/>)}</Text>
        </ScrollView>
        
        </SafeAreaView>
        
        
        
        </View>
    )

}

function ScrollViewTask() :any {
    return (
        <Recursive {...DATA}/>
    )
}

export default ScrollViewTask