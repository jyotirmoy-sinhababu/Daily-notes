import { useSelector } from 'react-redux';

const FilterBarComp = ({ togglePage, setTogglePage }: any) => {
  const theme = useSelector((state: any) => state?.theme.value);

  const btnTheme = {
    btnColor: {
      color: theme ? 'aliceblue' : 'hsl(207, 26%, 17%)',
    },
  };

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
        style={(activeBtnStyle.active, btnTheme.btnColor)}
        className='decoration-slate-950 text-2xl border-l-4 border-r-4 rounded-lg w-[80px] focus:border-teal-500'
        onClick={() => {
          setTogglePage(true);
        }}
      >
        All
      </button>
      <button
        style={(activeBtnStyle.inActive, btnTheme.btnColor)}
        className='decoration-slate-950 text-2xl border-l-4 border-r-4 rounded-lg  focus:border-teal-500'
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
