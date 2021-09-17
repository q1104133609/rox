import { LocalModel, ModelHooks, ModelObj } from '../rmox';
declare const createLocalModel: <T extends ModelObj, P>(useCustomizedHook: ModelHooks<T, P>, storeName?: string) => LocalModel<T>;
export default createLocalModel;
