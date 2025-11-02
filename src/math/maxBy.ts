/**
 * 最大值函数 - 求数组中的最大值对应的迭代对象 | null
 * @param array 要求最大值的数组
 * @param iteratee 迭代函数
 * @returns 最大值对应的迭代对象 | null
 */
const maxBy = (array: any[], iteratee: (item: any) => number) => {
    if (array.length === 0) {
        return null;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (iteratee(array[i]) > iteratee(max)) {
            max = array[i];
        }
    }
    return max;
};

export default maxBy;