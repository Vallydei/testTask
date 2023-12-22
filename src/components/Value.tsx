import { useAppSelector } from "../redux/hooks";
import './value.css'

export default function Value () : JSX.Element {
  const value = useAppSelector((store) => store.valueSlice.value)
  return <div className="value">Значение: {value}</div>;
}
