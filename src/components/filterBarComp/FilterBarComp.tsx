const FilterBarComp = ({ togglePage, setTogglePage }: any) => {
  const activeBtnStyle: any = {
    active: {
      borderBottom: togglePage ? '2px solid grey' : null,
    },
    inActive: {
      borderBottom: !togglePage ? '2px solid grey' : null,
    },
  };

  return (
    <div className='flex gap-[28px] justify-end pe-[45px] '>
      <button
        style={activeBtnStyle.active}
        className='decoration-slate-950 text-2xl border-l-4 border-r-4 rounded-lg'
        onClick={() => {
          setTogglePage(true);
        }}
      >
        All
      </button>
      <button
        style={activeBtnStyle.inActive}
        className='decoration-slate-950 text-2xl border-l-4 border-r-4 rounded-lg'
        onClick={() => {
          setTogglePage(false);
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterBarComp;
