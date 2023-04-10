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
      var g = d.createElement(t)
      var s = d.getElementsByTagName(t)[0]
      g.src = BASE_URL + '/packs/js/sdk.js'
      // g.defer = true
      g.async = true
      s.parentNode.insertBefore(g, s)
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: 'pvrMMBqvsmQFw9cv2fYYG1Kt',
          baseUrl: BASE_URL,
        })
      }
    })(document, 'script')

    const { onRender } = this.props
    if (onRender) {
      onRender()
      // window.$chatwoot.setConversation('xyz','xyzz@xyz.com')
    }
  }

  render() {
    return null
  }
}

export default ChatwootWidget
