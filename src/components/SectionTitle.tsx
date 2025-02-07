import React from 'react';
import { Container } from '@/components/Container';

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  background?: boolean;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <div
      className={`flex w-full flex-col pt-10 ${
        props.align === 'left' ? '' : 'items-center justify-center text-center '
      } ${props.background ? 'bg-[#0B2143]' : ''}`}>
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-blue-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-4xl text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-white">
          {props.children}
        </p>
      )}
    </div>
  );
};
