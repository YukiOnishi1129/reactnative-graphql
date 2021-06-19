/**
 * UserType
 * @package types
 */

/**
 * UserType
 */
export interface UserType {
  readonly id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  token: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  deleteFlg?: boolean;
}
