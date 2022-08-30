import { sleep } from 'antd-mobile/es/utils/sleep'

let count = 0

export async function mockRequest() {
  // if (count >= 5) {
  //   return []
  // }

  // 强制等待
  await sleep(2000)
  count++
  return [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
  ]
}