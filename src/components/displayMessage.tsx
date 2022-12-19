import { FC } from 'react';
import BoxComponent from './box';

const DisplayMessage: FC<{ message: string | undefined }> = (props) => {
  return (
    <BoxComponent>
      <h1 className='font-poppins text-2xl '>{props.message}</h1>
    </BoxComponent>
  );
};
export default DisplayMessage;
