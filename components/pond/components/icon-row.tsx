export type IconsRowProps = {
  children: React.ReactNode;
  width?: number;
};

export const IconsRow = ({ children }: IconsRowProps) => {
  return (
    <div className={`flex flex-row items-start justify-between gap-4`}>
      {children}
    </div>
  );
};
