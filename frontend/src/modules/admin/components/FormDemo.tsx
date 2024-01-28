import LoginModel from '@core/models/login.model';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

const resolver = classValidatorResolver(LoginModel);

const FormDemo: FC = () => {
    const { control, handleSubmit } = useForm<LoginModel>({ resolver });

    return <></>;
};

export default FormDemo;
