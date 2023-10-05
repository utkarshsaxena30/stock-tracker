import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type FilterContextType = {
  timeInterval: string
  setTimeInterval: Dispatch<SetStateAction<string>>
}

const FilterContext = React.createContext<FilterContextType>(
  {} as FilterContextType
)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [timeInterval, setTimeInterval] = useState<string>('1')

  return (
    <FilterContext.Provider value={{ timeInterval, setTimeInterval }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilterProvider() {
  return useContext(FilterContext)
}
