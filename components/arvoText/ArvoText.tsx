import React from "react"
import { StyleProp, Text, TextProps, TextStyle } from "react-native"

interface ArvoTextProps extends TextProps {
  style?: StyleProp<TextStyle>
  children: React.ReactNode
}

const ArvoText: React.FC<ArvoTextProps> = ({ style, children, ...rest }) => {
  return (
    <Text
      {...rest}
      style={[{ 
        fontFamily: "Arvo-Regular",
        letterSpacing: 2 }, style]} 
    >
      {children}
    </Text>
  )
}

export default ArvoText