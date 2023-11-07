import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={handleIncrement} className="w-fit h-fit border border-red-500 p-5 rounded-lg">
        <Text className=" text-2xl font-bold">Hello World +</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement} className="w-fit h-fit border border-red-500 p-5 rounded-lg mt-3">
        <Text className=" text-2xl font-bold">Hello World -</Text>
      </TouchableOpacity>
      <Text className="text-xl mt-3">Count = {count}</Text>
      <Text className="mt-10">Hello Friend</Text>
      <StatusBar style="auto" />
    </View>
  );
}
