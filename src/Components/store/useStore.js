const { create } = require("zustand")

const useUserStore = create((set, get) => ({
    userInfo: {
        p_name: '',
        p_email: '',
        p_ID:"",
        p_password:"",
        mobile_no:""
    },
    setUserInfo: (userInfo) => set({ userInfo }),
}))

export default useUserStore