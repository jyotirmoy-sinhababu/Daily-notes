import { useSelector } from 'react-redux';

const ErrorPage = () => {
  const theme = useSelector((state: any) => state?.theme.value);

  const textTheme = {
    textColor: {
      color: theme ? 'aliceblue' : 'hsl(207, 26%, 17%)',
    },
  };
  return (
    <div className='flex justify-center align-middle'>
      <p
        style={textTheme.textColor}
        className='font-black decoration-slate-950 text-4xl'
      >
        List is empty
      </p>
    </div>
  );
};

export default ErrorPage;
