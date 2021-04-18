import create from 'zustand'

    const useStore = create(set => ({
        total: 0,
        setTotal: (total) => set((state) => ({ ...state, total })),
        cart: [],
        setCart: (cart) => set((state) => ({ ...state, cart })),
    }))
    export default useStore