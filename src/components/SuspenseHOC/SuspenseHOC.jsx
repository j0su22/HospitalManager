
import Spinner from "../Spinner"
import { Suspense } from "react"

const SuspenseHOC = props => {
    const { view } = props
    return (
        <Suspense
            fallback={
                <div className="flex justify-center items-center h-full">
                    <Spinner snake size="large" />
                </div>
            }
        >
            {view}
        </Suspense>
    )
}

export default SuspenseHOC