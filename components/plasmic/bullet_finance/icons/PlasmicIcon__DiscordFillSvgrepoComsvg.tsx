// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiscordFillSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiscordFillSvgrepoComsvgIcon(
  props: DiscordFillSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.894 4.344A17.41 17.41 0 0014.532 3c-.192.33-.406.779-.555 1.13a16.677 16.677 0 00-4.833 0c-.15-.351-.373-.8-.555-1.13a17.162 17.162 0 00-4.363 1.344C1.463 8.419.716 12.397 1.09 16.323A17.782 17.782 0 006.435 19a13 13 0 001.141-1.845 11.182 11.182 0 01-1.803-.864 6.67 6.67 0 00.438-.342c3.477 1.59 7.243 1.59 10.678 0 .15.118.288.235.437.342-.576.341-1.173.629-1.802.864.33.65.714 1.269 1.141 1.845a17.685 17.685 0 005.345-2.677c.459-4.544-.726-8.491-3.116-11.979zM8.056 13.901c-1.045 0-1.899-.949-1.899-2.112 0-1.162.832-2.112 1.899-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.843 2.112-1.899 2.112zm7.009 0c-1.045 0-1.9-.949-1.9-2.112 0-1.162.833-2.112 1.9-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.832 2.112-1.899 2.112z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DiscordFillSvgrepoComsvgIcon;
/* prettier-ignore-end */
