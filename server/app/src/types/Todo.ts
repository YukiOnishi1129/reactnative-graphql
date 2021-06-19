/**
 * TodoType
 * @package types
 */

/**
 * TodoType
 */
export interface TodoType {
  readonly id: number;
  title: string;
  content: string;
  doneFlg: boolean;
  userId: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  deleteFlg: boolean;
}
