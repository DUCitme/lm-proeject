import { IAuthState } from '@stores/authSlice';
import { FC } from 'react';

type LoginProps = {
    data?: string;
};

const LoginPage: FC<LoginProps & IAuthState> = () => {
    return <div className="h-screen w-screen flex justify-center items-center"></div>;
};

export default LoginPage;
