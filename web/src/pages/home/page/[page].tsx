/**
 * TodoPage
 * home/page/[page]/
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { HomeTemplate } from "@/components/templates/Home/index";

/**
 * TodoPage
 * @returns
 */
const TodoPage = () => (
  <BaseLayout>
    <HomeTemplate />
  </BaseLayout>
);

export default TodoPage;
