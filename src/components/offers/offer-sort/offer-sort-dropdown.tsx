import {useState} from 'react';
import {SortOptions, SortOptionTitles} from '../../../consts.ts';
import {OfferSortOptions} from './offer-sort.ts';
import clsx from 'clsx';


type OfferSortDropdownProps = {
  SortOption: SortOptions;
  OnSortOptionChange: (newSortType: SortOptions) => void;
}

export function OfferSortDropdown(props: OfferSortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortOptionChange = (newSortOption: SortOptions) =>{
    setIsOpen(false);
    props.OnSortOptionChange(newSortOption);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {SortOptionTitles[props.SortOption]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>

      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {OfferSortOptions
            .map((option) => (
              <li
                key={option}
                className={clsx('places__option', props.SortOption === option && 'places__option--active')}
                tabIndex={0}
                onClick={() => {
                  handleSortOptionChange(option);
                }}
              >
                {SortOptionTitles[option]}
              </li>
            ))}
        </ul>
      )}

    </form>
  );
}
