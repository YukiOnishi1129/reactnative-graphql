/**
 * Storage
 * @package storage
 */
/* storage */
import { StorageRepository } from '@Storage/StorageRepository';
import { UserEntity } from '@Storage/entities/UserEntity';

type RepositoryType = {
  user: StorageRepository<UserEntity> | null;
};

/**
 * repositories
 */
const repositories: RepositoryType = {
  user: null,
};

/**
 * getUserStorage
 * @returns
 */
export function getUserStorage(): StorageRepository<UserEntity> {
  if (repositories.user === null) {
    repositories.user = new StorageRepository<UserEntity>(new UserEntity());
  }

  return repositories.user;
}
