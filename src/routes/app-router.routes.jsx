import SuspenseHOC from "../components/SuspenseHOC"
import LayoutCollections from "../layout"
import { lazy } from "react"
import { Navigate } from "react-router-dom"
import { concatSymbols } from "../utils"

import PATHS_COLLECTIONS from "./paths.routes"

const Home = lazy(() => import("../views/Home"))
const Login = lazy(() => import("../views/Login"))
const Diseases = lazy(() => import("../views/modules/Diseases/Diseases"))
const Create = lazy(() => import("../views/modules/Diseases/Create"))
const { AdminLayout } = LayoutCollections

const {
    PRIVATE_PATHS: {
        DASHBOARD_BASE_PATH,
        USER_PATHS: { BASE_PATH, RESET_PASSWORD, USER_CONFIG },
        DISEASES_PATHS: { BASE_PATH: DISEASES_BASE_PATH, CREATE_PATH: DISEASES_CREATE_PATH },
    },
    PUBLIC_PATHS: {
        BASE,
        USER_PATHS: { LOGIN, FORGOT_PASSWORD, REGISTER },
        CLIENT_ERRORS_PATHS: { NOT_FOUND, INTERNAL_SERVER_ERROR },
    },
} = PATHS_COLLECTIONS

export const PRIVATE_DASHBOARD = concatSymbols([BASE, DASHBOARD_BASE_PATH])
export const PRIVATE_USER = concatSymbols([PRIVATE_DASHBOARD, BASE_PATH])
export const PRIVATE_SETTINGS = concatSymbols([PRIVATE_DASHBOARD, USER_CONFIG])
export const PRIVATE_RESET_PASSWORD = concatSymbols([
    PRIVATE_DASHBOARD,
    RESET_PASSWORD,
])

export const PRIVATE_DISEASES = concatSymbols([PRIVATE_DASHBOARD, DISEASES_BASE_PATH])
export const PRIVATE_DISEASES_CREATE = concatSymbols([PRIVATE_DISEASES, DISEASES_CREATE_PATH])

export const PUBLIC_LOGIN = concatSymbols([BASE, LOGIN])
export const PUBLIC_REGISTER = concatSymbols([BASE, REGISTER])
export const PUBLIC_FORGOT_PASSWORD = concatSymbols([BASE, FORGOT_PASSWORD])

export const PAGE_NOT_FOUND = concatSymbols([BASE, NOT_FOUND])
export const SERVER_ERROR = concatSymbols([BASE, INTERNAL_SERVER_ERROR])

const appRoutes = [
    {
        path: "/",
        element: <Navigate to={PRIVATE_DASHBOARD} replace />,
    },
    {
        path: PRIVATE_DASHBOARD,
        element: <AdminLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: PRIVATE_DISEASES,
                element: <Diseases />
            },
            {
                path: PRIVATE_DISEASES_CREATE,
                element:<Create />
            }
        ],
    },
    {
        path: PUBLIC_LOGIN,
        element: <SuspenseHOC view={<Login />} />
    }
]

export default appRoutes