import { useFilterProvider } from '../../providers/FilterProvider'
import { SelectBox } from '../FormFields/SelectBox/SelectBox'
import {
  EXPIRY_OPTIONS,
  STRIKE_OPTIONS,
  SYMBOL_OPTIONS,
  TIME_INTERVAL_OPTIONS,
} from './options'

export function Filters() {
  const {
    timeInterval,
    symbol,
    expiry,
    strike,
    setTimeInterval,
    setSymbol,
    setExpiry,
    setStrike,
  } = useFilterProvider()

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        overflowX: 'auto',
        paddingBottom: '1rem',
        minHeight: '3rem',
      }}
    >
      <SelectBox<string>
        initValue={symbol}
        label='Symbol'
        options={SYMBOL_OPTIONS}
        setValue={setSymbol}
      ></SelectBox>
      <SelectBox<string>
        initValue={expiry}
        label='Expiry'
        options={EXPIRY_OPTIONS}
        setValue={setExpiry}
      ></SelectBox>
      <SelectBox<number>
        initValue={strike}
        label='Strike'
        options={STRIKE_OPTIONS}
        setValue={setStrike}
      ></SelectBox>
      <SelectBox<string>
        initValue={timeInterval}
        label='T/F'
        options={TIME_INTERVAL_OPTIONS}
        setValue={setTimeInterval}
      ></SelectBox>
    </div>
  )
}
