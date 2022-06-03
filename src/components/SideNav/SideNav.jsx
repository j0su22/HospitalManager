import Nav from 'react-bootstrap/Nav'
import * as Icon from 'react-bootstrap-icons';
import { useState } from "react"
import classnames from "classnames"
import { Link, useLocation } from "react-router-dom"
import {
    PRIVATE_DASHBOARD,
    PRIVATE_DISEASES,
    PRIVATE_DISEASES_CREATE,
    PUBLIC_LOGIN
} from "../../routes/app-router.routes"

const SideNav = () => {
    const location = useLocation()
    const [activeKey, setActiveKey] = useState(location.pathname)

    const handleItemSelect = info => {
        if (info.target.pathname) setActiveKey(info.target.pathname)
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
            <Nav
                variant="pills"
                activeKey={activeKey}
                defaultActiveKey={[location.pathname]}
                onSelect={handleItemSelect}
                className="flex-column mb-auto"
            >
                <Link to={PRIVATE_DASHBOARD} className="d-flex align-items-center mb-4 me-md-auto text-white text-decoration-none" style={{ lineHeight: 0 }}>
                    <Icon.HospitalFill className="bi pe-none me-2" width={40} height={32} />
                    <span className="ms-4 fs-2">Hospital Manager</span>
                </Link>
                <Nav.Item>
                    <Link key={PRIVATE_DASHBOARD} to={PRIVATE_DASHBOARD} className={classnames("nav-link text-white", { "active": activeKey === PRIVATE_DASHBOARD })} style={{ lineHeight: 0 }} onClick={handleItemSelect}>
                        <Icon.HouseDoorFill className="bi pe-none me-2" width={16} height={16} />
                        <span className="ms-4">Dashboard</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link key={PRIVATE_DISEASES} to={PRIVATE_DISEASES} className={classnames("nav-link text-white", { "active": activeKey === PRIVATE_DISEASES })} style={{ lineHeight: 0 }} onClick={handleItemSelect}>
                        <Icon.ExclamationDiamondFill className="bi pe-none me-2" width={16} height={16} />
                        <span className="ms-4">Diseases</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link key={PRIVATE_DISEASES} to={PRIVATE_DISEASES_CREATE} className={classnames("nav-link text-white", { "active": activeKey === PRIVATE_DISEASES_CREATE })} style={{ lineHeight: 0 }} onClick={handleItemSelect}>
                        <Icon.PatchPlusFill className="bi pe-none me-2" width={16} height={16} />
                        <span className="ms-4">Create</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link key={PRIVATE_DISEASES} to={PUBLIC_LOGIN} className={classnames("nav-link text-white", { "active": activeKey === PUBLIC_LOGIN })} style={{ lineHeight: 0 }} onClick={handleItemSelect}>
                        <Icon.PeopleFill className="bi pe-none me-2" width={16} height={16} />
                        <span className="ms-4">Login</span>
                    </Link>
                </Nav.Item>
            </Nav>
        </div >
    )
}

export default SideNav