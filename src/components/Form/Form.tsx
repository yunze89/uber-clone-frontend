import React from "react";

interface IProps {
    submitFn: any;
    className?: string;
}

const Form: React.SFC<IProps> = ({ submitFn, className, children }) => (
    <form
        className={className}
        onSubmit={e => {
            e.preventDefault();
            submitFn();
        }}
    >
        {children /*자식 component들 표시*/}
    </form>
);

export default Form;