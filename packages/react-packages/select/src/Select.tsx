import { BaseProps, useClickOutside } from '@dt-ui/react-core';
import { Icon } from '@dt-ui/react-icon';
import { LabelField } from '@dt-ui/react-label-field';
import { Tooltip } from '@dt-ui/react-tooltip';
import { Typography } from '@dt-ui/react-typography';
import { useSelect } from 'downshift';
import {
  useRef,
  useState,
  useEffect,
  Children,
  isValidElement,
  ReactElement,
  useMemo,
  useCallback,
} from 'react';

import { SelectOption } from './components/SelectOption';
import { SelectProvider } from './context';
import {
  SelectMenuStyled,
  SelectContainerStyled,
  SelectFieldStyled,
  SelectStyled,
  HelperSelectFieldMessageStyled,
  SelectValueContainerStyled,
  SelectActionContainerStyled,
  SelectValueStyled,
} from './Select.styled';
import { SelectOptionValue } from './types';

export interface SelectProps extends BaseProps {
  helperText?: string;
  hasError?: boolean;
  initialValue?: string[] | string;
  label: string;
  isMulti?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
  onChange?: (value: string[] | string) => void;
}

const createOptionObject = (element: ReactElement): SelectOptionValue => {
  return {
    value: element.props.value,
    label: element.props.label,
    disabled: !!element.props.disabled,
  };
};

const itemToString = (item: SelectOptionValue | null): string => {
  if (item) {
    return item.label || item.value;
  }
  return '';
};

const Select = ({
  dataTestId,
  style,
  helperText = '',
  hasError = false,
  initialValue = '',
  label,
  isMulti = false,
  isRequired,
  errorMessage,
  children,
  isDisabled,
  onChange,
}: SelectProps) => {
  const [selectedItems, setSelectedItems] = useState<SelectOptionValue[]>([]);

  const ref = useRef<HTMLDivElement>(null);

  const changeSelectedItems = useCallback(
    (newItems: SelectOptionValue[]) => {
      setSelectedItems(newItems);
      if (onChange) {
        onChange(
          isMulti
            ? newItems
                .map((newSelectedItem) => newSelectedItem.value)
                .filter((value): value is string => Boolean(value))
            : newItems[0]?.value || ''
        );
      }
    },
    [setSelectedItems, isMulti, onChange]
  );

  const clearSelection = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    changeSelectedItems([]);
  };

  const helperMessage = hasError && errorMessage ? errorMessage : helperText;

  const options = useMemo(() => {
    const tempOptions = Children.map(children, (child) => {
      if (isValidElement(child) && child.props.value != undefined) {
        return createOptionObject(child);
      }

      return null;
    });
    return tempOptions ? tempOptions.filter(Boolean) : [];
  }, [children]);

  const validSelectedItems = useMemo(() => {
    const isSelectedItemValid = (selectedItem: SelectOptionValue) => {
      return !!options.find((option) => option.value === selectedItem.value);
    };

    return selectedItems.filter(isSelectedItemValid);
  }, [options, selectedItems]);

  useEffect(() => {
    const getInitialOptions = () => {
      if (Array.isArray(initialValue)) {
        return initialValue
          .map((value: string) =>
            options.find((option) => option.value === value)
          )
          .filter((option): option is SelectOptionValue => Boolean(option));
      } else {
        return options.find((option) => option.value === initialValue);
      }
    };

    const initalOptions = getInitialOptions();

    if (
      !initialValue ||
      !initalOptions ||
      (Array.isArray(initalOptions) && initalOptions.length === 0)
    ) {
      changeSelectedItems([]);
    } else {
      if (Array.isArray(initalOptions)) {
        changeSelectedItems(isMulti ? initalOptions : [initalOptions[0]]);
      } else {
        changeSelectedItems([initalOptions]);
      }
    }
  }, [isMulti, initialValue, options, changeSelectedItems]);

  /**
   * When an option is no longer available, it should also be removed from the selected options
   */
  useEffect(() => {
    const selectedItemDiffFromAvailableOption =
      selectedItems.length > 0 && selectedItems[0].value !== options[0].value;

    if (
      options.length === 1 &&
      (selectedItems.length === 0 || selectedItemDiffFromAvailableOption)
    ) {
      changeSelectedItems([options[0]]);
    }

    if (validSelectedItems.length !== selectedItems.length) {
      changeSelectedItems(validSelectedItems);
    }
  }, [options, selectedItems, validSelectedItems, changeSelectedItems]);

  const {
    isOpen,
    closeMenu,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<SelectOptionValue>({
    items: options,
    isItemDisabled(item) {
      return !!item.disabled;
    },
    itemToString,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
        case useSelect.stateChangeTypes.ToggleButtonBlur:
          return {
            ...changes,
            isOpen: isMulti,
            highlightedIndex: state.highlightedIndex,
          };
        default:
          return changes;
      }
    },

    selectedItem: null,
    onSelectedItemChange: ({ selectedItem }) => {
      let newSelectedItems: SelectOptionValue[] = [];

      if (!isMulti) {
        newSelectedItems = [selectedItem];
      } else {
        if (selectedItems.includes(selectedItem)) {
          newSelectedItems = selectedItems.filter(
            (item) => item !== selectedItem
          );
        } else {
          newSelectedItems = [...selectedItems, selectedItem];
        }
      }

      changeSelectedItems(newSelectedItems);
    },
  });

  const hasSelectedItems = !!selectedItems && !!selectedItems.length;

  const selectedValueContainerText = () => {
    return selectedItems.length > 1
      ? `${selectedItems.length} options selected`
      : selectedItems[0].label || selectedItems[0].value;
  };

  useClickOutside({ ref, handler: () => closeMenu() });

  const disabled = isDisabled || options.length === 1;

  return (
    <SelectProvider
      value={{ highlightedIndex, getItemProps, selectedItems, isMulti }}
    >
      <SelectStyled data-testid={dataTestId} ref={ref} style={style}>
        <SelectFieldStyled>
          <SelectContainerStyled
            {...getToggleButtonProps({ disabled })}
            hasError={hasError}
            isActive={isOpen}
          >
            <SelectValueContainerStyled>
              <LabelField
                {...getLabelProps()}
                hasError={hasError}
                isActive={hasSelectedItems}
                isDisabled={disabled}
                isRequired={isRequired}
              >
                {label}
              </LabelField>
              {hasSelectedItems ? (
                <SelectValueStyled>
                  {selectedValueContainerText()}
                </SelectValueStyled>
              ) : null}
            </SelectValueContainerStyled>
            <SelectActionContainerStyled>
              {isMulti && hasSelectedItems ? (
                <Tooltip>
                  <Icon
                    code='close'
                    dataTestId='clear-selection'
                    onClick={clearSelection}
                    size='medium'
                  />
                  <Tooltip.Content>Clear all</Tooltip.Content>
                </Tooltip>
              ) : null}
              <Icon
                code={isOpen ? 'expand_less' : 'expand_more'}
                size='medium'
              />
            </SelectActionContainerStyled>
          </SelectContainerStyled>
        </SelectFieldStyled>
        <SelectMenuStyled
          {...getMenuProps()}
          aria-multiselectable={isMulti}
          isOpen={isOpen}
        >
          {isOpen ? children : null}
        </SelectMenuStyled>

        {helperMessage ? (
          <HelperSelectFieldMessageStyled>
            <Typography
              color={hasError ? 'error.default' : 'content.tertiary'}
              element='span'
              fontStyles='body3'
            >
              {helperMessage}
            </Typography>
          </HelperSelectFieldMessageStyled>
        ) : null}
      </SelectStyled>
    </SelectProvider>
  );
};

Select.Option = SelectOption;

export { Select };
