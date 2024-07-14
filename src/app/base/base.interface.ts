import { IFindByIdBaseOptions } from '../interfaces';

export interface IBaseService<T> {
  findByIdBase(id: string, options: IFindByIdBaseOptions): Promise<T>;

  isExist(filters: GenericObject): Promise<T>;
}
