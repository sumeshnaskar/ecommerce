import react from "react"
import { Container, Text } from './styles/banner'

export default function Banner({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Banner.Text = function BannerText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}
