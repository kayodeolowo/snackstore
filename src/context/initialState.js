import { fetchuser } from "../Utils/fetchLocalStorageData"

const userInfo = fetchuser()

export const initialState = {
    user: userInfo,
}