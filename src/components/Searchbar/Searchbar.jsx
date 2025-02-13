/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Button } from '../../common/Button/Button';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="py-[36px] ">
      <form onSubmit={handleSubmit} className="flex gap-8 justify-center">
        <input
          type="text"
          onChange={handleInput}
          aria-label="Search images"
          placeholder="Search images..."
          value={query}
          className="block w-[272px] py-8 px-16 border border-gray rounded-[4px] outline-none hover:border-black focus:border-primary active:border-primary transition-all duration-400 "
        />
        <Button name="Search" type="submit" handler={handleSubmit} />
      </form>
    </header>
  );
};
