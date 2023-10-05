import { Select } from 'antd'
import { Dispatch, SetStateAction } from 'react'

type Props<K> = {
  label: string
  initValue: K
  setValue: Dispatch<SetStateAction<K>>
  options: { label: string; value: K }[]
}

export function SelectBox<K>({
  initValue,
  label,
  setValue,
  options,
}: Props<K>) {
  return (
    <div style={{ width: 'max-content' }}>
      <span>{label}: </span>
      <Select
        defaultValue={initValue}
        style={{ width: 120 }}
        onChange={(value) => setValue(value as K)}
        options={options}
      />
    </div>
  )
}
