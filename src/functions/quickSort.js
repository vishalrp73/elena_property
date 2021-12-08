export const Sort = (items) => {

    const swap = (items, leftIndex, rightIndex) => {
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }

    const partition = (items, left, right) => {
        let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;

        while (i <= j) {
            while (items[i].price < pivot.price) {
                i++
            }
            while (items[j].price > pivot.price) {
                j--
            }
            if (i <= j) {
                swap(items, i, j);
                i++
                j--
            }
        }
        return i;
    }

    const quickSort = (items, left, right) => {
        let index;
        if (items.length > 1) {
            index = partition(items, left, right);
            if (left < index - 1) {
                quickSort(items, left, index - 1);
            }
            if (index < right) {
                quickSort(items, index, right);
            }
            return items;
        }
    }

    try {
        const sortedArray = quickSort(items, 0, items.length - 1);
        return sortedArray;
    } catch {
        console.log('no items')
    }

    
}