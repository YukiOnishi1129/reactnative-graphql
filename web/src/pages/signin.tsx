/**
 * SignInPage
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { SignInTemplate } from "@/components/templates/SignIn/index";

/**
 * SignInPage
 * @returns
 */
const SignInPage = () => (
  <BaseLayout>
    <SignInTemplate />
  </BaseLayout>
);

export default SignInPage;
