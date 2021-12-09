export const Sort = (rentals) => {

    const swap = (rentals, leftIndex, rightIndex) => {
        let temp = rentals[leftIndex];
        rentals[leftIndex] = rentals[rightIndex];
        rentals[rightIndex] = temp;
    }

    const partition = (rentals, left, right) => {
        let pivot = rentals[Math.floor((right + left) / 2)],
        i = left,
        j = right;

        while (i <= j) {
            while (rentals[i].price < pivot.price) {
                i++
            }
            while (rentals[j].price > pivot.price) {
                j--
            }
            if (i <= j) {
                swap(rentals, i, j);
                i++
                j--
            }
        }
        return i;
    }

    const quickSort = (rentals, left, right) => {
        let index;
        if (rentals.length > 1) {
            index = partition(rentals, left, right);
            if (left < index - 1) {
                quickSort(rentals, left, index - 1);
            }
            if (index < right) {
                quickSort(rentals, index, right);
            }
            return rentals;
        }
    }

    try {
        const sortedArray = quickSort(rentals, 0, rentals.length - 1);
        return sortedArray;
    } catch {
        console.log('no rentals')
    }

    
}