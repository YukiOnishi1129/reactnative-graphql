/**
 * StorageRepository
 * @package storage
 */
/* storage */
import Storage from './AppStorage';
import { Entity } from './entities/Entity';

/**
 * StorageRepository
 */
export class StorageRepository<T extends Entity> {
  public constructor(private entity: T) {}

  public getEntity(): T {
    return this.entity;
  }

  /**
   * loadする
   * @returns
   */
  public async load(): Promise<T> {
    return Storage.load({
      key: this.entity.KEY,
      autoSync: false,
    }).catch((err) => {
      console.log(err);
    });
  }

  /**
   * saveする
   * @param expires
   * @returns
   */
  public async save(expires?: number): Promise<void> {
    const current = (await this.load()) || {};
    const updated = this.entity;
    const data: T = Object.assign(current, updated);

    return Storage.save({
      key: this.entity.KEY,
      data,
      expires,
    });
  }

  /**
   * removeする
   * @returns
   */
  public async remove(): Promise<void> {
    return Storage.remove({
      key: this.entity.KEY,
    });
  }
}
