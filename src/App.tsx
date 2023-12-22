import Value  from "./components/Value";
import { Button } from "./components/Button";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { thunkChangeByValue, thunkDecrementValue, thunkIncrementValue, thunkInputValue } from "./redux/slicesAndThunks/thunks";
import { useState } from "react";


export default function App() {
const value = useAppSelector((store)=> store.valueSlice.value)
const additional = useAppSelector((store)=> store.valueSlice.input)
const [isFetching, setIsFetching] = useState(false);
const dispatch = useAppDispatch()
  return (
    <div className="App">
      <Value />
      <div>
        <Button btnStyle='plus_btn' text="Увеличить" isFetching={isFetching} onClick={() => {
          if (!isFetching) {
            setIsFetching(true);
            dispatch(thunkIncrementValue(value))
              .then(() => setIsFetching(false))
              .catch(() => setIsFetching(false));
          }
        }} />
        <Button btnStyle='minus_btn' text="Уменьшить" isFetching={isFetching}  onClick={()=> {  if (!isFetching) {
            setIsFetching(true);dispatch(thunkDecrementValue(value)).then(() => setIsFetching(false))
            .catch(() => setIsFetching(false));}}} />
      </div>
      <div>
        <input
        placeholder="изменить на значение"
         className="input"
        type='number'          
          onChange={({ target }) => {
            dispatch(thunkInputValue(+target.value))
           }}
        />
        <div>
          <Button btnStyle='plus_btn'isFetching={isFetching} 
                onClick={()=> {if (!isFetching) { setIsFetching(true); dispatch(thunkChangeByValue({value, additional})).then(() => setIsFetching(false))
                .catch(() => setIsFetching(false));}}}
            text="Увеличить на значение"
          />
          <Button btnStyle='minus_btn' isFetching={isFetching} 
            text="Уменьшить на значение"
            onClick={()=> {if (!isFetching) {setIsFetching(true); dispatch(thunkChangeByValue({value, additional: -additional})).then(() => setIsFetching(false))
            .catch(() => setIsFetching(false));}}}
          />
        </div>
      </div>
    </div>
  );
}