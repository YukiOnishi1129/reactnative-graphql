/**
 * Pagination
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
/* constants */
import { TODO_SHOW_COUNT } from "@/constants/config";
/* styles */
import { useStyles } from "./style";

/**
 * props
 */
type Props = {
  totalCount: number;
};

/**
 * Pagination
 * @param {Props} props
 * @returns
 */
export const Pagination: React.VFC<Props> = (props: Props) => {
  /* router */
  const { query } = useRouter();
  /* props */
  const { totalCount } = props;
  /* styles */
  const classes = useStyles();

  const pageRange = (start: number, end: number) => {
    // 「...Array」で1ページから最終ページまでの番号を配列に入れている
    // 「map((_, i) => start + i)」で1ページ目の番号は0なので、iを足している
    // ページの配列を作る
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  let currentPage = 1;
  if (query?.page && typeof query.page === "string") {
    currentPage = Number(query.page);
  }

  return (
    <ul className={classes.list}>
      {totalCount !== 0 &&
        pageRange(1, Math.ceil(totalCount / TODO_SHOW_COUNT)).map(
          (number, index) => (
            <li className={classes.iconArea} key={index}>
              <Link href={`/home/page/${number}`}>
                <span
                  className={
                    currentPage !== number ? classes.icon : classes.currentIcon
                  }
                >
                  {number}
                </span>
              </Link>
            </li>
          )
        )}
    </ul>
  );
};
