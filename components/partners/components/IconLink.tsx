import Link from "next/link";
import Image from "next/image";

export type IconLinkProps = Readonly<{
  url: string;
  iconSource: string;
  alt?: string;
  width?: number;
  height?: number;
}>;

export const Iconlink = ({
  url,
  alt,
  width,
  height,
  iconSource,
}: IconLinkProps) => {
  return url ? (
    <Link href={url}>
      <a className="z-20 pond__icon">
        <Image
          src={iconSource}
          width={width ?? 80}
          height={height ?? 80}
          alt={alt ?? "company logo"}
        />
      </a>
    </Link>
  ) : (
    <Image
      src={url}
      width={width ?? 80}
      height={height ?? 80}
      alt={alt ?? "company logo"}
      layout="fill"
      objectFit="cover"
    />
  );
};
