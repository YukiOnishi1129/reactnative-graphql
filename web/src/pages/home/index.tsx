/**
 * HomePage
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { HomeTemplate } from "@/components/templates/Home/index";

/**
 * HomePage
 * @returns
 */
const HomePage = () => (
  <BaseLayout>
    <HomeTemplate />
  </BaseLayout>
);

export default HomePage;
