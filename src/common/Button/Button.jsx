/* eslint-disable react/prop-types */
export const Button = ({ name, type }) => {
  return (
    <button
      type={type}
      className="py-8 px-16 rounded-[8px] cursor-pointer text-white bg-primary hover:bg-secondary transition-bg duration-400"
    >
      {name}
    </button>
  );
};
