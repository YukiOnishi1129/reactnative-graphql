/**
 * TodoPage
 * home/page/[page]/
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { TodoPageTemplate } from "@/components/templates/TodoPage";

/**
 * TodoPage
 * @returns
 */
const TodoPage = () => (
  <BaseLayout>
    <TodoPageTemplate />
  </BaseLayout>
);

export default TodoPage;
