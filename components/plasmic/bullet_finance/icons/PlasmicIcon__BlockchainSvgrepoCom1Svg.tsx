// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlockchainSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlockchainSvgrepoCom1SvgIcon(
  props: BlockchainSvgrepoCom1SvgIconProps
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.5 6A1.5 1.5 0 016 4.5h3A1.5 1.5 0 0110.5 6v1h3V6A1.5 1.5 0 0115 4.5h3A1.5 1.5 0 0119.5 6v3a1.5 1.5 0 01-1.5 1.5h-1v3h1a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-1h-3v1A1.5 1.5 0 019 19.5H6A1.5 1.5 0 014.5 18v-3A1.5 1.5 0 016 13.5h1v-3H6A1.5 1.5 0 014.5 9V6zM16 10.5h-1A1.5 1.5 0 0113.5 9V8h-3v1A1.5 1.5 0 019 10.5H8v3h1a1.5 1.5 0 011.5 1.5v1h3v-1a1.5 1.5 0 011.5-1.5h1v-3zm-10-5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5H6zM5.5 15a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3zm9 0a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm0-9a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BlockchainSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
