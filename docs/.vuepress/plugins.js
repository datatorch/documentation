module.exports = () => {
  return [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const days = require('dayjs')
          const relativeTime = require('dayjs/plugin/relativeTime')
          days.extend(relativeTime)
          days.locale(lang)
          return days(timestamp).fromNow()
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-155314086-2'
      }
    ]
  ]
}
