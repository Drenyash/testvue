export default {
    getTabs(state) {
        return state.items;
    },
    getValue: (state) => (key) => {
        return state[key];
    },
    getTabValue: (state) => (key, value) => {
        if (key !== 'drilling' && key !== 'milling') {
            return state.items[state.activeTab][key];
        } else {
            if (state.items[state.activeTab][key]) {
                if (value) {
                    return state.items[state.activeTab][key][value - 1].length;
                } else {
                    return state.items[state.activeTab][key].length
                }
            }
        }
    },
    getTabValueMilling: (state) => (key) => {
        return state.items[state.activeTab][key]
    },
    getItems: (state) => (key) => {
        return state[key];
    },
    getTabArray: (state) => (key, value) => {
        return state.items[state.activeTab][key][value];
    },
    getActiveTab(state) {
        return state.activeTab;
    },
    getProcessingType(state) {
        return state.items[state.activeTab].processingType;
    },
    getMaterialById(state) {
        const materialId = state.items[state.activeTab].selectedMaterial;
        try {
            return state.materials[materialId];
        } catch (e) {
            return null;
        }
    },
}
