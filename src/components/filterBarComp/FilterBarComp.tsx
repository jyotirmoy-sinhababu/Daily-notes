const FilterBarComp = ({ setIsMarked }: any) => {
  return (
    <div className='flex gap-[28px] justify-end pe-[45px] '>
      <button
        className='decoration-slate-950 text-2xl border-l-4 border-r-4 rounded-lg'
        onClick={() => {
          setIsMarked(true);
        }}
      >
        All
      </button>
      <button
        className='decoration-slate-950 text-2xl border-l-4 border-r-4 rounded-lg'
        onClick={() => {
          setIsMarked(false);
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterBarComp;
