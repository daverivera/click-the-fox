import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './index';
import { useEffect } from 'react';

export function useUserValidator() {
    const userName = useAppSelector(state => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userName) {
            navigate('/');
        }
    }, [userName]);
}
