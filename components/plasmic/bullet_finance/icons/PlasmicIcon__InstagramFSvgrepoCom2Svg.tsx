// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramFSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramFSvgrepoCom2SvgIcon(
  props: InstagramFSvgrepoCom2SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"none"} fillRule={"evenodd"}>
        <path d={"M0 0h32v32H0z"}></path>

        <path
          d={
            "M17.083.033c8.12 0 14.762 6.643 14.762 14.762V17.1c0 8.12-6.643 14.762-14.762 14.762h-2.306C6.657 31.863.015 25.22.015 17.101v-2.306C.015 6.675 6.658.033 14.777.033zm-.863 8h-.205c-1.71 0-3.42.056-3.42.056a4.523 4.523 0 00-4.524 4.523s-.052 1.469-.056 3.045v.206c0 1.765.056 3.59.056 3.59a4.523 4.523 0 004.523 4.523s1.6.057 3.251.057c1.765 0 3.647-.057 3.647-.057a4.427 4.427 0 004.466-4.466s.057-1.805.057-3.534l-.001-.405a123.886 123.886 0 00-.056-3.015 4.427 4.427 0 00-4.466-4.467s-1.629-.052-3.272-.056zm-.205 1.44c1.402 0 3.2.046 3.2.046 2.049 0 3.313 1.265 3.313 3.313 0 0 .047 1.768.047 3.154 0 1.418-.047 3.247-.047 3.247 0 2.049-1.264 3.313-3.313 3.313 0 0-1.59.04-2.97.046h-.37c-1.354 0-3.004-.046-3.004-.046-2.049 0-3.37-1.321-3.37-3.37 0 0-.046-1.835-.046-3.282 0-1.355.046-3.062.046-3.062 0-2.048 1.321-3.313 3.37-3.313 0 0 1.741-.046 3.144-.046zm0 2.462a4.098 4.098 0 100 8.196 4.098 4.098 0 000-8.196zm0 1.431a2.667 2.667 0 110 5.333 2.667 2.667 0 010-5.333zm4.294-2.569a.993.993 0 00-.99.996c0 .55.443.995.99.995.547 0 .99-.446.99-.995a.993.993 0 00-.99-.996z"
          }
          fill={"currentColor"}
          fillRule={"nonzero"}
        ></path>
      </g>
    </svg>
  );
}

export default InstagramFSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
