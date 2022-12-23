// src/utils/geo.ts

export const geo = {
  // 获取定位
  getLocation(): Promise<Partial<GeolocationCoordinates>> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            resolve({ latitude, longitude })
          },
          (err) => {
            console.log(`getPosError:${err.code},${navigator.geolocation},${err.message}`)
          }
        )
      } else {
        console.log('This browser does not support getting geolocation')
      }
    })
  },

  // 根据定位打开google地图
  openMap({ latitude, longitude }: Record<string, string | number>) {
    if (latitude && longitude) {
      const href = `https://www.google.com/maps/place/${Number.parseFloat(
        <string>latitude
      )},${Number.parseFloat(<string>longitude)}`
      window.open(href, '_blank')
    }
  }
}
