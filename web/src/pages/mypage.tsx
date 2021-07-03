/**
 * MyPage
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { MyPageTemplate } from "@/components/templates/MyPage/index";

/**
 * MyPage
 * @returns
 */
const MyPage = () => (
  <BaseLayout>
    <MyPageTemplate />
  </BaseLayout>
);

export default MyPage;
