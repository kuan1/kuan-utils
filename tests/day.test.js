import dayjs from '../src/day'

it('test dayjs', () => {
  const timeStr = '2019-06-07T10:10:00.1000'
  const date = new Date('2019/06/07 10:10:00')
  expect(dayjs.toDate(timeStr)).toEqual(date)

  expect(dayjs.format(timeStr, 'YYYY-MM-DD')).toBe('2019-06-07')
})