import data from './data'

export const mockGet = () => {
  return new Promise((resolve) => {
    const myTimeout = setTimeout(() => {
      resolve(JSON.stringify(data()))
      clearTimeout(myTimeout)
    }, 100)
  })
}