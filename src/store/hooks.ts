import { useDispatch as useDispatchRedux, useSelector as useSelectorRedux, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, GlobalState } from ".";

type DispatchFunction = () => AppDispatch;

const useDispatch: DispatchFunction = useDispatchRedux;
const useSelector: TypedUseSelectorHook<GlobalState> = useSelectorRedux;

export { useDispatch, useSelector };