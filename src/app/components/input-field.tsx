'use client';

import React from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

type CommonProps = {
  label?: string;
  as?: 'input' | 'select' | 'textarea';
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputFieldProps = CommonProps &
  (
    | InputProps
    | (SelectProps & { as: 'select' })
    | (TextareaProps & { as: 'textarea' })
  );

export default function InputField({
  label,
  as = 'input',
  id,
  children,
  className,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base text-gray-900">
          {label}
        </label>
      )}

      <Field
        as={as}
        id={id}
        className={clsx(
          'p-3 h-11 text-sm rounded border border-gray-300 shadow',
          className,
        )}
        {...rest}
      >
        {children}
      </Field>
    </div>
  );
}
