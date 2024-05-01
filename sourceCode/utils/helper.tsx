//@ts-nocheck
import { useNavigation } from "@react-navigation/native"

export const MyNavigation=()=>{
   const navigation = useNavigation()
     
   const navigate=(name: string)=>{
    navigation.navigate(name)
   }

   return[navigate]

}