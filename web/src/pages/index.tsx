/**
 * IndexPage
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { TopTemplate } from "@/components/templates/Top/index";

/**
 * IndexPage
 * @returns
 */
const IndexPage = () => (
  <BaseLayout>
    <TopTemplate />
  </BaseLayout>
);

export default IndexPage;
