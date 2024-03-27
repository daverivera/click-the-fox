import { PropsWithChildren } from 'react';
import './Button.scss';

export default function Button({ children }: PropsWithChildren) {
    return <button className="fox-button">{children}</button>;
}
