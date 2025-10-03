import React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
};

const Button = ({variant = 'primary', className, ...props}: Props) => {
    const styles =
        variant === 'primary'
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    return (
        <button {...props} className={clsx('px-3 py-1.5 rounded text-sm font-medium transition', styles, className)}/>
    );
}

export default React.memo(Button);
