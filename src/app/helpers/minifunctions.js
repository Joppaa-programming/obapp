export function filterByKey(key, data, filter) {
    return data.filter(item => item[key] === filter);
  }

 export  async function filterById(id,data) {
  
    return await data.find(x => x.id === parseInt(id));
  
  }
  export function Search(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  export function binarySearchById(data, targetId) {
    let low = 0;
    let high = data.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const current = data[mid];
  
      if (current.id === targetId) {
        return current;
      } else if (current.id < targetId) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return null;
  }
  export function handleSave(origin,array) {
    const savedAt = new Date().toISOString();
    const userId = 123
    const origin2Save = {
      originsId: origin.id,
      isPortrait: origin.isPortrait,
      image: origin.image,
      savedAt,
    };
    const item2Save = {
      id: userId,
      origins: [origin2Save],
      createdAt: savedAt,
      updatedAt: savedAt,
      userId: userId
    };
    saved.push(item2Save);
  
    return;
  }

  export function getGoogleMapsLink(address) {
    const encodedAddress = encodeURIComponent(address);
    const link = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
     window.open(link, '_blank')
  }

 export function cleanData(data) {
    return data.map((item) => {
      const cleanedItem = {};
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          if (typeof item[key] === 'object' && Object.keys(item[key]).length === 1) {
            const type = Object.keys(item[key])[0];
            cleanedItem[key] = item[key][type];
          } else {
            cleanedItem[key] = item[key];
          }
        }
      }
      return cleanedItem;
    });
  }