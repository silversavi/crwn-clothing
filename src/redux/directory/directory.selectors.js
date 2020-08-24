import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory], // input
    directory => directory.sections //output
);