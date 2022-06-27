import { bindActionCreators } from '@reduxjs/toolkit';
import { actionsRoot, AppDispatch, RootState } from '../store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionsRoot, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
