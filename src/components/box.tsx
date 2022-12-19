import { FC } from 'react';

const BoxComponent: FC<{ children: any }> = ({ children }) => {
  return (
    <div className='flex rounded-lg border-2 bg-gray-50 py-2 px-3 border-embie-orange-600 h-fit w-9/12 md:w-9/12 font-poppins'>
      {children}
    </div>
  );
};

export default BoxComponent;
