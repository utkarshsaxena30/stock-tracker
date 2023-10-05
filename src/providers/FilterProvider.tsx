import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type FilterContextType = {
  timeInterval: string
  symbol: string
  expiry: string
  strike: number
  setTimeInterval: Dispatch<SetStateAction<string>>
  setSymbol: Dispatch<SetStateAction<string>>
  setExpiry: Dispatch<SetStateAction<string>>
  setStrike: Dispatch<SetStateAction<number>>
}

const FilterContext = React.createContext<FilterContextType>(
  {} as FilterContextType
)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [timeInterval, setTimeInterval] = useState<string>('1')
  const [symbol, setSymbol] = useState<string>('HDFCBANK')
  const [expiry, setExpiry] = useState<string>('OCT 12')
  const [strike, setStrike] = useState<number>(20100)

  return (
    <FilterContext.Provider
      value={{
        timeInterval,
        symbol,
        expiry,
        strike,
        setTimeInterval,
        setSymbol,
        setExpiry,
        setStrike,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export function useFilterProvider() {
  return useContext(FilterContext)
}
