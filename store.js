import create from 'zustand'

    const useStore = create(set => ({
        total: 0,
        setTotal: (total) => set((state) => ({ ...state, total }))
    }))
    export default useStore