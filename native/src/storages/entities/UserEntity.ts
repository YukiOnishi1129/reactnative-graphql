/**
 * Entity
 * @package storage
 */
/* storage */
import { Entity } from './Entity';

/**
 * UserEntity
 */
export class UserEntity extends Entity {
  public KEY = 'UserEntity';

  /**
   * @param {boolean} isLogin
   */
  public isLogin?: boolean;

  /**
   * @param {number} userId
   */
  public userId?: number;

  /**
   * @param {string} token
   */
  public token?: string;
}
