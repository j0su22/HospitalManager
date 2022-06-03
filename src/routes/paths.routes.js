/**
 * paths.js
 * @const {object} PATHS_COLLECTIONS - This will going to collect as symbols all the possible routes
 * in the application and with concatenation the path for a route will be generated for React Router.
 */
 const PATHS_COLLECTIONS = Object.freeze({
    PRIVATE_PATHS: {
        DASHBOARD_BASE_PATH: Symbol('app/'),
        ACCOUNT_PATHS: {
            BASE_PATH: Symbol('account/'),
        },
        DISEASES_PATHS: {
            BASE_PATH: Symbol('diseases/'),
            CREATE_PATH: Symbol('create/'),
        },
        CASES_PATHS: {
            BASE_PATH: Symbol('cases/'),
        },
        HOSPITALS_PATHS: {
            BASE_PATH: Symbol('hospitals/'),
        },
        USER_PATHS: {
            BASE_PATH: Symbol('user/'),
            USER_CONFIG: Symbol('config/'),
            RESET_PASSWORD: Symbol('reset-password/'),
        },
    },
    PUBLIC_PATHS: {
        BASE: Symbol('/'),
        SUCCESS: Symbol('success/'),
        FAILURE: Symbol('failure/'),
        USER_PATHS: {
            LOGIN: Symbol('login/'),
            REGISTER: Symbol('register/'),
            FORGOT_PASSWORD: Symbol('forgot-password/'),
        },
        CLIENT_ERRORS_PATHS: {
            NOT_FOUND: Symbol('*'),
            INTERNAL_SERVER_ERROR: Symbol('500/'),
        },
    },
})

export default PATHS_COLLECTIONS