
const ratings = [
  {value: 1, title: 'terribly'},
  {value: 2, title: 'badly'},
  {value: 3, title: 'not bad'},
  {value: 4, title: 'good'},
  {value: 5, title: 'perfect'},
];

type RatingProps = {
  SetRating : (rating: number) => void;
}

export function Rating(props: RatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {ratings.map((rating) => (
        <>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={5}
            id={`${rating.value}-stars`}
            type="radio"
            onChange={() => {
              props.SetRating(rating.value);
            }}
            value={rating.value}
          />
          <label
            htmlFor={`${rating.value}-stars`}
            className="reviews__rating-label form__rating-label"
            title={rating.title}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </>
      ))}
    </div>
  );
}
