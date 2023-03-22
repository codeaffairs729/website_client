import React from 'react'

class ChatwootWidget extends React.Component {
  componentDidMount() {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'standard', // [standard, expanded_bubble]
    }

    // Paste the script from inbox settings except the <script> tag
    ;(function (d, t) {
      var BASE_URL = 'https://backend.codegaragetech.com'
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0]
      g.src = BASE_URL + '/packs/js/sdk.js'
      s.parentNode.insertBefore(g, s)
      // g.defer = true
      g.async = true
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: 'pvrMMBqvsmQFw9cv2fYYG1Kt',
          baseUrl: BASE_URL,
        })
      }
    })(document, 'script')
  }

  render() {
    return null
  }
}

export default ChatwootWidget