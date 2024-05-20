export const YMDTHMtoDMY = (datetime: any) => {//2021-12-15T15:44:28.561Z -> 15/12/2021
  let [date, time] = datetime.split('T')
  let [y, m, d] = date.split('-')
  return [d, m, y].join('/')
}
export const YMDTHMtoHMDMY = (datetime: any) => {//2021-12-15T15:44:28.561Z ->15:44 15/12/2021
  let [date, time] = datetime.split('T')
  let [y, m, d] = date.split('-')
  let [h, mi] = time.split(':')
  return [h, mi].join(':') + ' ' + [d, m, y].join('/')
}
export const DatetimeToYMD = (d: any) => {//Sat Jan 15 2022 15:18:57 GMT+0700 (Indochina Time) -> 2020-12-15
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}
export const DatetimeToYMDHM = (d: any) => {//Sat Jan 15 2022 15:18:57 GMT+0700 (Indochina Time) -> 2020-12-15 15:50
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = '' + d.getFullYear(),
    h = '' + d.getHours(),
    mi = '' + d.getMinutes(),
    s = '' + d.getSeconds()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  if (h.length < 2) h = '0' + h
  if (mi.length < 2) mi = '0' + mi
  if (s.length < 2) s = '0' + s
  return [year, month, day].join('-') + ' ' + [h, mi, s].join(':')
}
export const DatetimeToYMDHM00 = (d: any) => {//Sat Jan 15 2022 15:18:57 GMT+0700 (Indochina Time) -> 2020-12-15 15:50:00
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = '' + d.getFullYear(),
    h = '' + d.getHours(),
    mi = '' + d.getMinutes(),
    s = '00'

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  if (h.length < 2) h = '0' + h
  if (mi.length < 2) mi = '0' + mi
  if (s.length < 2) s = '0' + s
  return [year, month, day].join('-') + ' ' + [h, mi, s].join(':')
}
export const DatetimeToYMDHMnotS = (d: any) => {//Sat Jan 15 2022 15:18:57 GMT+0700 (Indochina Time) -> 2020-12-15 15:50
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = '' + d.getFullYear(),
    h = '' + d.getHours(),
    mi = '' + d.getMinutes(),
    s = '00'

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  if (h.length < 2) h = '0' + h
  if (mi.length < 2) mi = '0' + mi
  if (s.length < 2) s = '0' + s
  return [year, month, day].join('-') + ' ' + [h, mi].join(':')
}
export const YMDHMToHMDMY = (time: any) => {//2020-12-15 15:50 -> 15:50 15-12-2000
  let [ymd, hm] = time.split(' ')
  let [y, m, d] = ymd.split('-')
  let [h, mi, s] = hm.split(':')

  return [h, mi, s].join(':') + ' ' + [d, m, y].join('-')
}
export const DatetimeToHMDMY = (d: any) => {//Sat Jan 15 2022 15:18:57 GMT+0700 (Indochina Time) -> 15:50 15-12-2000
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = '' + d.getFullYear(),
    h = '' + d.getHours(),
    mi = '' + d.getMinutes(),
    s = '' + d.getSeconds()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  if (h.length < 2) h = '0' + h
  if (mi.length < 2) mi = '0' + mi
  if (s.length < 2) s = '0' + s

  return [h, mi, s].join(':') + ' ' + [day, month, year].join('-')
}
export const YMDTHMtoObjDate = (str: any) => {//2021-01-01T00:00:00.000+00:00 -> Sat Jan 15 2022 15:18:57 GMT+0700 (Indochina Time) 
  const objDate = new Date();

  let [date, time] = str.split('T')
  let [y, m, d] = date.split('-')
  objDate.setFullYear(parseInt(y))
  objDate.setMonth(m - 1)
  objDate.setDate(d)
  objDate.setHours(0)


  return objDate
}

export const createRange = (n: number) => {//n -> [0,1,2,..,n-1]
  let res: any = []
  for (let i = 0; i < n; i++) res.push(i)
  return res
}
export const formatMoney = (n: number) => {//1000000 -> 1.000.000
  let str = n.toString()
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}