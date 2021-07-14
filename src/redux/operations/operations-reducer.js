import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { openModal, closeModal, logoutModalAction } from './operations-action';

const setTrue = () => true;
const setFalse = () => false;

const modalReducer = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});

const modalLogout = createReducer(false, {
  [logoutModalAction]: (state, _) => !state,
});

// const loading = createReducer(false, {
//   []: () => true,
//   []: () => false,
//   []: () => false,
//   []: () => true,
//   []: () => false,
//   []: () => false,
//   []: () => true,
//   []: () => false,
//   []: () => false,
// });

export default combineReducers({ modalReducer, modalLogout });
