import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { Producto } from '../../interfaces/ProductsInterface';
import TaskItem from "./TaskItem";
interface Props{
    products:Producto[],
    navigation: Navigation,
    load:()=>{}
}
interface Navigation {
  navigate: (routeName: string,{}) => void;
}
// interface Refresh {
//   isRefreshing: boolean;
//   onRefresh: { (): void };
// }

export default function TaskList({products,navigation,load}:Props) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh=()=>{
    setRefreshing(true)
    load()
    console.log('refresh');
  }
  useEffect(() => {
    setRefreshing(false)
  }, [products])

  return (
    <FlatList
      style={{alignSelf:'center'}}
      // scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={products}
      keyExtractor={(products) => products._id}
      renderItem={({ item }) => <TaskItem product={item} navigation={navigation}/>}
      refreshControl={
        <RefreshControl
          colors={['#345467']}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
}
