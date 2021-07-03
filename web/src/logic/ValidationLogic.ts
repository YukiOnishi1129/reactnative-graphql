/**
 * ValidationLogic
 * @package logics
 * @copyright Yuki Onishi
 */

/**
 * 必須チェック
 * @param {string} value
 * @returns
 */
export const RequiredValidation = (value: string): string => {
  if (value.trim() === "") return "入力してください。";
  return "";
};

/**
 * 最小文字数チェック
 * @param value
 * @param min
 */
export const MinLengthValidation = (value: string, min: number): string => {
  if (value.length < min) return min + "文字以上で入力してください。";
  return "";
};

/**
 * 最大文字数チェック
 * @param value
 * @param max
 */
export const MaxLengthValidation = (value: string, max: number): string => {
  if (value.length > max) return max + "文字以内で入力してください。";
  return "";
};

/**
 * 文字数チェック
 * @param value
 * @param min
 * @param max
 */
export const ValueLengthValidation = (
  value: string,
  min: number,
  max: number
): string => {
  if (value.length < min || value.length > max)
    return min + "文字以上" + max + "文字以内で入力してください。";
  return "";
};

/**
 * メールアドレス形式チェック
 * @param email
 */
export const EmailValidation = (email: string): string => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(email))
    return "正しい形式のメールアドレスを入力してください。";
  return "";
};

/**
 * 英数字チェック
 * @param value
 */
export const AlphanumericValidation = (value: string): string => {
  const regex = /^[A-Za-z0-9]*$/;
  if (!regex.test(value)) return "英数字にて入力してください。";
  return "";
};

/**
 * パスワード一致チェック
 * @param password
 * @param confirmPasseword
 */
export const MatchPasswordValidation = (
  password: string,
  confirmPassword: string
): string => {
  if (password !== confirmPassword) return "パスワード(再入力)と一致しません。";
  return "";
};
