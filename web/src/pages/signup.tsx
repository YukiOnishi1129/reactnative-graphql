/**
 * SignUpPage
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { SignUpTemplate } from "@/components/templates/SignUp/index";

/**
 * SignUpPage
 * @returns
 */
const SignUpPage = () => (
  <BaseLayout>
    <SignUpTemplate />
  </BaseLayout>
);

export default SignUpPage;
