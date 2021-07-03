/**
 * TodoDetailPage
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { TodoDetailTemplate } from "@/components/templates/TodoDetail/index";

/**
 * TodoDetailPage
 * @returns
 */
const TodoDetailPage = () => (
  <BaseLayout>
    <TodoDetailTemplate />
  </BaseLayout>
);

export default TodoDetailPage;
