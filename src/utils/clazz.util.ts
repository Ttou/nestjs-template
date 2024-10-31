/**
 * 类工具
 */
export class ClazzUtil {
  /**
     * 获取类数组属性数组
     * @public
     * @param clazzList 类数组
     */
  public static getClassListPropertyArray(clazzList: any[]) {
    return clazzList
      .map(clazz =>
        Object.getOwnPropertyNames(clazz.prototype)
          .filter(name => name !== 'constructor')
          .map(name => clazz.prototype[name]))
      .flat(1)
  }
}
