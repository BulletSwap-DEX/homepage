// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuSvgrepoCom5SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuSvgrepoCom5SvgIcon(props: MenuSvgrepoCom5SvgIconProps) {
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
          "M17.54 8.81a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zm-11.08 0a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zm11.08 12.301a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zm-11.08 0a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MenuSvgrepoCom5SvgIcon;
/* prettier-ignore-end */
