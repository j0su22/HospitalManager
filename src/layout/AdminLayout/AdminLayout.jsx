import classNames from "classnames"
import SideNav from "../../components/SideNav"
import Spinner from "../../components/Spinner"
import { Suspense, useMemo } from "react"
import { Outlet } from "react-router-dom"
import { useWindowSize } from "../../utils"

const AdminLayout = () => {
    const [width] = useWindowSize()

    const isDesktop = useMemo(() => width >= 992, [width])

    return (
        <main className={classNames("admin-layout d-flex", { "flex-col": !isDesktop })}>
            <SideNav />
            <div
                className={classNames("admin-layout__main", { "w-full": !isDesktop })}
            >
                <div style={{ overflow: "auto" }}>
                    <Suspense
                        fallback={
                            <div className="flex justify-center items-center h-full">
                                <Spinner snake size="large" />
                            </div>
                        }
                    >
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </main>
    )
}

export default AdminLayout