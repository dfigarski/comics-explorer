import { useForm } from 'react-hook-form';

function SearchForm({ onSearch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onSearch(data.title);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Wpisz tytuł komiksu..."
        {...register('title', {
          required: 'Pole jest wymagane',
          minLength: {
            value: 2,
            message: 'Wpisz co najmniej 2 znaki',
          },
        })}
      />
      <button type="submit">Szukaj</button>

      {errors.title && <p className="form-error">{errors.title.message}</p>}
    </form>
  );
}

export default SearchForm;



