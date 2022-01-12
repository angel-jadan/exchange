const url = 'https://api.coincap.io/v2'
const headers = new Headers()
headers.append(
  'Content-Type',
  'application/json',
  'Access-Control-Allow-Origin',
  'Access-Control-Allow-Methods'
)

async function getAssets() {
  let rawData = await fetch(`${url}/assets?limit=20`)
  let jsonData = await rawData.json()
  return jsonData.data
}

async function getAsset(coin) {
  let rawData = await fetch(`${url}/assets/${coin}`)
  let jsonData = await rawData.json()
  return jsonData.data
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
}
