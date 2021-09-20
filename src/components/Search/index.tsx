import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce/lib';

import Input, { Props as InputProps } from 'components/Input';

interface Props extends Omit<InputProps, 'onChange'> {
  className?: string;
  inputClassName?: string;
  onChange?: (value?: string) => void;
}

function Search({ className = '', inputClassName = '', onChange, ...rest }: Props) {
  const [value, setValue] = useState<string | undefined>();
  const debouncedChange = useDebouncedCallback((search?: string) => {
    onChange?.(search);
  }, 300);

  return (
    <div className={className}>
      <Input
        className={inputClassName}
        value={value || ''}
        onChange={({ currentTarget }) => {
          setValue(currentTarget.value);
          debouncedChange(currentTarget.value);
        }}
        {...rest}
      />
    </div>
  );
}

export default Search;
