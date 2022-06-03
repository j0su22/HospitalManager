import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

const Spinner = props => {
    const { size, spinning, tip, snake } = props

    let indicator = snake ? (
        <LoadingOutlined spin />
    ) : undefined

    return (
        <Spin size={size} spinning={spinning} tip={tip} indicator={indicator} />
    )
}

export default Spinner