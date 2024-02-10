import { SafeAreaView } from "react-native"
import { Slot } from "expo-router"
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
} from "@expo-google-fonts/inter"

export default function Layout () {
    return (
        <SafeAreaView className="bg-slate-900 flex-1">
            <Slot />
        </SafeAreaView>
    )
}