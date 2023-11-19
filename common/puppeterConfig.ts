import puppeteer, { type Browser } from 'puppeteer'

export const getBrowser = async (): Promise<Browser> => {
  const browser = await puppeteer.launch({
    headless: 'new'
  })
  return browser
}
