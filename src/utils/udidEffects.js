export const useUdidEffect = (index, nodeP, nodeC, icon) => {
  icon[index].classList.toggle('isActive')
  if (window.getComputedStyle(nodeP[index]).maxHeight == '0px') {
    nodeP[index].style.maxHeight = nodeC[index].offsetHeight + 100 + 'px'
  } else {
    nodeP[index].style.maxHeight = '0px'
  }
}

export const encry = (address) => {
  let front, end
  if (address !== null && address > 6) {
    front = address.substring(0, 4)
    end = address.substring(address.length - 4)
  }
  return front + '...' + end
}

const addZero = (d) => {
  return parseInt(d) < 10 ? '0' + d : d
}

export const countTime = (endDate, time) => {
  let res = new Date(endDate).getTime() - new Date()
  if (res >= 0) {
    time.d = addZero(Math.floor(res / 1000 / 60 / 60 / 24)) //天
    time.h = addZero(Math.floor((res / 1000 / 60 / 60) % 24)) //时
    time.m = addZero(Math.floor((res / 1000 / 60) % 60)) //分
    time.s = addZero(Math.floor((res / 1000) % 60))
    return time
  }

  return time
}
