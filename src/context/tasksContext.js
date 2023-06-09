import React from "react";

export const tasksContext = React.createContext({
    tasks: [],
    hasInteracted: false,
    sortOption: '',
    emojiesOn: false,
    saveEmojies: false,
    saveSortOption: false,
    allTasksDone: false,
    themeColors: {},
    themeColorCombinations: [],
    addTask: () => {},
    declareHasInteracted: () => {},
    resetHasInteracted: () => {},
    updateTasks: () => {},
    toggleEmojies: () => {},
    setSortOption: () => {},
    toggleSaveEmojies: () => {},
    toggleSaveSortOption: () => {},
    clearAllTasks: () => {},
    handleChangeThemeColor: () => {}
});
